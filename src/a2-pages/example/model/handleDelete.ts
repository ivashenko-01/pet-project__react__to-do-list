import { Task } from '@a6-shared/types';

import { saveToLocalStorage } from '@a2-pages/example/model';

// Тип для хранения состояния задач
type TasksState = Task[];

// Функция для создания коллбека удаления задачи
type createHandleDelete_PROPS = {
    tasks: TasksState;
    setTasks: React.Dispatch<React.SetStateAction<TasksState>>;
};

export const createHandleDelete = (props: createHandleDelete_PROPS) => {
    const { tasks, setTasks } = props;

    return (item: Task) => {
        const newTasks = tasks.filter((task) => task.id !== item.id);
        setTasks(newTasks);
        saveToLocalStorage('tasks', newTasks);
    };
};
