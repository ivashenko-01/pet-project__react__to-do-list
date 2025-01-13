import { FormEvent } from 'react';

import { defaultHandleForm } from '@a6-shared/lib';
import { generateUniqueId } from '@a6-shared/lib';

import { Task } from '@a6-shared/types';

type PROPS = {
    setTasks: (list: Task[]) => void;
};

export const Form = (props: PROPS) => {
    const { setTasks } = props;
    // --- Обработка формы
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
        const prevData = JSON.parse(localStorage.getItem('tasks') || '[]');

        // --- Отправка данных
        localStorage.setItem('tasks', JSON.stringify([...prevData, task]));

        // --- Сохранение данных
        setTasks([...prevData, task]);
    };
    return (
        <>
            <form onSubmit={handleForm}>
                <input id={'title'} name={'title'} type="text" placeholder="Введите название задачи" />
                <button>Добавить задачу</button>
            </form>
        </>
    );
};
