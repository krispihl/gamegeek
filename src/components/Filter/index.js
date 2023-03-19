import { useState } from 'react';
import Toggle from '../Toggle';
import { useGames } from '../../contexts/games';
import styles from './index.module.scss';

const FILTER_MAP = {
    juniorGame: {
        property: ['juniorGame'],
        value: [true],
    },
    enGames: {
        property: ['locale'],
        value: ['EN'],
    },
    expansions: {
        property: ['type'],
        value: ['boardgameexpansion'],
    },
    onePlayer: {
        property: ['minplayers'],
        value: ['1'],
    },
    only2Players: {
        property: ['minplayers', 'maxplayers'],
        value: ['2', '2'],
    },
    over4Players: {
        property: ['maxplayers'],
        value: ['4'],
    },
}

const Filter = ({ name, dice, filterName }) => {
    const [isToggled, setIsToggled] = useState(false);
    const { setFilter, removeFilter } = useGames();

    const handleToggle = () => {
        if (isToggled) {
            removeFilter(filterName);
        } else {
            setFilter(filterName, FILTER_MAP[filterName]);
        }

        setIsToggled(!isToggled);
    }

    return (
        <div className={styles.filter}>
            <span className={styles.filterName}>{name}</span>
            <Toggle diceFace={dice} isToggled={isToggled} onToggle={() => handleToggle(filterName)} />
        </div>
    )
}

export default Filter;