import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai'
import { RiArrowUpSFill } from 'react-icons/ri'
import { useState } from 'react';

const Home = () => {

    const [darkmood,setDarkMood] =useState(false)


    function handaleChange (e){
    setDarkMood(e.target.checked)
    
    
    }
  return (
    <div>
         <div className={   darkmood? 'dark vh-100 ' : ' vh-100'}>
    <div className='text-slate-400 dark:bg-darkbg-dark'>

<div className='bg-bg dark:bg-darkbg dark:text-slate-800 dark:text-white'>
  <div className='container flex justify-between py-9 items-center  ' >
    <div>
      <h1 className='text-slate-800 dark:text-white font-bold text-3xl'>Social Media Dashboard</h1>
      <span className='text-sm'>Total followrs : 123456  </span>

    </div>
    <div>
      <label htmlFor='checkbox  ' className='mr-2'> Dark mode</label>
      <span>
        <input id='checkbox' onChange={handaleChange} type={'checkbox'} />
      </span>
    </div>

  </div>
</div>

{/* main cards */}
<div className='container mt-20'>
  {/* card */}
  <div className=' grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 lg:gap-8 gap-6'>
    <div className='card before:bg-facebook'>

      <div className='flex justify-center items-center pb-6 gap-1'>
        <span className='text-facebook'>
          <AiFillFacebook size={22} />
        </span>
        <span>@abcd</span>
      </div>

      <h2 className='text-slate-800 dark:text-white text-6xl font-bold'>1987</h2>
      <p className='font-medium uppercase tracking-widest-[0.3em]'>followrs</p>
      <div className='flex justify-center items-center pt-6 gap-1 text-maingreen'>
        <span>
          <RiArrowUpSFill />
        </span>
        <span>Today</span>
      </div>

    </div>
    <div className='card before:bg-twitter'>

      <div className='flex justify-center items-center pb-6 gap-1'>
        <span className='text-twitter'>
          <AiFillTwitterSquare size={22} />
        </span>
        <span>@abcd</span>
      </div>

      <h2 className='text-slate-800 dark:text-white text-6xl font-bold'>1987</h2>
      <p className='font-medium uppercase tracking-widest-[0.3em]'>followrs</p>
      <div className='flex justify-center items-center pt-6 gap-1 text-maingreen'>
        <span>
          <RiArrowUpSFill />
        </span>
        <span>Today</span>
      </div>

    </div>
    <div className='card before:bg-rose-700'>

      <div className='flex justify-center items-center pb-6 gap-1'>
        <span className='text-rose-700'>
          <AiFillYoutube size={22} />
        </span>
        <span>@abcd</span>
      </div>

      <h2 className='text-slate-800 dark:text-white text-6xl font-bold'>1987</h2>
      <p className='font-medium uppercase tracking-widest-[0.3em]'>followrs</p>
      <div className='flex justify-center items-center pt-6 gap-1 text-maingreen'>
        <span>
          <RiArrowUpSFill />
        </span>
        <span>Today</span>
      </div>

    </div>
    <div className='card before:bg-gradient-to-r before:from-amber-500 before:to-fuchsia-500'>

      <div className='flex justify-center items-center pb-6 gap-1'>
        <span className='text-fuchsia-600'>
          <AiFillInstagram size={22} />
        </span>
        <span>@abcd</span>
      </div>

      <h2 className='text-slate-800 dark:text-white text-6xl font-bold'>1987</h2>
      <p className='font-medium uppercase tracking-widest-[0.3em]'>followrs</p>
      <div className='flex justify-center items-center pt-6 gap-1 text-maingreen'>
        <span>
          <RiArrowUpSFill />
        </span>
        <span>Today</span>
      </div>

    </div>

  </div>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 my-9'> 
    {Array(8).fill(" ").map((idx) => {return <div key={idx} className='card-sm '>

      <div className='flex items-center justify-between'>
        <h4 className='font-bold'>pages Views</h4>
        <AiFillFacebook className='text-facebook' size={22} />

        <div className='flex items-center justify-between'>
          <h3 className='font-black text-2l text-slate-800 dark:text-white'>  101 </h3>
          <div className='flex item-center gap-1 text-maingreen text-sm'>
            <span>
              <RiArrowUpSFill />
            </span>



          </div>



        </div>

      </div>
    </div>
    })}
  </div>


</div>



</div>
</div>
      
    </div>
  )
}

export default Home
