import icon from '../../icons/icon.png'
import closeBut from '../../icons/closeBut.png'
import { useState } from 'react'

function LogoAndNavItems() {
    return (
        <div className='flex items-center gap-[110px] '>
            <img src={icon} alt="Logo" className="logo " />
            <NavItems className='max-md:hidden ' />
        </div>
    )
}
function NavItems({ className = "", liClassName = "" }) {
    return (
        <ul className={`flex gap-4 text-[#606060] font-[500] text-[16px] ${className}`} style={{ fontFamily: 'Inter' }}>
            <button><li className={liClassName}>Menu</li></button>
            <button><li className={liClassName}>Blog</li></button>              
            <button><li className={liClassName}>Pricing</li></button>
            <button><li className={liClassName}>Contact</li></button>
        </ul>
    )
}

function LogIn({className='',buttonClassName=''}) {
    return (
        <div className={`flex gap-[10px] items-center font-[500] text-[16px] ${className}`}>
            <button className={`bg-[#F9F9F9] text-[#606060]  border-[#606060] rounded-xl px-4 py-4 hover:bg-[#606060] hover:text-white transition duration-300 ease-in-out ${buttonClassName}`}>
                Log In
            </button>
            <button className={`px-4 py-4 bg-[#6C5FBC] rounded-xl ${buttonClassName}`}>Sign Up</button>
        </div>
    )
}

function BurgerOpen({ toggle }) {
    return (
        <div className='fixed h-[95%] w-[85%] bottom-[50%] right-[50%] translate-x-1/2 translate-y-1/2 rounded-2xl bg-[#CBCBCB] md:hidden z-[100]'>
            <div className='h-full w-full relative flex items-center justify-center flex-col gap-[100px]'>
                <button className="absolute right-[10px] top-[10px]" onClick={toggle}>
                    <img src={closeBut} alt="Закрыть меню" className="h-[60px] w-auto" />
                </button>
                <img src={icon} alt="Logo" className="absolute right-[50%] translate-x-1/2 top-[20px] h-[40px]" />
                <NavItems className='flex-col text-[40px] text-center gap-[30px]' liClassName='hover:text-[#6C5FBC] hover:border-b-[3px]' />
                <LogIn className='max-sm:flex-col' buttonClassName='h-[100px] w-[200px]'/>
            </div>
        </div>
    )
}

function BurgerMenu({ toggle }) {
    return (
        <div className='flex md:hidden'>
            <button
                className='h-[30px] cursor-pointer flex flex-col justify-between'
                onClick={toggle}
            >
                <div className='w-[30px] h-[3px] bg-[#606060]'></div>
                <div className='w-[30px] h-[3px] bg-[#606060]'></div>
                <div className='w-[30px] h-[3px] bg-[#606060]'></div>
            </button>
        </div>
    )
}


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => setIsOpen(prev => !prev)
    
    return (
        <nav className='flex h-[80px] items-center pb-[5px] justify-between border-b-[1px] border-[#CBCBCB] relative'>
            <LogoAndNavItems />
            <LogIn className='max-md:hidden'/>
            <BurgerMenu toggle={handleClick} />
            {isOpen && <BurgerOpen toggle={handleClick} />}
        </nav>
    )
}