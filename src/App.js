import Expenses from "./components/Expenses/Expenses";

function App() {
    const expenses = [
        {
            id: "e1",
            title: "화장실 휴지",
            amount: 94,
            date: new Date(2020, 7, 14),
        },
        { id: "e2", title: "72인치 티비", amount: 799, date: new Date(2021, 2, 12) },
        {
            id: "e3",
            title: "차 보험",
            amount: 294,
            date: new Date(2021, 2, 28),
        },
        {
            id: "e4",
            title: "목재 책상",
            amount: 450,
            date: new Date(2021, 5, 3),
        },
    ];

    return (
        <div>
            <h2>시작해보자구~!</h2>
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
