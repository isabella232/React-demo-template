import React from 'react';
import { useSelector, useDispatch } from "react-redux";


// ALGOLIA'S IMPORT
import {
    connectSearchBox,
    VoiceSearch,
    connectCurrentRefinements
} from 'react-instantsearch-dom';
import {getQuery} from '../../actions/getQuery'

// UNIQBY LIB
import uniqBy from 'lodash.uniqby';

const SearchBox = ({
    refine,
    setQuery,
    setShowFederatedSearch,
    setSearchVisible,
    query
}) => {
    const dispatch = useDispatch()
    return (
        <div>
            <div className="searchBox-wrapper">
                <form action="" role="search"
                    onSubmit={(e) => {
                        e.preventDefault()
                        setShowFederatedSearch(false)
                        setSearchVisible(true)
                        dispatch(getQuery(e.currentTarget.value))
                        setQuery(e.currentTarget.value)
                    }}>
                    <input
                        type="search"
                        value={query}
                        onChange={event => {
                            dispatch(getQuery(event.currentTarget.value))
                            setQuery(event.currentTarget.value)
                            refine(event.currentTarget.value)
                        }}
                        placeholder="Search..."

                    />
                </form>
                <VoiceSearch searchAsYouSpeak={false} language={'en-US'} />
            </div>
            <CustomCurrentRefinements
                transformItems={items =>
                    items.filter(item => item.attribute !== 'price')
                }
            />
        </div>
    );
};

const CurrentRefinements = ({ items, refine }) => {
    const unique = uniqBy(items, 'currentRefinement');

    return (
        <ul className="refinement-content">
            {unique.map(item => (
                <li className="refinement-item" key={item.label}>
                    {item.items ? (
                        <React.Fragment>
                            <h3>{item.label}</h3>
                            <ul className="refinement-results">
                                {item.items.map(nested => (
                                    <li key={nested.label}>
                                        <button
                                            className="refinement-filter"
                                            href="#"
                                            onClick={event => {
                                                event.preventDefault();
                                                refine(nested.value);
                                            }}
                                        >
                                            {nested.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </React.Fragment>
                    ) : (
                        <button
                            href="#"
                            onClick={event => {
                                event.preventDefault();
                                refine(item.value);
                            }}
                        >
                            {item.label}
                        </button>
                    )}
                </li>
            ))}
        </ul>
    );
};

const CustomCurrentRefinements = connectCurrentRefinements(CurrentRefinements);

const CustomSearchBox = connectSearchBox(SearchBox);

export default CustomSearchBox;
