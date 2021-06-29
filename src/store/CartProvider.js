import {useReducer} from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {

        // NOTE Count total amount of item inside state
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        // NOTE Function for matchmaking action's item
        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.item.id
        );

        // NOTE Put it on value = state.items
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        // NOTE If there is and existing item, add just the amount on them
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;

        // NOTE If there are none of them, just let it be
        } else {
            updatedItems = state.items.concat(action.item); 
        }

        return {
            items: updatedItems, 
            totalAmount: updatedTotalAmount
        }
    }

    if (action.type === 'REMOVE') {

        // NOTE Function for matchmaking action's item
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
          
        // NOTE Put it on value = state.items
        const existingCartItem = state.items[existingCartItemIndex];

        // NOTE Count total amount of item inside state
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;

        let updatedItems;

        // NOTE If there only 1 left in the cart, remove the card
        if (existingCartItem.amount === 1) {
            // NOTE Keep the items that not matched with action id
            updatedItems = state.items.filter((item) => item.id !== action.id)
            
        // NOTE If there are more than 1 item, decrease the amount
        } else {
            const updatedItem = {
                ...existingCartItem, 
                amount: existingCartItem.amount - 1
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems, 
            totalAmount: updatedTotalAmount
        }
    }

    return defaultCartState
}

const CartProvider = (props) => {
    // NOTE useReducer for managing context
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemHandler = item => {
        dispatchCartAction({type: 'ADD', item: item})
    };

    const removeItemHandler = id => {
        dispatchCartAction({type: 'REMOVE', id: id})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;