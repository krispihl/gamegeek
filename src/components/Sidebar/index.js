import { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive'
import Filter from '../Filter';
import Accordion from '../Accordion';
import styles from './index.module.scss';

const getFilters = () => {
    return (
        <Fragment>
            <Filter name='With junior games' dice='three' toggleState={true} />
            <Filter name='With ET games' dice='four' toggleState={true} />
            <Filter name='With expansions' dice='six' toggleState={true} />
            <Filter name='Only junior games' dice='three' toggleState={false} />
            <Filter name='Only EN games' dice='four' toggleState={false} />
            <Filter name='Only expansions' dice='six' toggleState={false} />
            <Filter name='Only 1-player games' dice='one' toggleState={false} />
            <Filter name='Only 2-player games' dice='two' toggleState={false} />
            <Filter name='Only > 4 player games' dice='five' toggleState={false} />
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