import React, { Fragment } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
    const dispatch = useDispatch();
    const showCart = useSelector((state) => state.ui.cartIsVisible);
    const cart = useSelector((state) => state.cart);
    const notification = useSelector((state) => state.ui.notification);

    useEffect(() => {
        const sendCartData = async () => {
            dispatch(
                uiActions.showNotification({
                    status: "pending",
                    title: "전송중...",
                    message: "데이터를 전송하고 있습니다.",
                })
            );
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

            dispatch(
                uiActions.showNotification({
                    status: "success",
                    title: "성공!",
                    message: "데이터 전송에 성공했습니다.",
                })
            );
        };

        if (isInitial) {
            isInitial = false;
            return;
        }

        sendCartData().catch((error) => {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "실패!",
                    message: error.message,
                })
            );
        });
    }, [cart, dispatch]);

    return (
        <Fragment>
            {notification && <Notification {...notification} />}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </Fragment>
    );
}

export default App;
