import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';
import { TasksProvider } from './TaskContext.jsx';

export default function TaskApp() {
    return (
        <TasksProvider>
            <h1>在京都休息一天</h1>
            <AddTask />
            <TaskList />
        </TasksProvider>
    );
}

