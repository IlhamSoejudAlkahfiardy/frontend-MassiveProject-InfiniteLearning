import React from 'react'
import { FaFacebookSquare, FaYoutube, FaSave } from "react-icons/fa";
import InstagramLogo from '../../../assets/images/logo/instagram.png'
import { FaXTwitter } from "react-icons/fa6";


const DetailBusiness = () => {
    return (
        <div className='w-full lg:w-full xl:w-3/4 xl:px-24 py-10 px-5 md:px-12 lg:pt-16'>

            <div className='bg-white w-full rounded-lg p-4 lg:p-8 drop-shadow-md'>

                <p className='text-base md:text-lg font-semibold'>Usaha</p>
                <hr className='my-5' />

                <div className='xl:flex xl:flex-row flex flex-col gap-4 mb-6'>

                    <Business />

                    <Socmed />

                </div>

                <BasicInformation />



            </div>
        </div>
    )
}

const Business = () => {
    return (
        <div className='w-full xl:my-auto xl:w-1/2 border border-gray-300 rounded p-2 mb-5 flex flex-col gap-2'>
            <div className='flex flex-col gap-3'>
                <div className='w-full hover:cursor-pointer md:w-3/4 mx-auto md:max-h-72 aspect-video bg-gray-500 hover:bg-gray-600 transition-all rounded flex items-center justify-center' >
                    <p className='text-white'>Banner</p>
                </div>

                <div className='flex justify-center gap-3'>
                    <div className='w-20 bg-gray-500 hover:bg-gray-600 hover:cursor-pointer transition-all aspect-square rounded flex items-center justify-center ' >
                        <p className='text-xs text-white'>Foto 1</p>
                    </div>
                    <div className='w-20 bg-gray-500 hover:bg-gray-600 hover:cursor-pointer transition-all aspect-square rounded flex items-center justify-center '>
                        <p className='text-xs text-white'>Foto 2</p>

                    </div>
                    <div className='w-20 bg-gray-500 hover:bg-gray-600 hover:cursor-pointer transition-all aspect-square rounded flex items-center justify-center ' >

                        <p className='text-xs text-white'>Foto 3</p>

                    </div>
                    <div className='w-20 bg-gray-500 hover:bg-gray-600 hover:cursor-pointer transition-all aspect-square rounded flex items-center justify-center ' >
                        <p className='text-xs text-white'>Foto 4</p>

                    </div>
                </div>
            </div>

        </div>
    )
}

const Socmed = () => {
    return (
        <div className='flex flex-col md:items-start md:px-3 xl:w-1/2 xl:justify-center xl:items-center xl:ml-3 gap-3'>
            <form className='flex items-center gap-3 md:w-3/4 xl:w-full'>
                <div className='w-7'>
                    <img src={InstagramLogo} className='w-full' alt="" />
                </div>
                <input type="text" name='instagram' className='w-3/4 h-10 border border-gray-300 rounded p-2 text-sm placeholder:text-xs disabled:bg-gray-200' disabled={true} placeholder='Link instagram' />
            </form>
            <form className='flex items-center gap-3 md:w-3/4 xl:w-full'>
                <div className='w-7'>
                    <FaFacebookSquare className='inline-block w-full h-full text-blue-600' />
                </div>
                <input type="text" className='w-3/4 h-10 border border-gray-300 rounded p-2 text-sm placeholder:text-xs disabled:bg-gray-200' disabled={true} placeholder='Link Facebook' />
            </form>
            <form className='flex items-center gap-3 md:w-3/4 xl:w-full'>
                <div className='w-7'>
                    <FaXTwitter className='inline-block w-full h-full text-gray-900' />
                </div>
                <input type="text" className='w-3/4 h-10 border border-gray-300 rounded p-2 text-sm placeholder:text-xs disabled:bg-gray-200' disabled={true} placeholder='Link twitter' />
            </form>
            <form className='flex items-center gap-3 md:w-3/4 xl:w-full'>
                <div className='w-7'>
                    <FaYoutube className='inline-block w-full h-full text-red-600' />
                </div>
                <input type="text" className='w-3/4 h-10 border border-gray-300 rounded p-2 text-sm placeholder:text-xs disabled:bg-gray-200' disabled={true} placeholder='Link youtube' />
            </form>
        </div>
    )
}

const BasicInformation = () => {
    return (
        <div className='flex flex-col gap-4 mt-8 xl:flex-row xl:justify-start'>
            <div className='flex flex-col gap-4 xl:w-1/2'>
                <div className='flex flex-col gap-2 md:items-start md:justify-between'>
                    <label htmlFor="" className='text-sm'>Nama Usaha</label>
                    <input disabled={true} type="text" name="name" id="name" placeholder='Tuliskan brand usahamu' className='w-full md:w-3/4 xl:w-full border border-gray-400 rounded-md h-10 text-sm px-2 placeholder:text-xs disabled:bg-gray-200' />
                </div>
                <div className='flex flex-col gap-2 md:items-start md:justify-between'>
                    <label htmlFor="" className='text-sm'>Email</label>
                    <input disabled={true} type="email" name="email" id="email" placeholder='Email' className='w-full md:w-3/4 xl:w-full border border-gray-400 rounded-md h-10 text-sm px-2 placeholder:text-xs disabled:bg-gray-200' />
                </div>
                <div className='flex flex-col gap-2 md:items-start md:justify-between'>
                    <label htmlFor="" className='text-sm'>Telepon</label>
                    <input disabled={true} type="number" name="phone" id="phone" placeholder='Telepon' className='w-full md:w-3/4 xl:w-full border border-gray-400 rounded-md h-10 text-sm px-2 placeholder:text-xs disabled:bg-gray-200' />
                </div>
                <div className='flex flex-col gap-2 md:items-start md:justify-between'>
                    <label htmlFor="" className='text-sm'>Alamat</label>
                    <textarea name="" id="" cols="30" rows="10" disabled={true} placeholder='Alamat' className='w-full md:w-3/4 xl:w-full border border-gray-400 rounded-md text-sm p-2 placeholder:text-xs disabled:bg-gray-200'></textarea>
                </div>
            </div>
        </div>
    )
}

const Schedule = () => {
    return (
        <div className='w-full bg-red-500 flex '>
            <p>schedule</p>
        </div>
    )
}

export default DetailBusiness