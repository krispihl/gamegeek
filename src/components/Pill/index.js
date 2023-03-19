import cx from 'classnames';
import styles from './index.module.scss';

const Pill = ({ title }) => {
    return (
        <div className={cx(styles.wrapper, styles[`wrapper--${title}`])}>
            <div className={styles.pill}>{title}</div>
        </div>
    )
}

export default Pill;