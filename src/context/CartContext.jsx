import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

//hook para importar el contex
export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new error("el useCart deberia de estar en el provider")
    }
    return context;
};

const SHOW_HIDE_CART = "SHOW_HIDE_CART";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_ITEM = "REMOVE_ITEM";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

export const cartReducer = (state, action) => {

    switch (action.type) {
        case SHOW_HIDE_CART: {
            return {
                ...state,
                showCart: !state.showCart,
            };
        }
        case ADD_TO_CART: {
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        }
        case INCREASE: {
            return {
                ...state,
                cartItems: state.cartItems.map(item => item._id === action.payload ? {...item, quantity: item.quantity + 1 }
                    : item)
            };
        }

        case DECREASE: {
            return {
                ...state,
                cartItems: state.cartItems.map(item => item._id === action.payload && item.quantity > 1
                    ? {...item, quantity: item.quantity - 1 } : item)
            };
        }

        case REMOVE_ITEM: {
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (item) => item._id !== action.payload
                ),
            };
        }
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {

    const initalState = {
        showCart: false,
        cartItems: [],
    };

    const [state, dispatch] = useReducer(cartReducer, initalState);

    const addCart = (item) => {
        dispatch({ type: ADD_TO_CART, payload: item });
    };

    const showHideCart = () => {
        dispatch({ type: SHOW_HIDE_CART });
    };

    const increaseItem = (item) => {
        dispatch({ type: INCREASE, payload: item  });
    };

    const decreaseItem = (item) => {
        dispatch({ type: DECREASE, payload: item });
    };

    const removeItem = (_id) => {
        dispatch({ type: REMOVE_ITEM, payload: _id });
    };

    return (
        <CartContext.Provider value={{
            showCart: state.showCart,
            cartItems: state.cartItems,
            addCart,
            showHideCart,
            increaseItem,
            decreaseItem,
            removeItem
        }}>{children}
        </CartContext.Provider>
    );
};
