import express from 'express';
import { createNote, deleteNote, getNote, getNotes, updateNote } from '../controllers/notes.controller.js';

const router = express.Router();

router.post('/', createNote);
router.get('/', getNotes);
router.get('/:id', getNote);
router.delete('/:id', deleteNote);
router.put('/:id', updateNote);

export default router;