import React, { useEffect } from 'react'
import { useState } from 'react'
import Logo from '../assets/images/logo/logo.png'
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa'
import DropdownKategori from './DropdownKategori';

const Navbar = () => {

    const [mobileNavbar, setMobileNavbar] = useState(false);
    const [dropdownKategori, setDropdownKategori] = useState(false);

    return (
        <>

            <div className='w-full h-24 bg-[#1A1A1A] flex items-center justify-between px-6 lg:px-16 xl:px-16 z-10'>

                <Brand />

                <HumbergerMenu setMobileNavbar={setMobileNavbar} mobileNavbar={mobileNavbar} />

                <NavbarWebsite setDropdownKategori={setDropdownKategori} dropdownKategori={dropdownKategori} />

                <NavbarMobile setDropdownKategori={setDropdownKategori} dropdownKategori={dropdownKategori} mobileNavbar={mobileNavbar} />

                <DropdownKategori display={dropdownKategori ? "flex" : "hidden"} />
            </div>

        </>
    )
}

const Brand = () => {
    return (
        <div className='flex items-center gap-1 '>
            <Link to="#">
                <img
                    src={Logo}
                    className='w-16'
                    alt="" />
            </Link>
            <div>
                <Link
                    to="#"
                    className='hidden md:flex lg:flex xl:flex text-white text-sm font-medium'>
                    HairHub
                </Link>

                <Link
                    to="#"
                    className='md:hidden lg:hidden xl:hidden text-white text-sm font-medium'>
                    Hair <br /> Hub
                </Link>
            </div>
        </div>
    )
}

const HumbergerMenu = ({ setMobileNavbar, mobileNavbar }) => {

    const handleHumbergerMenu = () => {
        setMobileNavbar(!mobileNavbar)
    }

    return (
        <div className='text-white lg:hidden xl:hidden items-center justify-end gap-2'>
            {mobileNavbar}
            <svg
                onClick={() => handleHumbergerMenu()}
                className={`w-5 h-5 transition-all ${mobileNavbar ? "rotate-90" : "rotate-0"}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14">

                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />

            </svg>
        </div>
    )
}

const NavbarWebsite = ({ setDropdownKategori, dropdownKategori }) => {

    const handleDropdownKategori = () => {
        setDropdownKategori(!dropdownKategori)
    }

    return (
        <div className='text-white hidden lg:flex xl:flex items-center justify-end gap-6 w-3/4 '>

            <input
                placeholder='Cari apa?'
                type="text"
                className='bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 flex py-2 px-4  w-1/2' />

            <Link
                to="#"
                className='text-sm font-medium py-1 px-4'>Syarat dan Ketentuan</Link>

            <Link
                to="#"
                onClick={() => handleDropdownKategori()}
                className='text-sm font-medium gap-1 flex items-center py-1 px-4'>
                Kategori
                <FaAngleDown className='inline-block' />
            </Link>


            <Link
                to="#"
                className='text-sm font-medium py-1 px-7 bg-rose-400 rounded-sm hover:bg-rose-500 transition-all'>Login</Link>

        </div>
    )
}

const NavbarMobile = ({ mobileNavbar, setDropdownKategori, dropdownKategori }) => {

    const handleDropdownKategori = () => {
        setDropdownKategori(!dropdownKategori)
    }

    return (
        <div className={`w-full h-fit px-3 py-7 md:px-8 flex flex-col gap-6 lg:hidden xl:hidden bg-[#1a1a1a] absolute transition-all text-white top-24 ${mobileNavbar ? "left-0" : "left-[-450px] md:left-[-780px]"}`}>
            <div className='flex gap-2'>
                <input
                    placeholder='Cari apa?'
                    type="text"
                    className='bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 flex py-2 px-4 w-3/4' />
                <button className='p-2 bg-bg-rose-400 bg-rose-400 hover:bg-rose-500 text-white rounded-md w-1/4'>
                    Cari
                </button>
            </div>

            <Link
                to="#"
                className='text-sm inline-block font-medium py-1  w-fit'>Syarat dan Ketentuan</Link>

            <Link to="#"
                onClick={() => handleDropdownKategori()}
                className='text-sm inline-block font-medium gap-1 items-center py-1  w-fit'>
                Kategori
                <FaAngleDown className='inline-block ml-2' />
            </Link>

            <Link
                to="#"
                className='text-sm inline-block font-medium py-1 px-7 bg-rose-400 rounded-sm hover:bg-rose-500 transition-all w-fit'>Login</Link>
        </div>
    )
}

export default Navbar