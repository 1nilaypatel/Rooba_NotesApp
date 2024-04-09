import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appbar from './components/Appbar.jsx';
import { CreateNotes, Notes, UpdateNotes } from './pages';

export default function App() {
  return (
    <div>
      <Router>
        <Appbar/>
        <Routes>
          <Route path={"/"} element={<Notes />} />
          <Route path={"/create-notes"} element={<CreateNotes />} />
          <Route path={"/update-notes/:id"} element={<UpdateNotes />} />
        </Routes>
      </Router>
    </div>
  )
}
