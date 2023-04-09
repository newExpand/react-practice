import React from "react";
import { Link } from "react-router-dom";

const PRODUCT = [
    { id: "p1", title: "상품1" },
    { id: "p2", title: "상품2" },
    { id: "p3", title: "상품3" },
];

const ProductsPage = () => {
    return (
        <>
            <h1>상품페이지 이올시당~</h1>
            <ul>
                {PRODUCT.map((prod) => (
                    <li key={prod.id}>
                        <Link to={`/products/${prod.id}`}>{prod.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ProductsPage;
