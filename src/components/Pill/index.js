import styles from './index.module.scss';
import cx from 'classnames';

const Pill = ({ title }) => {
    return (
        <div className={cx(styles.wrapper, styles[`wrapper--${title}`])}>
            <div className={styles.pill}>{title}</div>
        </div>
    )
}

export default Pill;