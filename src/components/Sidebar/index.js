import { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive'
import Filter from '../Filter';
import Accordion from '../Accordion';
import styles from './index.module.scss';

const getFilters = () => {
    return (
        <Fragment>
            <Filter name='Junior games' dice='three' filterName='juniorGame' />
            <Filter name='EN games' dice='four' filterName='enGames' />
            <Filter name='Expansions' dice='six' filterName='expansions' />
            <Filter name='1-player games' dice='one' filterName='onePlayer' />
            <Filter name='Only 2-players games' dice='two' filterName='only2Players' />
            <Filter name='> 4 players games' dice='five' filterName='over4Players' />
        </Fragment>
    )
};

const Sidebar = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 870px)' });

    return (
            isTabletOrMobile ? (
                <Accordion>{getFilters()}</Accordion>
            ) : (
                <div className={styles.sidebar}>
                    <p className={styles.filterTitle}>Filter games:</p>
                    {getFilters()}
                </div>
            )
    )
}

export default Sidebar;