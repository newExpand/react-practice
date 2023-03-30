import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: "스시",
        description: "최고의 생선과 야채",
        price: 22000,
    },
    {
        id: "m2",
        name: "슈니첼",
        description: "독일의 특산품!",
        price: 16000,
    },
    {
        id: "m3",
        name: "바베큐 버거",
        description: "미국식, 날것, 육질",
        price: 12000,
    },
    {
        id: "m4",
        name: "그린 볼",
        description: "건강합니다...녹색...,",
        price: 18000,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => <MealItem key={meal.id} name={meal.name} price={meal.price} description={meal.description} />);

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
