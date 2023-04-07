import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                "https://react-http-f8c0c-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
            );

            if (!response.ok) {
                throw new Error("데이터를 가져오지 못했습니다.");
            }

            const data = await response.json();

            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(
                cartActions.replaceCart({
                    items: cartData.items || [],
                    totalQuantity: cartData.totalQuantity,
                })
            );
        } catch (error) {
            uiActions.showNotification({
                status: "error",
                title: "실패!",
                message: "데이터 전송에 실패했습니다.",
            });
        }
    };
};

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
