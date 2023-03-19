import SkeletonGame from "./SkeletonGame";
import styles from './index.module.scss';

const SkeletonGameList = () => {
    return (
        <div className={styles.skeletonGameList}>
            {Array.from(Array(30), () => 0).map(n => <SkeletonGame key={n} />)}
        </div>
    )
}

export default SkeletonGameList;