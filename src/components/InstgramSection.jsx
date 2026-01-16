import React from 'react'
import pandora from '../assets/pandora.jpg';
import molo from '../assets/molo.jpg';
import n3na3 from '../assets/n3na3.jpg';
import pap from '../assets/pap.jpg';
import grass from '../assets/grass.jpg';
import orangewithwater from '../assets/orangewithwater.jpg';
import { FaInstagram } from 'react-icons/fa';

export default function InstgramSection() {
  return (
    <div>
      <section className='flex justify-center mb-15'>
        <div className="container flex flex-col items-center gap-8">
          <h1 className='text-[32px] font-semibold text-custBlack'>Follow us on Instagram</h1>
          <div className="grid grid-cols-3 grid-rows-2 lg:grid-cols-6 lg:grid-rows-1 gap-6">
          
          <div className="col-span-1 relative w-25 h-25 lg:w-50 lg:h-50 rounded-[10px]">
            <div className={`absolute inset-0 bg-cover bg-center rounded-[10px]`} style={{backgroundImage: `url(${pandora})`}}></div>
            <div className="flex justify-center opacity-0 hover:opacity-100 duration-300 items-center absolute inset-0 bg-hover bg-cover bg-center  rounded-[10px]">
              <FaInstagram className='text-white text-[32px]' />
            </div>
          </div>

          <div className="col-span-1 relative w-25 h-25 lg:w-50 lg:h-50 rounded-[10px]">
            <div className={`absolute inset-0 bg-cover bg-center rounded-[10px]`} style={{backgroundImage: `url(${molo})`}}></div>
            <div className="flex justify-center opacity-0 hover:opacity-100 duration-300 items-center absolute inset-0 bg-hover bg-cover bg-center  rounded-[10px]">
              <FaInstagram className='text-white text-[32px]' />
            </div>
          </div>

          <div className="col-span-1 relative w-25 h-25 lg:w-50 lg:h-50 rounded-[10px]">
            <div className={`absolute inset-0 bg-cover bg-center rounded-[10px]`} style={{backgroundImage: `url(${n3na3})`}}></div>
            <div className="flex justify-center opacity-0 hover:opacity-100 duration-300 items-center absolute inset-0 bg-hover bg-cover bg-center  rounded-[10px]">
              <FaInstagram className='text-white text-[32px]' />
            </div>
          </div>

          <div className="col-span-1 relative w-25 h-25 lg:w-50 lg:h-50 rounded-[10px]">
            <div className={`absolute inset-0 bg-cover bg-center rounded-[10px]`} style={{backgroundImage: `url(${pap})`}}></div>
            <div className="flex justify-center opacity-0 hover:opacity-100 duration-300 items-center absolute inset-0 bg-hover bg-cover bg-center  rounded-[10px]">
              <FaInstagram className='text-white text-[32px]' />
            </div>
          </div>

          <div className="col-span-1 relative w-25 h-25 lg:w-50 lg:h-50 rounded-[10px]">
            <div className={`absolute inset-0 bg-cover bg-center rounded-[10px]`} style={{backgroundImage: `url(${grass})`}}></div>
            <div className="flex justify-center opacity-0 hover:opacity-100 duration-300 items-center absolute inset-0 bg-hover bg-cover bg-center  rounded-[10px]">
              <FaInstagram className='text-white text-[32px]' />
            </div>
          </div>

          <div className="col-span-1 relative w-25 h-25 lg:w-50 lg:h-50 rounded-[10px]">
            <div className={`absolute inset-0 bg-cover bg-center rounded-[10px]`} style={{backgroundImage: `url(${orangewithwater})`}}></div>
            <div className="flex justify-center opacity-0 hover:opacity-100 duration-300 items-center absolute inset-0 bg-hover bg-cover bg-center  rounded-[10px]">
              <FaInstagram className='text-white text-[32px]' />
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}
