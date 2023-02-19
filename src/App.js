import Logo from './components/Logo';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import GameList from './components/GameList';
import Footer from './components/Footer';
import styles from './App.module.scss';

const App = () => {
    return (
        <div className={styles.pageWrapper}>
            <Logo />
            <Header />
            <Sidebar />
            <GameList />
            <Footer />
        </div>
    )
}

export default App;