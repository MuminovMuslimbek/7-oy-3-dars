import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className='bg-blue-500 select-none py-[20px] text-[#fdfdfd]'>
            <div className='max-w-[1200px] w-full mx-auto flex justify-between'>
                <Link to='/' className='text-[23px]'>Logo</Link>
                <ul className='flex items-center gap-[30px]'>
                    <NavLink className='hover:underline text-[18px]' to='/'>FirstHomework</NavLink>
                    <NavLink className='hover:underline text-[18px]' to='/secondHomewok'>SecondHomework</NavLink>
                    <NavLink className='hover:underline text-[18px]' to='/thirdHomework'>ThirdHomework</NavLink>
                </ul>
                <button>Log Out</button>
            </div>
        </header>
    )
}

export default Header