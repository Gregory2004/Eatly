import CountUp from 'react-countup';
import bg from '../../../images/quantitybg.svg'
import bgmobile from '../../../images/quantitymobilebg.png'
import { useEffect, useRef, useState } from 'react';
import { motion } from "motion/react"

export function Quant({ count, duration, separator = '', suffix, p }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
    if (isVisible || !ref.current) return;
  
        const rect = ref.current.getBoundingClientRect();
        const h = rect.height;
        const visibleH = Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);
        const ratio = visibleH / h;
  
        if (ratio >= 0.9) {
          setIsVisible(true);
        }
        else{
            setIsVisible(false);
        }
        
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // вдруг уже видно
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, [isVisible]);
  
    return (
      <div ref={ref} className="z-10 text-center">
        {isVisible && (
          <h1 className="mt-2 text-4xl font-bold max-lg:text-3xl">
            <CountUp
              end={count}
              duration={duration}
              decimals={suffix === '%' ? 2 : 0}
              separator={separator}
              suffix={suffix}
            />
          </h1>
        )}
        <p className="font-[500] text-[14px] text-[#C5BFED] w-[180px] max-lg:text-[12px]">
          {p}
        </p>
      </div>
    );
  }
function Line() {
    return (
        <div className='w-[1px] h-[150px] bg-[#C5C5C5]/20 z-1 max-lg:h-[120px] max-sm:hidden'></div>
    )
}

function LineTwo() {
    return (
        <div className='w-[295px] h-[1px] bg-[#C5C5C5]/20 z-1 sm:hidden'></div>
    )
}
export default function Quantity() {
    useEffect(() => { })
    return (
        <div className="flex items-center relative justify-center mt-[120px] text-center gap-15 max-lg:gap-10 max-md:gap-5 max-sm:flex-col">
            <Quant count={10} duration={2} suffix={'K+'} p={'Satisfied Costumers All Great Over The World '} />
            <Line />
            <LineTwo />
            <Quant count={4} duration={3} suffix={'M'} p={'Healthy Dishes Sold Including Milk Shakes Smooth'} />
            <Line />
            <LineTwo />
            <Quant count={99.99} duration={2} separator=',' suffix={'%'} p={'Reliable Customer Support We Provide Great Experiences'} />
            <img src={bg} alt="" className='absolute w-full z-0 max-md:h-[150px] max-sm:hidden' />
            <img src={bgmobile} alt="" className='absolute w-full h-[110%] sm:hidden' />
        </div>
    );
}