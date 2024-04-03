import React from 'react'
import { useCart } from '../context/CartContext';
import formatterPeso from './Formatter';

const CartItem = ({ item }) => {
    const { removeItem, increaseItem, decreaseItem } = useCart();

    return (
        <li className='border-b-2 border-solid border-white w-36 mt-4  ml-8 md:ml-8'>
            <img src={item.img} alt='img' className=' w-36 h-32 rounded-md' />
            <div className='text-center text-lg font-semibold'>
                <p className='text-white'>{item.name}</p>
                <p className='text-white'>{formatterPeso.format(item.price * item.quantity)}</p>
            </div>
            <div className=' flex justify-around text-2xl md:text-xl'>
                <div className=''>
                    <button onClick={() => increaseItem(item._id)} className='bg-[#9874FF] w-7 h-8 rounded-md text-[#F2D649] mr-1'>+</button>
                    <span className='text-[#76E609]'>{item.quantity}</span>
                    <button onClick={() => decreaseItem(item._id)} className='bg-[#9874FF] w-7 h-8 rounded-md text-[#F2D649] ml-1'>-</button>
                </div>
                <div className='text-[#F2421B] mb-2 text-[26px]'>
                    <button onClick={() => removeItem(item._id)}><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>

        </li>
    );
};

export default CartItem;