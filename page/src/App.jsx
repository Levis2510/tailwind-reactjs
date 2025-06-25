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

        {/* Clients*/}
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
   {/* Community */}
<div id='Community' className='bg-white flex flex-col items-center justify-center gap-6 p-4'>
  <div id='Community title' className='flex flex-col items-center text-center gap-2 p-4'>
    <h1 className='text-2xl sm:text-3xl font-bold text-gray-800'>
      Manage your entire community in a single system
    </h1>
    <p className='text-sm font-extralight'>Who is Nextcent suitable for?</p>
  </div>
  <div id='Community frame' className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6'>
    <div className='flex flex-col items-center justify-center gap-2 text-center'>
      <img src="img/membership.svg" alt="Membership" className='w-16 h-16' />
      <h1 className='text-lg sm:text-xl font-bold text-gray-800'>Membership Organisations</h1>
      <p className='text-sm font-extralight'>Our membership management software provides full automation of membership renewals and payments</p>
    </div>
    <div className='flex flex-col items-center justify-center gap-2 text-center'>
      <img src="img/national.svg" alt="National Associations" className='w-16 h-16' />
      <h1 className='text-lg sm:text-xl font-bold text-gray-800'>National Associations</h1>
      <p className='text-sm font-extralight'>Our membership management software provides full automation of membership renewals and payments</p>
    </div>
    <div className='flex flex-col items-center justify-center gap-2 text-center'>
      <img src="img/club-group.svg" alt="Clubs and Groups" className='w-16 h-16' />
      <h1 className='text-lg sm:text-xl font-bold text-gray-800'>Clubs And Groups</h1>
      <p className='text-sm font-extralight'>Our membership management software provides full automation of membership renewals and payments</p>
    </div>
  </div>
</div>


   {/* Achievements */}
<div id='Achievements' className='bg-teal-50 flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-10'>
  <div id='SectionAchievements' className='flex flex-col items-start md:items-start gap-4 md:w-1/2'>
    <h1 className='text-2xl sm:text-3xl font-bold text-gray-800 leading-snug'>
      Helping a local <br />
      <span className='text-green-600'>business reinvent itself</span>
    </h1>
    <p className='text-sm sm:text-base text-gray-700'>
      We reached here with our hard work and dedication
    </p>
  </div>
  <div id='Counts' className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-1/2'>
    <div className='flex items-center gap-3'>
      <img src='img/member.svg' alt='Members' className='w-10 h-10' />
      <div>
        <h1 className='text-xl font-semibold text-gray-800'>2,245,341</h1>
        <p className='text-sm text-gray-600'>Members</p>
      </div>
    </div>
    <div className='flex items-center gap-3'>
      <img src='img/club.svg' alt='Clubs' className='w-10 h-10' />
      <div>
        <h1 className='text-xl font-semibold text-gray-800'>46,328</h1>
        <p className='text-sm text-gray-600'>Clubs</p>
      </div>
    </div>
    <div className='flex items-center gap-3'>
      <img src='img/booking.svg' alt='Bookings' className='w-10 h-10' />
      <div>
        <h1 className='text-xl font-semibold text-gray-800'>828,867</h1>
        <p className='text-sm text-gray-600'>Event Bookings</p>
      </div>
    </div>
    <div className='flex items-center gap-3'>
      <img src='img/payment.svg' alt='Payments' className='w-10 h-10' />
      <div>
        <h1 className='text-xl font-semibold text-gray-800'>1,926,436</h1>
        <p className='text-sm text-gray-600'>Payments</p>
      </div>
    </div>
  </div>
</div>

   {/* Body */}
<div id='Body' className='bg-teal-50 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 py-6 gap-6 md:gap-10'>
  <div className='w-full md:w-1/2 flex items-center justify-center'>
    <img
      src="img/LogoT.jpg"
      alt="Logo"
      className='w-32 sm:w-48 md:w-60 h-auto object-contain'
    />
  </div>
  <div id='Content body' className='w-full md:w-1/2 flex flex-col gap-6'>
    <div className='flex flex-col gap-4'>
      <p className='text-sm text-gray-600 text-left'>
        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum
        risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam
        in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
        molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis
        tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
        potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate
        odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus
        ac sit amet magna.
      </p>
      <h1 className='text-xl font-semibold text-green-800 text-left'>Tim Smith</h1>
      <p className='text-sm text-gray-600 text-left'>
        British Dragon Boat Racing Association
      </p>
    </div>
    <div
      id='Logo body'
      className="flex flex-wrap sm:flex-nowrap flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-10 items-center justify-start w-full overflow-x-auto scroll-smooth pt-4"
    >
      {[
        'logo.png',
        'logo1.png',
        'logo2.png',
        'logo3.png',
        'logo4.png',
        'logo5.png',
      ].map((logo, i) => (
        <div
          key={i}
          className="p-2 rounded transition duration-300 hover:bg-green-200 flex-shrink-0"
        >
          <img
            src={`img/${logo}`}
            alt={`Client${i + 1}`}
            className="h-10 transition duration-300 filter hover:invert hover:sepia hover:saturate-200 hover:hue-rotate-240 hover:brightness-125"
          />
        </div>
      ))}
      <button className="group flex flex-row items-center gap-2 text-base text-green-600 hover:text-blue-600 font-semibold transition duration-300 flex-shrink-0 whitespace-nowrap">
        Meet all customers
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          className="w-4 h-4 transition duration-300 group-hover:translate-x-1"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</div>
    
       {/* Community Updates*/}
    <div id='Community Updates' className='flex flex-col p-4 gap-2'>
      <div id='content update' className='flex flex-col gap-2'>
        <h1 className='text-2xl font-bold text-gray-800'>Caring is the new marketing</h1>
        <p className='text-sm text-gray-600 '>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</p>
      </div>
      <div id='Community frame' className='flex flex-row items-center justify-around p-4 gap-4 '>
        <div id='frame1' >
          <img src="img/frame1.png" alt="" />
          <div id='content frame1' className='bg-teal-50 flex flex-col items-center justify-center'>
            <p>Creating Streamlined Safeguarding Processes with OneRen</p>
            <button className="group flex flex-row items-center gap-2 text-base text-green-600 hover:text-blue-600 font-semibold transition duration-300 flex-shrink-0 whitespace-nowrap">
              Readmore
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4 transition duration-300 group-hover:translate-x-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
         </svg>
      </button>
          </div>
        </div>
        <div id='frame2' >
          <img src="img/frame2.png" alt="" />
          <div id='content frame2' className='bg-teal-50 flex flex-col items-center justify-center'>
            <p>What are your safeguarding responsibilities and how can you manage them?</p>
            <button className="group flex flex-row items-center gap-2 text-base text-green-600 hover:text-blue-600 font-semibold transition duration-300 flex-shrink-0 whitespace-nowrap">
            Readmore
             <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4 transition duration-300 group-hover:translate-x-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
      </button>
          </div>
        </div>
        <div id='frame3'>
          <img src="img/frame3.png" alt="" />
          <div id='content frame3'  className='bg-teal-50 flex flex-col items-center justify-center'>
            <p>Revamping the Membership Model with Triathlon Australia</p>
            <button className="group flex flex-row items-center gap-2 text-base text-green-600 hover:text-blue-600 font-semibold transition duration-300 flex-shrink-0 whitespace-nowrap">
            Readmore
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4 transition duration-300 group-hover:translate-x-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </button>
          </div>
        </div>
      </div>  
    </div>

    {/* Footer*/}
<div id='Footer' className='bg-teal-50 flex flex-col justify-center items-center px-4 py-8 sm:px-8 md:px-12 lg:px-24 gap-4 text-center'>
  <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800'>
    Pellentesque suscipit fringilla libero eu.
  </h1>
  <button className='bg-green-600 hover:bg-green-700 text-white flex flex-row gap-3 items-center px-4 py-2 rounded'>
    Get a Demo
    <img src="img/arrow.png" alt="Arrow icon" className='w-3 h-2' />
  </button>
</div>

      </section>
    </>
  )
}

export default App

