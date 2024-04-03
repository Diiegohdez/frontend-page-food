import { useProduct } from "../context/ProductContext";
import formatterPeso from "../components/Formatter";
import { ModalProduct } from "../components/ModalProduct";
import { useState } from "react";


export const HamburgueProduct = () => {
    const [openModal, setOpenModal] = useState(false);
    const [itemProduc, setItemProduc] = useState();

    const { product } = useProduct();
    const newProduct = product.filter(item => item.type == "Hamburgue");

    return (
        <div className="grid justify-items-center grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {openModal && <ModalProduct item={itemProduc}  setOpenModal={setOpenModal} />}
            {newProduct.map((item) => (
                <div key={item._id} className=" bg-Bgnav text-white text-center text-lg w-64 h-64 mt-6 rounded-t-xl rounded-b-xl relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <img src={item.img} alt="img" className=" w-64 h-48 rounded-t-xl transition duration-300 ease-in-out hover:scale-110" />
                    <div  className="absolute top-1 w-full h-full -mt-1 bg-BgModal transition duration-500 ease-in-out  opacity-0  text-center rounded-xl hover:opacity-70 hover:visible">
                        <button className="w-36 h-8 bg-gray-800 rounded-xl transition duration-500 ease-in-out mt-16 " onClick={() => { setOpenModal(true); setItemProduc(item) }}>Mostrar mas..</button>
                    </div>
                    <p className="mt-1 font-bold drop-shadow-[0_0_10px_rgba(242,214,73,0.7)]">{item.name}</p>
                    <p className="text-[#F2D649] font-bold drop-shadow-[0_0_10px_rgba(242,214,73,0.7)]">{formatterPeso.format(item.price)}</p>
                </div>
            ))}
        </div>
    );
}


export const PizzaProduct = () => {
    const [openModal, setOpenModal] = useState(false);
    const [itemProduc, setItemProduc] = useState();

    const { product } = useProduct();
    const newProduct = product.filter(item => item.type == "pizza");

    return (
        <div className="grid justify-items-center grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {openModal && <ModalProduct item={itemProduc} setOpenModal={setOpenModal} />}
            {newProduct.map((item) => (
                <div key={item._id} className=" bg-Bgnav text-white text-center text-lg w-64 h-64 mt-6 rounded-t-xl rounded-b-xl relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <img src={item.img} alt="img" className=" w-64 h-48 rounded-t-xl transition duration-300 ease-in-out hover:scale-110" />
                    <div className="absolute top-1 w-full h-full -mt-1 bg-BgModal transition duration-500 ease-in-out  opacity-0  text-center rounded-xl hover:opacity-70 hover:visible">
                        <button className="w-36 h-8 bg-gray-800 rounded-xl transition duration-500 ease-in-out mt-16 " onClick={() => { setOpenModal(true); setItemProduc(item) }}>Mostrar mas..</button>
                    </div>
                    <p className="mt-1 font-bold drop-shadow-[0_0_10px_rgba(242,214,73,0.7)]">{item.name}</p>
                    <p className="text-[#F2D649] font-bold drop-shadow-[0_0_10px_rgba(242,214,73,0.7)]">{formatterPeso.format(item.price)}</p>
                </div>
            ))}
        </div>
    );
}

export const HotdogProduct = () => {
    const [openModal, setOpenModal] = useState(false);
    const [itemProduc, setItemProduc] = useState();

    const { product } = useProduct();
    const newProduct = product.filter(item => item.type == "hotdog");

    return (
        <div className="grid justify-items-center grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {openModal && <ModalProduct item={itemProduc} setOpenModal={setOpenModal} />}
            {newProduct.map((item) => (
                <div key={item._id} className=" bg-Bgnav text-white text-center text-lg w-64 h-60 mt-6 rounded-t-xl rounded-b-xl relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <img src={item.img} alt="img" className="rounded-t-xl transition duration-300 ease-in-out hover:scale-110" />
                    <div className="absolute top-1 w-full h-full -mt-1 bg-BgModal transition duration-500 ease-in-out  opacity-0  text-center rounded-xl hover:opacity-70 hover:visible">
                        <button className="w-36 h-8 bg-gray-800 rounded-xl transition duration-500 ease-in-out mt-16 " onClick={() => { setOpenModal(true); setItemProduc(item) }}>Mostrar mas..</button>
                    </div>
                    <p className="mt-1 font-bold drop-shadow-[0_0_10px_rgba(242,214,73,0.7)]">{item.name}</p>
                    <p className="text-[#F2D649] font-bold drop-shadow-[0_0_10px_rgba(242,214,73,0.7)]">{formatterPeso.format(item.price)}</p>
                </div>
            ))}
        </div>
    );
}