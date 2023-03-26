import SkeletonGame from "./SkeletonGame";
import styles from './index.module.scss';

const SkeletonGameList = () => {
    return (
        <div className={styles.skeletonGameList}>
            {Array.from(Array(30), () => 0).map((_, i) => <SkeletonGame key={i} />)}
        </div>
    )
}

export default SkeletonGameList;