import { useState, useEffect } from 'react';
import axios from 'axios';
import NotesDisplay from '../components/NotesDisplay.jsx';

export default function BookList() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const response = await axios.get('/server/notes');
        setNotes(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    }

    fetchNotes();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-14 p-9">
      {loading ? (
        <p>Loading...</p>
      ) : notes.length === 0 ? (
        <p>No notes found</p>
      ) : (
        notes.map((note) => <NotesDisplay key={note._id} note={note} />)
      )}
    </div>
  );
}
