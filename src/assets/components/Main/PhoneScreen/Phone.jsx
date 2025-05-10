import phoneScreen from '../../../images/MobileScreen.png'
import phoneIllustration from '../../../icons/IllustrationPhone.png'
import { Button } from '../../list/Button'
import arrow2 from '../../../icons/phoneVector.png'
import arrow from '../../../icons/arrow-right.png'


export default function Phone() {

    return (
        <div className="bg-[#F9F9F9] flex justify-around items-end mt-40 max-xl:justify-between max-lg:items-center max-lg:mt-30 max-md:justify-between max-md:mt-10 max-sm:flex-col-reverse max-sm:mt-20 pb-[100px] border-b-1 border-[#CBCBCB]">
            <div className="flex justify-center items-center max-lg:flex-[5] max-md:flex-[5] max-md:justify-start max-sm:justify-center max-sm:mt-[80px]">
                <img src={phoneScreen} alt="phone" className="w-[100%]  max-lg:w-[60%] max-md:w-[170px] max-sm:w-[70%] max-sm:ml-[20px]" />
                <img src={phoneIllustration} alt="" className='self-start max-sm:w-[30px]' />
            </div>
            <div className='w-[460px] flex pb-[30px] flex-col gap-[30px]  max-lg:flex-[5] max-md:flex-[5] max-sm:w-full max-sm:items-center max-sm:text-center'>
                <Text />
                <Ul />

                <div className='pt-[30px] max-sm:relative'><Button buttonClassName='bg-[#6C5FBC] rounded-xl w-[186px] h-[63px] text-[18px] flex justify-center items-center text-[#FFFFFF] gap-3' >
                    Download <img src={arrow} alt="" />
                </Button>
                    <img src={arrow2} alt="" className='ml-[150px]  max-md:w-[100px] max-sm:ml-[0] max-sm:rotate-[100deg] max-sm:mt-[40px] max-sm:absolute  max-sm:left-[-80px]' />
                </div>
            </div>

        </div>
    )
}
function Text() {
    return (
        <h1 className="text-[50px] font-[700] text-[#000000] max-lg:text-[40px] max-md:text-[30px]" style={{ fontFamily: "Poppins" }}>Premium <span className="text-[#6C5FBC]">Quality</span> For Your Health</h1>
    )
}
function Ul() {
    return (
        <ul className="list-inside font-[400] text-[#676767] flex flex-col gap-[20px]">
            <li className="relative pl-6 text-[18px] max-lg:text-[16px] before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1 before:h-1 before:rounded-full before:bg-[#6C5FBC]">
                Premium quality food is made with ingredients that are packed with essential vitamins, minerals.
            </li>
            <li className="relative pl-6 text-[18px] max-lg:text-[16px] before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1 before:h-1 before:rounded-full before:bg-[#6C5FBC]">
                These foods promote overall wellness by support healthy digestion and boosting immunity
            </li>
        </ul>
    )
}