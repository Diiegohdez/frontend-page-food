import React from 'react'
import CartItem from './CartItems'
import { useCart } from "../context/CartContext";
import formatterPeso from './Formatter';


const Cart = () => {

    const {showCart, cartItems, showHideCart} = useCart();
    return (
        <>
            {showCart && (
                <div className='absolute z-50 mx-[170px] bg-Bgnav w-56 rounded-bl-lg  md:w-52 md:mx-[650px] md:rounded-b-lg lg:mx-[60rem]'>
                    <div className='text-[#F2421B] text-xl mt-1 ml-1 invisible md:visible'>
                        <button onClick={showHideCart}><i className="fa-solid fa-rectangle-xmark"></i></button>
                    </div>
                    <div className='h-max max-h-72 overflow-y-auto md:[&::-webkit-scrollbar]:hidden'>
                        {cartItems.length === 0 ? (
                            <h3 className='flex justify-center text-white'>Tu Carrito está vacío</h3>
                        ):(
                            <ul>
                                {cartItems.map((item)=>(
                                    <CartItem key={item._id} item={item}/>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className='flex justify-around mt-2 text-xl font-semibold h-10 '>
                        <h3 className='text-[#F2D649]'>Total</h3>
                        <div className='text-white'>
                            {formatterPeso.format(cartItems.reduce((amount, item)=> amount + item.price * item.quantity, 0))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;