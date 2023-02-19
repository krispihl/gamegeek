import LogoImage from '../../icons/logo.png';
import styles from './index.module.scss';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img className={styles.logoImage} src={LogoImage} alt='GameGeek logo with 2 dice' />
        </div>
    )
}

export default Logo;