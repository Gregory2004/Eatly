export default function Footer() {
    return (
        <div className='w-full h-[100px] bg-[#F9F9F9] flex justify-center items-center'>
            <ul className="flex justify-center items-center w-[80%] h-full text-[#999999] font-[500] text-[14px]">
                <li>
                    <button>Blog</button>
                </li>
                <li className='mx-[20px]'>
                    <button>About Us</button>
                </li>  
                <li className='mx-[20px]'>
                    <button>Contact Us</button>
                </li>
                <li className='mx-[20px]'>
                    <button>Privacy Policy</button>
                </li>
            </ul>
            <div className='w-[80%] flex justify-between items-center'>
                <h1 className='text-[20px] font-bold text-[#999999]'>Food Delivery</h1>
                <p className='text-[14px] font-[500] text-[#C5BFED]'>© 2025 Food Delivery. All rights reserved.</p>
            </div>
        </div>
    )
}