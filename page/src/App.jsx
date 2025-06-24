import './App.css'

function App() {
  return (
    <>
<div id='Header' className='text-black bg-white flex flex-row justify-around'>
  <div id="Logo" className='flex flex-row gap-3 items-center'>
     <img src="img/Icon.png" alt="" className='w-6 h-6'/>
     <h1 className='text-black text-2xl font-bold'>Nexcent</h1>
  </div>
  <div id='Menu' className='flex flex-row gap-6 items-center'>
    <p className='text-black text-xl hover:text-sky-400'>Home</p>
    <p className='text-black text-xl hover:text-sky-400'>Features</p>
    <p className='text-black text-xl hover:text-sky-400'>Community</p>
    <p className='text-black text-xl hover:text-sky-400'>Blog</p>
    <p className='text-black text-xl hover:text-sky-400'>Pricing</p>
    <button className='bg-green-600 hover:bg-green-700 text-white flex flex-row gap-3 items-center px-4 py-2 rounded'>
        Register Now
      <img src="img/arrow.png" alt="" className='w-3 h-2'/>
    </button>
  </div>
</div>
    </>
  )
}

export default App
