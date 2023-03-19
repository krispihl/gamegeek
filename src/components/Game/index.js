import { useState, Fragment } from 'react';
import styles from './index.module.scss';
import Modal from '../Modal';
import Pill from '../Pill';

const Game = ({ name, minplayers, maxplayers, mintime, maxtime, imageUrl, locale, isExpansion, description, juniorGame }) => {
    const [modalShown, toggleModal] = useState(false);

    const players = minplayers === maxplayers ? `${minplayers}` : `${minplayers} - ${maxplayers}`;
    const time = mintime === maxtime ? `${mintime}` : `${mintime} - ${maxtime}`;

    return (
        <Fragment>
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
                    <button className={styles.button}>See description</button>
                </div>
                <img className={styles.image} src={imageUrl} alt={name} />
            </div>
            <Modal
                description={description}
                shown={modalShown}
                close={() => { toggleModal(false) }}
            />
        </Fragment>
    )
}

export default Game;