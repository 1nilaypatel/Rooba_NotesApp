import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import NotesForm from '../components/NotesForm.jsx';

export default function UpdateNotes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const fetchNote = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/server/notes/${id}`);
        const data = response.data;
        setFormData(data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching note details");
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    if (
      formData.title === "" ||
      formData.description === ""
    ) {
      setError("All fields are required.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try{
      setLoading(true);
      setError(false);
      const response = await axios.put(`/server/notes/${id}`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setLoading(false);
      if(response.data.success === false){
        setError(response.data.message);
      } else {
        navigate(`/`);
      }
    } catch(error){
      setError("Error updating note");
      setLoading(false);
    }
  };

  return (
    <main className="p-3 max-w-5xl mx-auto mt-14 text-slate-800">
      <h1 className='text-3xl font-semibold text-center mb-8 mt-6'>
        create a new note
      </h1>
      <NotesForm
        formData={formData} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
      />
      <div className='mt-10 text-center'>
        <button 
          onClick={handleSubmit}
          disabled={loading} 
          className="p-3 bg-indigo-300 text-slate-900 rounded-lg uppercase hover:bg-opacity-85 disabled:bg-opacity-40"
        >
          {loading ? "Updating..." : "Update Note"}
        </button>
        {error && <p className='text-red-500 text-sm mt-3'>{error}</p> }
      </div>
    </main>
  )
}
