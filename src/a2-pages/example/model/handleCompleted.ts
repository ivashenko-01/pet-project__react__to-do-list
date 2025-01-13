import { Task } from '@a6-shared/types';

import { saveToLocalStorage } from '@a2-pages/example/model';

// Тип для хранения состояния задач
type TasksState = Task[];

// Функция для создания коллбека изменения статуса задачи
type createHandleCompleted_PROPS = {
    tasks: TasksState;
    setTasks: React.Dispatch<React.SetStateAction<TasksState>>;
};

export const createHandleCompleted = (props: createHandleCompleted_PROPS) => {
    const { tasks, setTasks } = props;
    return (item: Task) => {
        const newTasks = tasks.map((task) => ({
            ...task,
            completed: task.id === item.id ? !task.completed : task.completed,
        }));
        setTasks(newTasks);
        saveToLocalStorage('tasks', newTasks);
    };
};
