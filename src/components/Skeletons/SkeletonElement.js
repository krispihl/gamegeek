import cx from 'classnames';
import styles from './index.module.scss'

const SkeletonElement = ({ type }) => {
    return (
        <div className={cx(styles.skeleton, styles[type])}></div>
    )
}

export default SkeletonElement;