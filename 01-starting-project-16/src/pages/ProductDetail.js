import React from "react";
import { useParams, Link } from "react-router-dom";

/* 
    상대 경로로 설정할 경우에 확인 할 부분
    relative의 default 값은 "route"이다. Link to=".." 상위 요소로 간다는 명령어를 썼을 경우
    부모 요소의 루트로 바로 가는 경우가 발생하지만 relative를 path로 줬을 경우 현재 활성화된 경로를 확인 후
    한 세그먼트만 제거 해준다.
*/

const ProductDetail = () => {
    const params = useParams();

    return (
        <>
            <h1>상품 상세!</h1>
            <p>
                <Link to=".." relative="path">
                    뒤로가기
                </Link>
            </p>
        </>
    );
};

export default ProductDetail;
