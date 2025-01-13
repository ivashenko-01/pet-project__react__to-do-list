import { Task } from '@a6-shared/types';

type PROPS = {
    title: string;
    list_task: Array<Task>;
    handleCompleted: (item: Task) => void;
    handleDelete: (item: Task) => void;
};

export function ListTask(props: PROPS) {
    const { title, list_task, handleCompleted, handleDelete } = props;
    return (
        <>
            <div>
                <h2>{title}</h2>
                {list_task && (
                    <ul>
                        {list_task.map((item) => (
                            <li key={item.id}>
                                <p>{item.title}</p>
                                <button onClick={() => handleCompleted(item)}>
                                    {item.completed ? `Не выполнено` : `Выполнено`}
                                </button>
                                <button onClick={() => handleDelete(item)}>Удалить</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}
