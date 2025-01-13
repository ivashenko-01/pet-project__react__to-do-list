import { FormEvent } from 'react';

// --- Универсальная функция для обработки формы
export const defaultHandleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Получаем данные из формы
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const data: Record<string, string> = {};

    for (const entry of formData.entries()) {
        const key = entry[0];
        const value = entry[1];

        // Проверка, что значение является строкой
        if (typeof value === 'string') {
            data[key] = value;
        }
    }

    return data;
};
