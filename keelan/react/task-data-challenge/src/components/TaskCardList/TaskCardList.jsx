import styles from './TaskCardList.module.scss';
import TaskCard from '../TaskCard/TaskCard';
import { useState } from 'react';

const taskData = [
    { task: 'Clean the bathroom', priority: 'low' },
    { task: 'Walk the dog', priority: 'high' },
    { task: 'Do codewars', priority: 'very high' },
    { task: 'Cook dinner', priority: 'medium' },
];

const TaskCardList = () => {
    const [taskArr, setTaskData] = useState(taskData);

    const [newTask, setNewTask] = useState('');
    const [newPriority, setNewPriority] = useState('');
    const submitForm = e => {
        e.preventDefault();

        const newTaskArr = [...taskArr, {task: newTask, priority: newPriority}];
        setTaskData(newTaskArr);
    };

    const sortHelper = (taskObjA, taskObjB) => {
        const priorityToNum = {
            'low': 1,
            'medium': 2,
            'high': 3,
            'very high': 4
        };

        return -1 * (priorityToNum[taskObjA.priority] - priorityToNum[taskObjB.priority]);
    };

    const onBtnClick = e => {
        const taskContentDesc = e.target.previousElementSibling.previousElementSibling.innerHTML;
        setTaskData(taskArr.filter(taskObj => taskObj.task !== taskContentDesc));
    };

    return (
        <section>
            <form onSubmit={submitForm}>
                <input 
                    type='text' 
                    placeholder='Enter task' 
                    onChange={e => setNewTask(e.target.value)}
                    required
                />
                {/* TODO: either require the user to choose or make 'low' the default value */}
                <select
                    onChange={e => setNewPriority(e.target.value)}
                >
                    <option value='low'>Low</option>
                    <option value='medium'>Medium</option>
                    <option value='high'>High</option>
                    <option value='veryHigh'>Very High</option>
                </select>
                <button>Add Task</button>
            </form>

            <div>
                {taskArr
                    .sort((a, b) => sortHelper(a, b))
                    .map((taskObj, index) => 
                        <TaskCard 
                            key={index} 
                            taskObj={taskObj} 
                            onBtnClick={onBtnClick} 
                        />
                )}
            </div>
        </section>
    );
};

export default TaskCardList;