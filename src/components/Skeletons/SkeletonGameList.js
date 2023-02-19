import SkeletonGame from "./SkeletonGame";
import styles from './index.module.scss';

const SkeletonGameList = () => {
    return (
        <div className={styles.skeletonGameList}>
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(n => <SkeletonGame key={n} />)}
        </div>
    )
}

export default SkeletonGameList;