import { useState } from 'react';
import Toggle from '../Toggle';
import styles from './index.module.scss';

const Filter = ({ name, dice, toggleState }) => {
    const [isToggled, setIsToggled] = useState(toggleState);

    return (
        <div className={styles.filter}>
            <span className={styles.filterName}>{name}</span>
            <Toggle diceFace={dice} isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
        </div>
    )
}

export default Filter;