import Notes from "../models/notes.model.js";
import { errorHandler } from "../utils/error.js";

export const createNote = async (req, res, next) => {
  try {
    const note = await Notes.create(req.body);
    return res.status(201).json(note);
  } catch (error) {
    next(errorHandler(400, error.message));
  }
};

export const getNotes = async (req, res, next) => {
  try {
    const notes = await Notes.find();
    return res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

export const getNote = async (req, res, next) => {
  try {
    const note = await Notes.findById(req.params.id);
    if (!note) {
      return next(errorHandler(404, "Note not found!"));
    }
    return res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};

export const updateNote = async (req, res, next) => {
  try {
    const note = await Notes.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!note) {
      return next(errorHandler(404, "Note not found!"));
    }
    return res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};

export const deleteNote = async (req, res, next) => {
  try {
    const note = await Notes.findByIdAndDelete(req.params.id);
    if (!note) {
      return next(errorHandler(404, "Note not found!"));
    }
    return next(errorHandler(200, "Note deleted successfully!"));
  } catch (error) {
    next(error);
  }
};
