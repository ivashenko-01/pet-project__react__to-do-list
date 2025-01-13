import './App.css';

import { FormEvent, useEffect, useState } from 'react';

import { defaultHandleForm } from '@src/a6-shared/lib';

type Task = {
    id: string;
    title: string;
    completed: boolean;
};

function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

export function Page__Example() {
    const [list_task_new, set_list_task_new] = useState<Task[]>(JSON.parse(localStorage.getItem('task_new') || '[]'));
    const [list_task_completed, set_list_task_completed] = useState<Task[]>(
        JSON.parse(localStorage.getItem('task_completed') || '[]'),
    );

    const handleForm = async (event: FormEvent<HTMLFormElement>) => {
        const data = await defaultHandleForm(event);

        const id = generateUniqueId();

        // --- Преобразование данных в нужный формат
        const task: Task = {
            id: id,
            title: data.title,
            completed: false,
        };

        // --- Получение предыдущих данных
        const prevData = JSON.parse(localStorage.getItem('task_new') || '[]');

        // --- Отправка данных
        localStorage.setItem('task_new', JSON.stringify([...prevData, task]));

        // --- Сохранение данных
        set_list_task_new([...prevData, task]);
    };

    // --- Удаление задачи
    const handleDelete = (item: Task) => {
        if (item.completed) {
            set_list_task_completed(list_task_completed.filter((item_completed) => item_completed.id !== item.id));

            // --- Получение предыдущих данных
            const prevData = JSON.parse(localStorage.getItem('task_completed') || '[]');

            // --- Отправка данных
            localStorage.setItem(
                'task_completed',
                JSON.stringify(prevData.filter((item_completed: Task) => item_completed.id !== item.id)),
            );
        } else if (!item.completed) {
            set_list_task_new(list_task_new.filter((item_new) => item_new.id !== item.id));
            // --- Получение предыдущих данных
            const prevData = JSON.parse(localStorage.getItem('task_new') || '[]');

            // --- Отправка данных
            localStorage.setItem(
                'task_new',
                JSON.stringify(prevData.filter((item_new: Task) => item_new.id !== item.id)),
            );
        }
    };

    // --- Смена статуса задачи
    const handleCompleted = (item: Task) => {
        const updatedItem = { ...item, completed: !item.completed };

        if (updatedItem.completed) {
            // Перемещаем задачу в список завершенных
            set_list_task_completed([...list_task_completed, updatedItem]);
            set_list_task_new(list_task_new.filter((task) => task.id !== item.id));

            // Обновляем локальное хранилище
            localStorage.setItem('task_completed', JSON.stringify([...list_task_completed, updatedItem]));
            localStorage.setItem('task_new', JSON.stringify(list_task_new.filter((task) => task.id !== item.id)));
        } else {
            // Перемещаем задачу обратно в список новых
            set_list_task_new([...list_task_new, updatedItem]);
            set_list_task_completed(list_task_completed.filter((task) => task.id !== item.id));

            // Обновляем локальное хранилище
            localStorage.setItem('task_new', JSON.stringify([...list_task_new, updatedItem]));
            localStorage.setItem(
                'task_completed',
                JSON.stringify(list_task_completed.filter((task) => task.id !== item.id)),
            );
        }
    };

    return (
        <>
            <form onSubmit={handleForm}>
                <input id={'title'} name={'title'} type="text" placeholder="Введите название задачи" />
                <button>Добавить задачу</button>
            </form>
            <div>
                <h2>Список новых задач</h2>
                {list_task_new && (
                    <ul>
                        {list_task_new.map((item) => (
                            <li key={item.id}>
                                <p>{item.title}</p>
                                <button onClick={() => handleCompleted(item)}>Выполнено</button>
                                <button onClick={() => handleDelete(item)}>Удалить</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div>
                <h2>Список выполненных задач</h2>
                {list_task_completed && (
                    <ul>
                        {list_task_completed.map((item) => (
                            <li key={item.id}>
                                <p>{item.title}</p>
                                <button onClick={() => handleCompleted(item)}>Не выполнено</button>
                                <button onClick={() => handleDelete(item)}>Удалить</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}
