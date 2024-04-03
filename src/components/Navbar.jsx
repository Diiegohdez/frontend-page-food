import React from 'react';
import { useCart } from '../context/CartContext';



const Navbar = () => {
    //Context cart
    const { cartItems, showHideCart } = useCart();

    return (
        <nav className='bg-Bgnav w-90 h-16 py-4 px-4  lg:w-full lg:py-3 lg:h-14 md:w-full'>
            <ul className=' flex justify-between text-xl lg:justify-evenly md:justify-evenly'>
                <div className='lg:mr-96 md:mr-80'><img src='../log.png' alt='img' className='w-24 -mt-8 drop-shadow-[0_0_10px_rgba(152,116,255,0.7)]'/></div>
                <div className='justify-items-end  flex lg:justify-items-end mr-4 '>
                    <div className='relative flex items-center justify-center mb-9 cursor-pointer text-[#9874FF] drop-shadow-[0_0_10px_rgba(152,116,255,0.7)]'>
                        <li><i className="fa-solid fa-cart-shopping" onClick={showHideCart}></i></li>
                        {cartItems.length > 0 && (
                            <div className='absolute grid place-content-center bg-[#F2D649] z-30 rounded-full text-sm w-4 h-4 -top-2 -right-2'>
                                <span>{cartItems.length}</span>
                            </div>
                        )}
                    </div>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar