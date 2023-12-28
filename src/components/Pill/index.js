import styles from './index.module.scss';

const Pill = ({ title }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.pill}>{title}</div>
        </div>
    )
}

export default Pill;