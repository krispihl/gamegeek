import styles from './index.module.scss';

const ErrorView = () => {
    return (
        <div className={styles.errorView}>
            <p>Now this is not nice :( Seems that something went wrong...</p>
            <p>Please try to reload or come back later.</p>
        </div>
    )
}

export default ErrorView;