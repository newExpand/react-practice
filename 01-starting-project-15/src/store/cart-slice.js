import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const initialState = {
    items: [],
    totalQuantity: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
    },
});

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: "pending",
                title: "전송중...",
                message: "데이터를 전송하고 있습니다.",
            })
        );

        const sendRequest = async () => {
            const response = await fetch(
                "https://react-http-f8c0c-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(cart),
                }
            );

            if (!response.ok) {
                throw new Error("데이터 전송에 실패했습니다.");
            }
        };

        try {
            await sendRequest();

            dispatch(
                uiActions.showNotification({
                    status: "success",
                    title: "성공!",
                    message: "데이터 전송에 성공했습니다.",
                })
            );
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "실패!",
                    message: "데이터 전송에 실패했습니다.",
                })
            );
        }
    };
};

export const cartActions = cartSlice.actions;

export default cartSlice;
