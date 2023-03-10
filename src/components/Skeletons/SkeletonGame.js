import styles from './index.module.scss';
import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement';

const SkeletonGame = () => {
    return (
        <div className={styles.skeletonGame}>
            <div className={styles.skeletonGamedata}>
                <SkeletonElement type='title' />
                <SkeletonElement type='text' />
                <SkeletonElement type='text' />
                <SkeletonElement type='button' />
            </div>
            <SkeletonElement type='thumbnail' />
            <Shimmer />
        </div>
    )
}

export default SkeletonGame;