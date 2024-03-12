import React from 'react'
import { AiOutlineFacebook } from 'react-icons/ai'
import { BiMenuAltLeft } from 'react-icons/bi'
import { FaInstagram } from 'react-icons/fa'
import { IoMdContacts } from 'react-icons/io'
import { IoArrowDown, IoArrowDownCircleOutline } from 'react-icons/io5'
import { LiaWhatsappSquare } from 'react-icons/lia'
import { RiArrowRightUpLine } from 'react-icons/ri'

export const Hero = () => {
    return (
        <section className='p-4 bg-white  '>

            <div className="bg-cover bg-center h-auto  bg-[url('/pixel-bg.jpg')] rounded-t-3xl">

                <div className="pt-40 pl-1 md:pl-2  rounded-bl-2xl">

                    <div className="p-2 lg:p-2 text-gray-800 bg-white my-2 rounded-5xl rounded-3xl w-12">

                        <FaInstagram size={30} />
                    </div>
                    <div className="p-2 text-gray-800 bg-white  my-2 rounded-3xl w-12">
                        <AiOutlineFacebook size={30} />
                    </div>
                    <div className="p-2 text-gray-800 bg-white  my-2 rounded-3xl w-12">
                        <LiaWhatsappSquare size={30} />
                    </div>
                </div>

                <div className="pt-4  text-white flex flex-wrap md:flex-nowrap">
                    <div className='w-full md:w-2/3 mr-8 '>
                        <div className='hidden md:flex bg-white py-1 text-gray-800 flex w-2/6 rounded-tl-3xl] rounded-tr-3xl  bg-white'>
                            <p className='w-100'>It&apos;s about creating something bigger than yourself</p>
                            <div className='m-auto pr-4'>
                                <IoArrowDownCircleOutline size={35} />
                            </div>

                        </div>
                        <div className='flex' >
                            <p className="bg-white pr-2 mb-[-8px] pr-1 pb-0 text-gray-900 rounded-tr-3xl text-3xl md:text-6xl font-bold md:pr-8">
                                Unlocking
                            </p>
                            <div className="px-4 py-auto md:py-4   flex space-x-1 lg:space-x-3 rounded-bl-3x ml-[-4px] text-gray-800 px-2">
                                <button className="bg-white px-2 lg:px-4  rounded-3xl my-2 py-auto h-8 md:h-auto flex items-center justify-center">
                                    <span className='pt-0.5 md:pt-0'>Contact</span>
                                    &nbsp;&nbsp;
                                    <RiArrowRightUpLine size={20} />
                                </button>
                                <div className="p-1 px-1.5  h-8 md:h-auto my-2 lg:p-2 text-gray-800 bg-white rounded-full">
                                    <IoArrowDown size={20} />

                                </div>
                            </div>
                        </div>

                        <p className="bg-white  py-2 rounded-tr-3xl text-gray-900 text-3xl md:text-6xl font-bold "> Digital Excellence</p>

                    </div>

                    <div className="m-[-2px] md:m-0 bg-white sm:bg-transparent w-full md:w-1/3 m-0 md:mt-2 px-2 md:px-4  flex pb-4">
                        <div className="rounded-3xl mt-2 p-4  text-gray-700 bg-gray-100 md:bg-white  items-center  md:w-5/6">
                            <h6 className='flex items-middle text-xl flex items-center text-gray-900 '>
                                <IoMdContacts color='rgb("31 41 55")' /> &nbsp;About Us
                            </h6>
                            <p className=''>Our journey began with a shared vision among a group of tech enthusiasts, brought together by the idea of revolutionizing the digital landscape.</p>

                        </div>
                        <div className="flex bg-inherit items-end  w-1/6">
                            <div className='rounded-3xl p-1 ml-[-50px] mt-[5px] bg-white md:bg-[url("/pixel-bg.jpg")]  bg-auto bg-right-bottom'>
                                <p></p>
                                <div className='bg-gray-100 md:bg-white text-gray-700 flex-end rounded-3xl  p-2'>
                                    <RiArrowRightUpLine size={30} />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}
