import { BsPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Appbar() {
  return (
    <header className='bg-slate-600 shadow-md fixed top-0 w-full z-50'>
      <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        <Link to='/'>
          <h1 className='flex font-bold text-xl sm:text-2xl'>
            <span className='text-slate-400'>Rooba</span>
            <span className='text-slate-200'>Notes</span>
          </h1>
        </Link>
        <Link to='/create-notes'>
          <BsPlus className='text-white mr-1 cursor-pointer' size={35} />
        </Link>
      </div>
    </header>
  )
}
