import React from "react";
import { Link, useNavigate } from "react-router-dom";
/* a태그 대신 Link를 사용하는 이유
    a태그를 사용하면 새로운 페이지를 로드하게 됨
    Link를 사용하면 SPA를 구현하면서 새로운 페이지를 로드하지 않고도 
    컴포넌트 간 전환을 수행하기 위해서이며, 
    페이지를 다시 로드하지 않고 더 나은 성능을 제공하기 때문
 */
const Home = () => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate("/products");
    };

    return (
        <>
            <div>나만의 홈페이지</div>
            <p>
                가보자잇 <Link to="products">상품을 보러!</Link>
            </p>
            <p>
                <button onClick={navigateHandler}>네비게이션</button>
            </p>
        </>
    );
};

export default Home;
