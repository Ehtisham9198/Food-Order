import React, { useReducer } from "react";
import CartContext from "./Cart-Contex"; // Adjust the import as needed

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.title === action.item.title
        );
        const existingItem = state.items[existingCartItemIndex];
        let updatedItems;
        let updatedItem;

        if (existingItem) {
            updatedItem = {
                ...existingItem,
                amount: existingItem.amount + 1,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItem = { ...action.item, amount: 1 };
            updatedItems = state.items.concat(updatedItem);
        }

        const updatedTotalAmount = state.totalAmount + action.item.price;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === "REMOVE") {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.title === action.item.title
        );
        const existingItem = state.items[existingCartItemIndex];

        if (!existingItem) {
            return state;
        }

        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;

        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(
                (item) => item.title !== action.item.title
            );
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    return state; // This line is necessary for the default case
};

const ContextProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: "ADD", item: item });
    };

    const removeItemFromCartHandler = (item) => {
        dispatchCartAction({ type: "REMOVE", item: item });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default ContextProvider;
