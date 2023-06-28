import styles from './TaskCard.module.scss';

const TaskCard = ({ taskObj, onBtnClick }) => {
    const { task, priority } = taskObj;
    
    console.log(priority);

    let cardClasses = `${styles.card}`;
    switch (priority) {
        case 'low':
            cardClasses += ' ' + styles.card__low;
            break;
        // TODO: this isn't working?
        case 'medium':
            cardClasses += ' ' + styles.card__medium;
            break;
        case 'high':
            cardClasses += ' ' + styles.card__high;
            break;
        case 'very high':
            cardClasses += ' ' + styles.card__very_high;
            break;
        default:
            console.log('invalid priority');    
    };

    return (
        <div className={cardClasses}>
            <h2>{task}</h2>
            <p>{priority}</p>
            <button onClick={onBtnClick}>Remove task</button>
        </div>
    );
};

export default TaskCard;