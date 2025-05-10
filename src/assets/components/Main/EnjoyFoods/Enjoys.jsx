import { Button } from "../../list/Button"
import vectorText from '../../../icons/Vector.svg'
import vectorStar from '../../../icons/Vector2.svg'
import food from '../../../images/FoodImage.png'
import eclipse from '../../../images/Ellipse2038.png'
import chickenhell from '../../../icons/chickenhell.svg'
import arrow from '../../../icons/Arrow01.svg'
import graph from '../../../images/Graph.svg'
export default function MainEnjoy() {
    return (
        <div className="">
            <EnjoyText h1ClassName='font-[600] text-[75px] text-[#201F1F] max-w-[607px] max-2xl:text-[60px] max-sm:text-[40px]' h5ClassName=' font-[400] text-[#676767]/70 text-[13px] mb-[10px] max-w-[567px]' span="text-[#6C5FBC]" />
        </div>
    )
}

function Users({ quantity, h6ClassName = '' }) {
    return (
        <h6 className={h6ClassName}>OVER {quantity} USERS</h6>
    )
}

import { useState, useEffect } from 'react';

function Clock({className}) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');

    return (
        <p className={`font-[500] text-[#ACADB9] text-[10px] ${className}`}>
            {hours}:{minutes}
        </p>
    );
}


function EnjoyText({ h1ClassName = '', h2ClassName = '', h3ClassName = '', h4ClassName = '', h5ClassName = '', h6ClassName = '', span = '' }) {


    return (
        <div className="flex items-center justify-between mt-[50px] max-lg:flex-col max-lg:text-center">
            <div className="flex flex-col max-w-[650px] max-lg:items-center ">
                <Users quantity={1000} h6ClassName='text-[15px] font-bold text-[#201F1F33] mb-[10px]' />
                <h1 className={h1ClassName} style={{fontFamily:'Poppins'}}>Enjoy Foods <span className="max-sm:hidden">All</span> Over The <span className={span}>World</span></h1>
                <h5 className={h5ClassName}>EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <span className={span}>$20 bonus.</span>  </h5>
                <div className="flex gap-3 mt-[30px]">
                    <Button buttonClassName='bg-[#6C5FBC] text-white font-[500] text-[17px] py-[10px] px-[20px] rounded-[11px]'>Get Started</Button>
                    <Button buttonClassName='text-[#6C5FBC] font-[500] text-[17px] py-[10px] px-[20px] border-1 rounded-[11px] hover:bg-[#f9f9f9]'>Go Pro</Button>
                </div>
                <div className="flex items-end gap-2 mt-[30px]">
                    <img src={vectorStar} alt="" />
                    <img src={vectorText} alt="" />
                    <h6>⭐⭐⭐⭐⭐</h6>
                </div>
            </div>
            <div className="w-[650px] flex items-center justify-center max-2xl:w-[570px] max-xl:justify-start max-xl:ml-[-20px] max-lg:mt-[50px] max-lg:justify-center max-sm:w-[300px]">
                <div className="w-[650px] flex flex-col items-end max-2xl:w-[500px] max-xl:ml-[-20px] max-lg:mt-[50px]">
                    {/* Блок с текстом теперь перед картинкой */}
                    <div className="mb-[-10px] bg-[#fff] h-[90px] w-[330px] rounded-[10px] text-[black] flex items-center  gap-4 relative z-[2] max-sm:w-[250px]"
                        style={{ fontFamily: 'Poppins', boxShadow: '-5px 10px 10px 3px rgba(0, 0, 0, 0.15)' }}>
                        <img src={chickenhell} alt="" className="h-[81px] w-[73px] ml-[15px]" />
                        <div className="flex flex-col relative">
                            <h1 className="font-[600] text-[16px]">Chisken Hell</h1>
                            <h4 className="font-[500] text-[10px]">On The Way</h4>
                            <Clock className="absolute right-[-100px] bottom-[-10px] max-sm:right-[-30px]"/>
                        </div>
                    </div>

                    {/* Контейнер с картинками */}
                    <div className="relative z-[0] w-full flex items-center justify-center max-lg:w-full">
                        <img src={food} alt="" className="w-full max-w-[430px] z-[1] max-2xl:max-w-[350px] max-lg:max-w-[430px] max-sm:w-[300px]" />
                        <img src={eclipse} alt="" className="absolute top-[-12px] right-[50%] translate-x-[55%] w-[420px] z-[-1] max-2xl:w-[345px] max-lg:w-[420px] max-sm:w-[300px]" />
                        <img src={arrow} alt="" className="absolute right-[50px] top-[30px] z-[-2] max-lg:right-[-15px] max-sm:right-[30px]" />
                    </div>
                </div>
            </div>

        </div>

    )
}