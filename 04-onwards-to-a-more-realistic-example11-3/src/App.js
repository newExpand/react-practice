import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
    const [tasks, setTasks] = useState([]);

    const transformTasks = (tasksObj) => {
        const loadedTasks = [];

        for (const key in tasksObj) {
            loadedTasks.push({ id: key, text: tasksObj[key].text });
        }

        setTasks(loadedTasks);
    };

    const { isLoading, error, sendRequest: fetchTasks } = useHttp();

    useEffect(() => {
        fetchTasks(
            {
                url: "https://react-http-f8c0c-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
            },
            transformTasks
        );
    }, [fetchTasks]);

    const taskAddHandler = (task) => {
        setTasks((prevTasks) => prevTasks.concat(task));
    };

    return (
        <React.Fragment>
            <NewTask onAddTask={taskAddHandler} />
            <Tasks items={tasks} loading={isLoading} error={error} onFetch={fetchTasks} />
        </React.Fragment>
    );
}

export default App;
