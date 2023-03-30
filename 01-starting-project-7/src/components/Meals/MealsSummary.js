import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>최고의 음식, 지금 주문하세요!</h2>
            <p>선택 가능한 수많은 음식 중에서 가장 좋아하는 음식을 선택하고 집에서 맛있는 점심이나 저녁을 즐기세요.</p>
            <p>리액트 맛집의 모든 식사는 고급 재료로 요리되며, 경험이 풍부한 요리사들에 의해 최고의 요리를 보장합니다.</p>
        </section>
    );
};

export default MealsSummary;
