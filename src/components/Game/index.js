import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../Modal';
import Pill from '../Pill';
import styles from './index.module.scss';

const Game = ({ name, minplayers, maxplayers, mintime, maxtime, imageUrl, locale, isExpansion, description, juniorGame }) => {
    const [modalShown, toggleModal] = useState(false);

    const players = minplayers === maxplayers ? `${minplayers}` : `${minplayers} - ${maxplayers}`;
    const time = mintime === maxtime ? `${mintime}` : `${mintime} - ${maxtime}`;

    return (
        <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 1 }}
        >
            <div className={styles.wrapper} onClick={() => { toggleModal(true) }}>
                <div className={styles.gamedata}>
                    <div className={styles.name}>
                        <h2>{name.toUpperCase()}</h2>
                    </div>
                    <p>Players: {players}</p>
                    <p>Play time: {time} min</p>
                    {(locale || isExpansion || juniorGame) && (
                        <div className={styles.pills}>
                            {locale === 'EST' && <Pill title='Estonian' />}
                            {isExpansion && <Pill title='Expansion' />}
                            {juniorGame && <Pill title='Junior' />}
                        </div>
                    )}
                </div>
                <img className={styles.image} src={imageUrl} alt={name} />
                <div className={styles.infoCorner}>
                <div className={styles.infoArrow}>
                    →
                </div>
    </div>
            </div>
            <Modal
                description={description}
                shown={modalShown}
                close={() => { toggleModal(false) }}
            />
        </motion.div>
    )
}

export default Game;