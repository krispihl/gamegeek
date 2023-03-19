import { useEffect, useState } from 'react';
import bggXmlApiClient from 'bgg-xml-api-client';
import { gameList } from '../../games'
import Game from '../../components/Game';
import ErrorView from '../../components/ErrorView';
import styles from './index.module.scss';
import SkeletonGameList from '../Skeletons/SkeletonGameList';
import { useGames } from '../../contexts/games';

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
    }, [])

    return (
        loading ? <SkeletonGameList /> :
        errorView ? <ErrorView /> :
        (<div className={styles.wrapper}>
            <div className={styles.gameList}>
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
            </div>
        </div>)
    )
}

export default GameList;