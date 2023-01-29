import styles from './Goal.module.css'
import moment from 'moment'

const Goal = ({goal, ...props}) => {


    return (
        <div className={`${styles.goalContainer}`}>
            <div className={`${styles.header}`}>
                <button className={`${styles.headerBtn}`}><i className="fa-solid fa-pencil"></i></button>
                <button className={`${styles.headerBtn}`}><i className="fa-solid fa-xmark"></i></button>
            </div>
            <div>
                <h3 className={`${styles.title}`}>{goal.name}</h3>
            </div>
            <div>
                <p className={`${styles.description}`}>{goal.description}</p>
            </div>
            <div>
                <p><span className={`${styles.label}`}>Progress:</span> {goal.current_progress}</p>
            </div>
            <div>
                <p><span className={`${styles.label}`}>Start:</span> {moment(goal.start_date).format("MMM D, YYYY")}</p>
            </div>
            <div>
                <p><span className={`${styles.label}`}>End:</span> {moment(goal.end_date).format("MMM D, YYYY")}</p>
            </div>
        </div>
    )
}

export default Goal