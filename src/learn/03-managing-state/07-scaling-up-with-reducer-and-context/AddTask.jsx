import { useState, useContext } from 'react';
import { useTasksDispatch } from './TaskContext.jsx';

export default function AddTask({ onAddTask }) {
    const [text, setText] = useState('');
    const dispatch = useTasksDispatch();
    return (
        <>
            <input
                placeholder="添加任务"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={() => {
                setText('');
                dispatch({
                    type: 'added',
                    id: nextId++,
                    text: text,
                });
            }}>添加</button>
        </>
    );
}

let nextId = 3;

