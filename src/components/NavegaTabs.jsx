import React, { useState } from 'react';
import { HamburgueProduct, PizzaProduct, HotdogProduct } from '../pages/Product';


const NavegaTabs = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleClick = (index) => {
        setActiveTab(index);
    }

    return (
        <div>
            <div>
                <ul className=' flex justify-around bg-Bgnav py-8 text-white text-xl cursor-pointer md:justify-evenly '>

                    <li className={activeTab === 0 ? 'active' : ''} onClick={() => handleClick(0)}>
                        <div className='absolute  bg-Bg-fondop bg-[length:1000px_500px] px-8 h-11 -mt-3 rounded-t-lg -ml-14 md:px-14 md:-ml-24 lg:px-16'>
                            <div className='font-bold drop-shadow-[0_0_10px_rgba(242,214,73,0.7)] relative invisible md:mr-8 md:mt-2 md:visible lg:visible '>Pizza</div>
                            <img src='../Pizza.png' alt='img' className=' absolute -mt-6 ml-1 size-10 drop-shadow-[0_0_10px_rgba(242,214,73,0.7)] md:-mt-8 md:ml-12 '/>
                        </div>
                    </li>

                    <li className={activeTab === 1 ? 'active' : ''} onClick={() => handleClick(1)}>
                        <div className='absolute bg-Bg-fondoh bg-[length:1000px_500px] py-2 -mt-3 rounded-t-lg -ml-16  md:px-6 md:-ml-24 lg:mr-20'>
                            <div className='font-bold drop-shadow-[0_0_10px_rgba(242,214,73,0.7)] invisible md:visible md:mr-7 lg:visible '>Hamburguesa</div>
                            <img src='../Hamburguer.png' alt='img' className='absolute -mt-8 ml-10 size-9 text-3xl drop-shadow-[0_0_10px_rgba(242,214,73,0.7)] md:ml-32'/>
                        </div>
                    </li>

                    <li className={activeTab === 2 ? 'active' : ''} onClick={() => handleClick(2)}>
                        <div className='absolute bg-Bg-fondohg bg-[length:1000px_500px] px-4 py-2 -mt-3 rounded-t-lg -ml-12 md:px-10 md:-ml-20 lg:ml-21'>
                            <div className='font-bold drop-shadow-[0_0_10px_rgba(242,214,73,0.7)] invisible md:visible md:mr-11 lg:visible'>Hot dog</div>
                            <img src='../Hotdog.png' alt='img' className='absolute -mt-8 ml-4 size-9 text-3xl drop-shadow-[0_0_10px_rgba(242,214,73,0.7)] md:ml-20' />
                        </div>
                    </li>


                </ul>
            </div>
            <div>
                {activeTab === 0 && <div className='bg-Bg-fondop h-[111.2rem] md:h-[55.6rem] lg:h-[37.3rem]'> <PizzaProduct/> </div>}
                {activeTab === 1 && <div className='bg-Bg-fondoh h-[149.2rem] md:h-[73.6rem] lg:h-[55.3rem]'> <HamburgueProduct/> </div>}
                {activeTab === 2 && <div className='bg-Bg-fondohg h-[105.5rem] md:h-[52.6rem] lg:h-[35.3rem]'> <HotdogProduct/> </div>}
            </div>
        </div>
    )
};

export default NavegaTabs