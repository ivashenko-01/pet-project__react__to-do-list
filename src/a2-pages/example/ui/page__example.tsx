import './App.css';

import { useCallback, useState } from 'react';

import { Form } from './form';

import { Task } from '@a6-shared/types';
import { ListTask } from './list-task';

import { getFromLocalStorage } from '@a2-pages/example/model';
import { createHandleCompleted, createHandleDelete } from '@a2-pages/example/model';

export function Page__Example() {
    // --- Хранение всех задач в одном состоянии
    const [tasks, setTasks] = useState<Task[]>(getFromLocalStorage('tasks'));

    // --- Создание коллбеков для удаления и завершения задач
    const handleDelete = useCallback(() => createHandleDelete({ tasks, setTasks }), [tasks]);
    const handleCompleted = useCallback(() => createHandleCompleted({ tasks, setTasks }), [tasks]);

    return (
        <>
            <Form setTasks={setTasks} />
            <div>
                <ListTask
                    title="Список новых задач"
                    handleCompleted={handleCompleted()}
                    handleDelete={handleDelete()}
                    list_task={tasks.filter((task) => !task.completed)}
                />
            </div>
            <div>
                <ListTask
                    title="Список выполненных задач"
                    handleCompleted={handleCompleted()}
                    handleDelete={handleDelete()}
                    list_task={tasks.filter((task) => task.completed)}
                />
            </div>
        </>
    );
}
