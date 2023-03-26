import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bggXmlApiClient from 'bgg-xml-api-client';
import Game from '../Game';
import ErrorView from '../ErrorView';
import SkeletonGameList from '../Skeletons/SkeletonGameList';
import { gameList } from '../../games'
import { useGames } from '../../contexts/games';
import styles from './index.module.scss';

const getName = (game) => {
    const BBGName = Array.isArray(game.name) ? game.name[0].value : game.name.value;
    const gameName = game.localName ? game.localName : BBGName;

    return gameName.replace(/(&amp;)/g,"&");
}

const GameList = () => {
    const { filteredGames, setAllGames } = useGames();
    const [loading, setLoading] = useState(true);
    const [errorView, setErrorView] = useState(false);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const fetchCalls = gameList.map(async (game) => {
                    const BGGData = await bggXmlApiClient.get('thing', { id: game.id });
                    const locale = game.locale ? game.locale : 'EN';
                    const localName = game.localName ? game.localName : '';
                    const juniorGame = game.juniorGame ? true : false;
                    
                    return {...BGGData.data.item, locale, localName, juniorGame}
                });
                Promise.all(fetchCalls).then(data => {
                    data.sort((a, b) => {
                        const nameA = getName(a);
                        const nameB = getName(b);
                        if (nameA < nameB) {
                          return -1;
                        }
                        if (nameA > nameB) {
                          return 1;
                        }
                        return 0;
                    });
                    setAllGames(data); 
                    setLoading(false);
                    setErrorView(false);
                });
            }
            fetchData();
        } catch(e) {
            setErrorView(true);
        }
    }, [setAllGames]);

    return (
        loading ? <SkeletonGameList /> :
        errorView ? <ErrorView /> :
        (<div className={styles.wrapper}>
            <motion.div layout className={styles.gameList}>
                <AnimatePresence>
                    {filteredGames.map((game) => {
                        return (
                            <Game
                                key={game.id}
                                name={getName(game)}
                                description={game.description}
                                imageUrl={game.thumbnail}
                                minplayers={game.minplayers.value}
                                maxplayers={game.maxplayers.value}
                                mintime={game.minplaytime.value}
                                maxtime={game.maxplaytime.value}
                                locale={game.locale}
                                isExpansion={game.type === 'boardgameexpansion'}
                                juniorGame={game.juniorGame}
                            />
                        )
                    })}
                </AnimatePresence>
            </motion.div>
        </div>)
    )
}

export default GameList;