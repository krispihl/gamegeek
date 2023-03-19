import { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive'
import Filter from '../Filter';
import Accordion from '../Accordion';
import styles from './index.module.scss';

const getFilters = () => {
    return (
        <Fragment>
            <Filter name='Junior games' dice='three' toggleState={false} filterName='juniorGame' />
            <Filter name='EN games' dice='four' toggleState={false} filterName='enGames' />
            <Filter name='Expansions' dice='six' toggleState={false} filterName='expansions' />
            <Filter name='1-player games' dice='one' toggleState={false} filterName='onePlayer' />
            <Filter name='Only 2-players games' dice='two' toggleState={false} filterName='only2Players' />
            <Filter name='> 4 players games' dice='five' toggleState={false} filterName='over4Players' />
        </Fragment>
    )
};

const Sidebar = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 870px)' });

    return (
            isTabletOrMobile ? (
                <Accordion triggerTitle='FILTER GAMES'>
                    {getFilters()}
                </Accordion>
            ) : (
                <div className={styles.sidebar}>
                    <p className={styles.filterTitle}>FILTER GAMES:</p>
                    {getFilters()}
                </div>
            )
    )
}

export default Sidebar;