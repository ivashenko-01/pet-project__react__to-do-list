import { Task } from '@a6-shared/types';

// --- Получение списка задач
export const getFromLocalStorage = (key: string) => JSON.parse(localStorage.getItem(key) || '[]');

// --- Сохранение нового списка задач
export const saveToLocalStorage = (key: string, value: Task[]) => localStorage.setItem(key, JSON.stringify(value));
