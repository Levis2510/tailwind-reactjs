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
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      image: 'img/rafiki.png',
      buttonText: 'Learn More',
      reverse: true,
      bgColor: 'bg-white',
    },
    {
      title: 'How to design your site footer like we did',
      desc: 'Donec a eros justo. Fusce egestas tristique ultrices...',
      image: 'img/pana.png',
      buttonText: 'Learn More',
      reverse: true,
      bgColor: 'bg-white',
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <section id='Layout' className='flex flex-col'>
        {/* Header */}
        <div id='Header' className='text-black bg-white flex justify-between items-center px-4 md:px-10 py-4 relative'>
          <div id="Logo" className='flex flex-row gap-3 items-center'>
            <img src="img/Icon.png" alt="Logo" className='w-6 h-6' />
            <h1 className='text-black text-2xl font-bold'>Nexcent</h1>
          </div>
          <button onClick={() => setShowMenu(!showMenu)} className="md:hidden block">
            <img src="img/menu.svg" alt="menu" className="w-6 h-6" />
          </button>

          <div className={`flex-col md:flex-row gap-6 items-center ${showMenu ? 'flex' : 'hidden'} md:flex absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 z-10`}>
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

        {/* Home*/}
        <div id='Home' className={`relative ${slides[activeIndex].bgColor} flex flex-col items-center justify-center gap-10 px-4 sm:px-6 md:px-10 py-10 transition-colors duration-500`}>
          <div className={`flex flex-col md:flex-row ${slides[activeIndex].reverse ? 'md:flex-row-reverse' : ''} items-center justify-center gap-10`}>
            <div id='Frame1' className='flex flex-col w-full md:max-w-md gap-4'>
              <h1 className='text-4xl text-left font-bold text-gray-800'>
                {slides[activeIndex].title}{' '}
                <span className='text-green-600'>{slides[activeIndex].highlight}</span>
              </h1>
              <p className='text-gray-700 text-left'>{slides[activeIndex].desc}</p>
              <button className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-fit'>
                {slides[activeIndex].buttonText}
              </button>
            </div>
            <div id='Illustration' className="w-full max-w-md">
              <img src={slides[activeIndex].image} alt="Illustration" className='w-full h-auto' />
            </div>
          </div>

          {/* Dot */}
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

        {/* Clients Section */}
    <div id='Clients' className='flex flex-col items-center justify-center gap-10 px-4 sm:px-6 md:px-10 py-10'>
  <div id='Section Title' className='flex flex-col items-center justify-center gap-4'>
    <h1 className='text-4xl text-center font-bold text-gray-800'>Our Clients</h1>
    <p className='text-lg text-center font-normal'>We have been working with some Fortune 500+ clients</p>
  </div>
<div
  id="Client logo"
  className="flex flex-row gap-4 sm:gap-6 md:gap-10 lg:gap-20 items-center justify-center w-full overflow-x-auto scroll-smooth px-0 sm:px-6 md:px-10"
>
  {[
    'logo.png',
    'logo1.png',
    'logo2.png',
    'logo3.png',
    'logo4.png',
    'logo5.png',
    'logo2.png',
  ].map((logo, i) => (
    <img
      key={i}
      src={`img/${logo}`}
      alt={`Client${i + 1}`}
      className="h-6 sm:h-8 md:h-10 lg:h-12 object-contain flex-shrink-0"
    />
    ))}
  </div>
  </div>
   {/* Achievements */}
    <div id='Achievements' className='bg-teal-50 flex flex-row items-center justify-around p-4'>
        <div id='SectionAchievements' className='flex flex-col items-center justify-center gap-2 p-4'>
            <h1 className='text-3xl text-left font-bold text-gray-800'>
            Helping a local <br />
            <span className='text-green-600'>business reinvent itself</span>
            </h1>
            <p className='text-sm text-left'>We reached here with our hard work and dedication</p>
        </div>
        <div id='Counts' className='grid grid-cols-2 gap-4'>
            <div>
              <div className='flex flex-row gap-4'>
                  <img src="img/member.svg" alt="" />
                  <h1 className='text-xl text-center font-semibold text-gray-800'>2,245,341</h1>
              </div>
              <p className='text-base text-left font-light text-gray-800'>Members</p>
            </div>
            <div>
              <div className='flex flex-row gap-4'>
              <img src="img/club.svg" alt="" />
              <h1 className='text-xl text-center font-semibold text-gray-800'>46,328</h1>
              </div>
              <p className='text-base text-left font-light text-gray-800'>Clubs</p>
            </div>
            <div>
              <div className='flex flex-row gap-4'>
              <img src="img/booking.svg" alt="" />
              <h1 className='text-xl text-center font-semibold text-gray-800'>828,867</h1>
              </div>
              <p className='text-base text-left font-light text-gray-800'>Event Bookings</p>
            </div>
            <div>
              <div className='flex flex-row gap-4'>
              <img src="img/payment.svg" alt="" />
              <h1 className='text-xl text-center font-semibold text-gray-800'>1,926,436</h1>
            </div>
              <p className='text-base text-left font-light text-gray-800'>Payments</p>
            </div>
        </div>
    </div>
      </section>
    </>
  )
}

export default App

