import Ourtop from '../../../assets/components/list/OurTop'
import star from '../../icons/stats.png'
import ChickenBurger from '../../images/CK.png'
import BurgerKing from '../../images/BK.png'
import chickenhell from '../../images/chickenHell.png'
import sweDich from '../../images/sweDish.png'
import { Children } from 'react'

const arrOfDishes = [
    {
        name: 'Chicken Hell',
        time: '24min',
        stats: '4.8',
        price: '$12.99',
        img: chickenhell,
        category: 'Healthy',
        wish: false,
    },
    {
        name: 'Swe Dish',
        time: '34min',
        stats: '4.9',
        price: '$19.99',
        img: sweDich,
        category: 'Trending',
        wish: false,
        basket: false
    },
    {
        name: 'Swe Dish Chi',
        time: '34min',
        stats: '4.9',
        price: '$19.99',
        img: sweDich,
        category: 'Supreme',
        wish: false,
        basket: false
    },
]

export default function Restorants() {
    return (
        <div>
            <Ourtop className='border-b-[1px] border-[#CBCBCB] pb-[170px]' h1="Our Top" span="Restaurants" h1Class="text-[45px] font-[600] text-[#000000] max-lg:text-[40px] max-md:text-[30px] mb-[50px]" spanClass="text-[#6C5FBC]">
                <Restaraunts />
            </Ourtop>
            <Ourtop className='border-b-[1px] border-[#CBCBCB] pb-[170px]' h1="Our Top" span="Dishes" h1Class="text-[45px] font-[600] text-[#000000] max-lg:text-[40px] max-md:text-[30px] mb-[50px]" spanClass="text-[#6C5FBC]">
                <Dishes>
                    <CardDishes image={chickenhell} name={arrOfDishes[0]['name']} time={arrOfDishes[0]['time']} stats={arrOfDishes[0]['stats']} price={arrOfDishes[0]['price']} category={arrOfDishes[0]['category']} categoryClasses={`${categoriesObj[arrOfDishes[0]['category']].color} ${categoriesObj[arrOfDishes[0]['category']].bg}  rounded text-center px-[10px]  max-w-[88px]`} />
                    <CardDishes image={chickenhell} name={arrOfDishes[0]['name']} time={arrOfDishes[0]['time']} stats={arrOfDishes[0]['stats']} price={arrOfDishes[0]['price']} category={arrOfDishes[0]['category']} categoryClasses={`${categoriesObj[arrOfDishes[0]['category']].color} ${categoriesObj[arrOfDishes[0]['category']].bg}  rounded text-center px-[10px] `} />
                </Dishes>
            </Ourtop>
        </div>


    )
}

const arrOfRestaurants = [
    {
        name: 'The Chicken King',
        time: '24min',
        stats: '4.8',
        category: 'Healthy',
        img: ChickenBurger,
        wish: false,
    },
    {
        name: 'The Burger King',
        time: '24min',
        stats: '4.9',
        category: 'Trending',
        img: BurgerKing,
        wish: false,
    },
    {
        name: 'The Chicken King',
        time: '24min',
        stats: '4.8',
        category: 'Healthy',
        img: ChickenBurger,
        wish: false,
    },
]
function Restaraunts() {
    return (
        <div className='flex w-full justify-between items-center  gap-[30px] mt-[40px] max-lg:flex-col'>
            {arrOfRestaurants.map((Element) => {
                return (
                    <div key={Element.name} className='bg-[#fff] shadow-[0px_10px_30px_rgba(0,0,0,0.1)] rounded-[20px] flex flex-col justify-between items-center overflow-hidden'>
                        <CardReastaurants image={Element.img} name={Element.name} time={Element.time} stats={Element.stats} category={Element.category} categoryClasses={`${categoriesObj[Element.category].color} ${categoriesObj[Element.category].bg}  rounded text-center px-[10px]`} />
                    </div>
                )
            })}
        </div>
    )
}



const categoriesObj = {
    'Healthy': {
        color: 'text-[#DAA31A]',
        bg: 'bg-[#F7EDD0]'
    },
    'Trending': {
        color: 'text-[#FB471D]',
        bg: 'bg-[#F7C5BA]'
    },
    'Supreme': {
        color: 'text-[#309D5B]',
        bg: 'bg-[#33AC64]'
    },
}

function CardReastaurants({ image, name, time, stats, category, categoryClasses = '' }) {
    return (
        <div className='h-[300px] max-xl:h-[250px] max-lg:h-[300px] max-sm:h-[280px]' style={{ fontFamily: 'Poppins' }}>
            <img src={image} className='w-full min-h-[180px] max-xl:min-h-[150px] max-lg:min-h-[200px] max-sm:min-h-[150px]' alt="" />
            <div className='flex flex-col items-start p-[20px] max-xl:p-[10px]'>
                <h5 className={categoryClasses}>{category}</h5>
                <h1 className='font-[600] text-[#323142] text-[24px]'>{name}</h1>
                <div>
                    <div className='flex'>
                        <h6 className='text-[#8E97A6]'>{time}</h6>
                        <h6 className='text-[#8E97A6] flex'><img src={star} alt="" className='' />{stats}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Dishes({ children }) {
    return (
        <div className="flex flex-wrap justify-center gap-[60px] mt-[40px] w-full">
            {arrOfDishes.map((Element) => (
                <div key={Element.name} className="w-[186px] max-h-[318px]">
                    <CardDishes
                        image={Element.img}
                        name={Element.name}
                        time={Element.time}
                        stats={Element.stats}
                        price={Element.price}
                        category={Element.category}
                        categoryClasses={`${categoriesObj[Element.category].color} ${categoriesObj[Element.category].bg}  rounded text-center px-[10px] max-w-[88px]`}
                    />
                </div>
            ))}
            {children}
        </div>

    )
}
function CardDishes({ image, name, time, stats, price, category, categoryClasses = '' }) {
    const priceJoin = price.split('.')

    return (
        <div className='bg-[#fff] shadow-[0px_10px_30px_rgba(0,0,0,0.1)] rounded-[20px] flex flex-col justify-between items-start overflow-hidden' style={{ fontFamily: 'Poppins' }}>
            <img src={image} alt="" className='h-[186px] w-[186px]' />
            <div className="px-[10px] py-[20px] w-full">
                <div>
                    <h5 className={categoryClasses}>{category}</h5>
                    <h1 className='font-[600] text-[#323142] text-[24px]'>{name}</h1>
                    <div className='flex'>
                        <h6 className='text-[#8E97A6]'>{time}</h6>
                        <h6 className='text-[#8E97A6] flex'><img src={star} alt="" className='' />{stats}</h6>
                    </div>
                </div>
                <div className="flex justify-between items-center w-full">
                    <h1 className='text-[black]'>{priceJoin.slice(0, 1)}
                        <span className='text-[#8E97A6]'>.{priceJoin.slice(1)}</span></h1>
                    <button className='bg-[#323142] w-[40px] h-[40px] rounded-xl'>+</button>
                </div>
            </div>
        </div>
    )
}