import { useState } from 'react'
import './App.css'

function App() {
  const slides = [
    {
      title: 'Lessons and insights',
      highlight: 'from 8 years',
      desc: 'Where to grow your business as a photographer: site or social media?',
      image: 'img/Illustration.png',
      buttonText: 'Register',
      reverse: false,
      bgColor: 'bg-teal-50'
    },
    {
      title: 'The unseen of spending three years at Pixelgrade',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.',
      image: 'img/rafiki.png',
      buttonText: 'Learn More',
      reverse: true,
      bgColor: 'bg-white',
    },
    {
      title: 'How to design your site footer like we did',
      desc: 'Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.',
      image: 'img/pana.png',
      buttonText: 'Learn More',
      reverse: true,
      bgColor: 'bg-white',
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <section id='Layout' className='flex flex-col'>
        {/* Header */}
        <div id='Header' className='text-black bg-white flex flex-row justify-around py-4'>
          <div id="Logo" className='flex flex-row gap-3 items-center'>
            <img src="img/Icon.png" alt="" className='w-6 h-6' />
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
              <img src="img/arrow.png" alt="" className='w-3 h-2' />
            </button>
          </div>
        </div>

       <div id='Home' className={`relative ${slides[activeIndex].bgColor} flex flex-col items-center justify-center gap-10 p-10 transition-colors duration-500`}>

        
          <div className={`flex flex-col md:flex-row ${slides[activeIndex].reverse ? 'md:flex-row-reverse' : ''} items-center justify-center gap-16`}>
            <div id='Frame1' className='flex flex-col max-w-md gap-4'>
              <h1 className='text-4xl text-left font-bold text-gray-800'>
                {slides[activeIndex].title} <span className='text-green-600'>{slides[activeIndex].highlight}</span>
              </h1>
              <p className='text-gray-700 text-left'>{slides[activeIndex].desc}</p>
              <button className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-fit'>
               {slides[activeIndex].buttonText}
              </button>
            </div>
            <div id='Illustration'>
              <img src={slides[activeIndex].image} alt="Illustration" className='w-[400px] h-auto' />
            </div>
          </div>

  
          <div id='Dot' className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  i === activeIndex ? 'bg-green-600 scale-125' : 'bg-gray-400'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default App
