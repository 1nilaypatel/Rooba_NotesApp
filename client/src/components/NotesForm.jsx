

export default function NotesForm({ formData, handleChange, handleSubmit }) {
  return(
    <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-7 mt-16'>
      <div className='flex flex-col flex-1 gap-5'>
        <input
          type="text"
          placeholder="Note Title"
          className="border rounded-lg p-3 focus:outline-indigo-400"
          id="title"
          required
          onChange={handleChange}
          value={formData.title}
        />
        <textarea
          type="text"
          placeholder="Write note here..."
          className="border rounded-lg p-3 focus:outline-indigo-400 h-60"
          id="description"
          required
          onChange={handleChange}
          value={formData.description}
        />
      </div>
    </form>
  )
}