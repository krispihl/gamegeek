import cx from 'classnames';
import styles from './index.module.scss';

const DICE_MAP = {
    one: ['four'],
    two: ['one', 'seven'],
    three: ['one', 'four', 'seven'],
    four: ['one', 'two', 'six', 'seven'],
    five: ['one', 'two', 'four', 'six', 'seven'],
    six: ['one', 'two', 'three', 'five', 'six', 'seven'],
}

const getDice = (diceFace) => {
    return (
        <div className={styles.dice}>
            {DICE_MAP[diceFace].map((dicePlacement, i) => {
                return (
                    <div key={i} className={cx(styles.dot, styles[dicePlacement])} />
                )
            })}
        </div>
      );
}

const Toggle = ({ isToggled, onToggle, diceFace }) => {
    return (
        <label className={styles.switch}>
            <div className={cx(styles.slider, isToggled && styles['slider--on'])}>
                <input className={styles.input} type='checkbox' checked={isToggled} onChange={onToggle} />
                {getDice(diceFace)}
            </div>
        </label>
    )
}

export default Toggle;