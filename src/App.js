import Logo from './components/Logo';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import GameList from './components/GameList';
import Footer from './components/Footer';
import { GamesProvider } from './contexts/games';
import styles from './App.module.scss';

const App = () => {
    return (
        <GamesProvider>
            <div className={styles.pageWrapper}>
                <Logo />
                <Header />
                <Sidebar />
                <GameList />
                <Footer />
            </div>
        </GamesProvider>
    )
}

export default App;