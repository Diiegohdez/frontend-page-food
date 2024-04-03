import React from 'react';
import formatterPeso from './Formatter';
import { useCart } from "../context/CartContext";



export const ModalProduct = ({ setOpenModal, item }) => {

    const bg_dinamico = {
        "Hamburgue" : "/fondoh.jpg",
        "pizza" : "/fondop.jpg",
        "hotdog" : "/fondohg.jpg"
    };
    

    const backgroundD = bg_dinamico[item.type];
    
    
    const { addCart } = useCart();

    if (addCart == true) {
        setOpenModal(false);
    };

    return (
        <div className='fixed flex justify-center items-center z-50 bg-BgModal w-full h-full -mt-[18.0rem] md:h-full md:-mt-[368px] lg:h-full lg:-mt-[442px]' onClick={() => { setOpenModal(false); }}>
            <div className=' w-80 h-[30.4rem] rounded-xl lg:w-96' style={{backgroundImage: `url(${backgroundD})`}}> 
                <div>
                    <img src={item.img} alt='img' className='object-cover w-full h-60 rounded-t-xl' />
                </div>
                <div>
                    <h1 className='text-white text-center text-2xl font-bold drop-shadow-[0_0_10px_rgba(242,214,73,0.7)]'>{item.name}</h1>
                </div>
                <div>
                    <h2 className='text-white  drop-shadow-[0_0_10px_rgba(152,116,255,0.9)] text-lg text-center mt-4 w-80 h-24 lg:w-96'>{item.description}</h2>
                </div>
                <div className='mt-2 flex justify-around'>
                    <button className=' bg-[#F2D649] px-11 py-2 rounded-xl font-bold hover:drop-shadow-[0_0_10px_rgba(242,214,73,0.7)]' onClick={() => addCart(item)}>Agregar <i className="fa-solid fa-cart-shopping"></i></button>
                    <button className='bg-[#F2421B]  px-7 py-5 text-lg rounded-xl hover:drop-shadow-[0_0_10px_rgba(242,66,27,0.7)]' onClick={() => { setOpenModal(false); }}><i className="fa-solid fa-circle-xmark text-2xl"></i></button>
                </div>
            </div>
        </div>
    )
}

