import { createContext, useEffect, useContext, useState } from 'react';

export const GamesContext = createContext({
    allGames: [],
    setAllGames: () => null,
    filteredGames: [],
    setFilteredGames: () => null,
    setFilter: () => null,
    removeFilter: () => null,
});

export const GamesProvider = ({ children }) => {
    const [allGames, setAllGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        setAllGames(allGames);
        setFilteredGames(allGames);
    }, [allGames]);

    const setFilter = (name, conditions) => {
        setFilters([ ...filters, { name, conditions } ]);
    };

    const removeFilter = (name) => {
        const updatedFilters = filters.filter(filter => filter.name !== name);

        setFilters(updatedFilters);
        setFilteredGames(allGames);
    };

    useEffect(() => {
        if (!filters.length) {
            setFilteredGames(allGames);
        }
    }, [filters, allGames])

    useEffect(() => {
        for (const filter of filters) {
            const { property, value } = filter.conditions;

            const selection = filteredGames.filter(game => {
                if (filter.name === 'onePlayer') {
                    return game[property[0]].value === value[0];
                } else if (filter.name === 'only2Players') {
                    return game[property[0]].value === value[0] && game[property[1]].value === value[1];
                } else if (filter.name === 'over4Players') {
                    return game[property[0]].value > value[0];
                }

                return game[property[0]] === value[0];
            })

            setFilteredGames(selection);
        }
    }, [filters]);

    return (
        <GamesContext.Provider value={{ allGames, setAllGames, filteredGames, setFilteredGames, setFilter, removeFilter }}>
            {children}
        </GamesContext.Provider>
    );
};

export const useGames = () => useContext(GamesContext);