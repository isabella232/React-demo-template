import React from 'react';

import {
    connectSearchBox,
    VoiceSearch,
    connectCurrentRefinements
} from 'react-instantsearch-dom';

import uniqBy from 'lodash.uniqby';

const SearchBox = ({ 
    currentRefinement, 
    refine, 
    setQuery, 
    setShowFederatedSearch, 
    setSearchVisible, 
    searchVisible,
    query
 }) => {
    //  console.log(searchVisible)
    return (
        <div>
            <div className="searchBox-wrapper">
                <form action="" role="search"   
                onSubmit={(e)=> {
                        e.preventDefault()
                        setShowFederatedSearch(false)
                        setSearchVisible(true)
                        setQuery(e.currentTarget.value)
                    }}>
                <input
                    type="search"
                    value={query}
                    onChange={event => {
                        setQuery(event.currentTarget.value)
                        
                        refine(event.currentTarget.value)  
                    } }
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
                                        <a
                                            className="refinement-filter"
                                            href="#"
                                            onClick={event => {
                                                event.preventDefault();
                                                refine(nested.value);
                                            }}
                                        >
                                            {nested.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </React.Fragment>
                    ) : (
                        <a
                            href="#"
                            onClick={event => {
                                event.preventDefault();
                                refine(item.value);
                            }}
                        >
                            {item.label}
                        </a>
                    )}
                </li>
            ))}
        </ul>
    );
};

const CustomCurrentRefinements = connectCurrentRefinements(CurrentRefinements);

const CustomSearchBox = connectSearchBox(SearchBox);

export default CustomSearchBox;
