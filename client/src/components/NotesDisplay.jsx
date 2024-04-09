import { Link, useNavigate } from 'react-router-dom';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import axios from 'axios';

export default function NotesDisplay({ note }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this Note?");
    if (!confirmDelete) {
      return;
    }
    try {
      await axios.delete(`/server/notes/${note._id}`);
      navigate('/');
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
      <Link to={`/update-notes/${note._id}`}>
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            {note.title}
          </p>
          <p className='text-sm text-gray-600 line-clamp-4'>
            {note.description}
          </p>
          <div className='flex flex-row gap-3 justify-end'>
            <Link to={`/update-notes/${note._id}`} className='text-indigo-500 mr-4'><FaPencilAlt /></Link>
            <span className='text-red-500' onClick={() => handleDelete()}><FaTrash /></span>
          </div>
        </div>
      </Link>
    </div>
  );
}
