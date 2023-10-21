import React from 'react'
import Button from '../Buttons/Button'

function FooterHeadSection() {
  return (
    <div className='pt-[47px] flex justify-between items-center'>
        <div className="left w-[45%]">
            <p className='text-4xl text-white pb-2'>Sign Up To Our Newsletter.</p>
            <p className='text-lg text-white font-light'>Be the first to hear about the latest offers.</p>
        </div>
        <div className="right flex w-[45%]">
            <input type="text" className='border-2 w-full mr-6 rounded-[4px] bg-transparent px-2 placeholder:text-white' placeholder='Your Email'/>
             <Button className="text-sm bg-[#0156FF] rounded-[50px] px-7 py-3 text-white font-semibold">Subscribe</Button>
        </div>



    </div>
  )
}

export default FooterHeadSection