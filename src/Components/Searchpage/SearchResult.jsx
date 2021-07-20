import React, { useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import {
    InstantSearch,
    Pagination,
    Configure,
    QueryRuleCustomData,
    Index
} from 'react-instantsearch-dom';

//COMPONENTS
import { CustomHits } from './Hits';
import { CustomFilters } from './Filters';
import CustomSearchBox from './SearchBox';
import ProductDetails from '../ProductsDetails/ProductsDetails';
import Banner from './banner'
import CustomSuggestions from './Suggestions';
import FederatedSearch from '../Federated Search/FederatedSearch';
import { showModalPDP } from '../../actions/productDetail';
import { federatedSearchVisible } from '../../actions/visibility';


const SearchResults = () => {
    const searchClient = algoliasearch(
        window.appID,
        window.key
    );

    // REDUX STATE & ACTIONS
    const dispatch = useDispatch()
    const {searchVisible, catTwo, catOne}  = useSelector(state => state.visibility)
    const federatedvisble = useSelector(state => state.visibility.federatedSearchVisible)
    const {showModal} = useSelector(state => state.productDetail)
    const {persona} = useSelector(state => state.selectedPersona)

    // REACT STATE
    const [filterAnim, setFilterAnim] = useState(true)
    const [isDynamicFactesOn, setIsDynamicFactesOn] = useState(false);

    return (
        <div className="searchResult-wrapper">
            <InstantSearch 
            searchClient={searchClient} 
            indexName={window.index}>
                <div 
                className={`container-federated ${federatedvisble
                    ? 'active'
                    : 'hidden'
                    }`}
                    onClick={(e) => {
                        
                        if (e.target === e.currentTarget) {
                            dispatch(federatedSearchVisible(false))
                          
                        }
                    }}
                >
                  
                    <FederatedSearch />
                 

                </div>
                <div
                    className={`container ${searchVisible || catOne || catTwo
                        ? 'active'
                        : 'hidden'
                        }`}
                >
                    <QueryRuleCustomData
                        transformItems={items => {
                            const match = items.find(data =>
                                Boolean(data.redirect)
                            );
                            if (match && match.redirect) {
                                window.location.href = match.redirect;
                            }
                            return [];
                        }}
                    >
                        {() => null}
                    </QueryRuleCustomData>
                    <div>

                    </div>
                    <div className="search-panel">
                        <CustomSearchBox />
                        <Index indexName={window.indexSugg} indexId="suggestions">
                            <CustomSuggestions attribute='title' />
                        </Index>
                        <Banner />

                        {catOne ? (
                            <div className="searchPanel-results">
                                <FilterBtn filterAnim={filterAnim} setFilterAnim={setFilterAnim} />
                                <Configure userToken={persona} filters="categorylvl3:One" enablePersonalization={true} />
                                <CustomFilters filterAnim={filterAnim} isDynamicFactesOn={isDynamicFactesOn} setIsDynamicFactesOn={setIsDynamicFactesOn} />
                                <CustomHits />
                            </div>
                        ) : (
                            // <div className="searchPanel-results">
                            //     <Configure userToken={selectedOption} enablePersonalization={true} />
                            //     <FilterBtn filterAnim={filterAnim} setFilterAnim={setFilterAnim} />
                            //     <CustomFilters filterAnim={filterAnim} />
                            //     <CustomHits setProduct={setProduct} setModal={setModal} />
                            // </div>
                            ""

                        )
                        }
                        {catTwo ? (<div className="searchPanel-results">
                            <FilterBtn filterAnim={filterAnim} setFilterAnim={setFilterAnim} />
                            <Configure userToken={persona} filters="categorylvl3:'Vision Care'" enablePersonalization={true} />
                            <CustomFilters filterAnim={filterAnim} isDynamicFactesOn={isDynamicFactesOn} setIsDynamicFactesOn={setIsDynamicFactesOn} />
                            <CustomHits   />

                        </div>) : (
                            // <div className="searchPanel-results">
                            //     <Configure userToken={selectedOption} enablePersonalization={true} />
                            //     <FilterBtn filterAnim={filterAnim} setFilterAnim={setFilterAnim} />
                            //     <CustomFilters filterAnim={filterAnim} />
                            //     <CustomHits setProduct={setProduct} setModal={setModal} />
                            // </div>
                            ""
                        )}
                        {searchVisible ? (<div className="searchPanel-results">
                            <Configure userToken={persona} enablePersonalization={true} />
                            <FilterBtn filterAnim={filterAnim} setFilterAnim={setFilterAnim} />
                            <CustomFilters filterAnim={filterAnim} isDynamicFactesOn={isDynamicFactesOn} setIsDynamicFactesOn={setIsDynamicFactesOn} />
                            <CustomHits />
                        </div>) :
                            ("")
                        }


                        <div className="pagination">
                            <Pagination />
                        </div>
                    </div>
                </div>
                {showModal ? (
                    <div className="modal-bg" 
                    onClick={(e) => {

                        if (e.target === e.currentTarget) {
                            dispatch(showModalPDP(false))
                        }
                    }}>
                        <div className="modal-wrapper fadeModal">
                            <ProductDetails  />
                        </div>
                    </div>
                ) : ""}
            </InstantSearch>
        </div>

    );
};

const FilterBtn = ({ filterAnim, setFilterAnim }) => {
    return (
        <div
            className="filterBtn"
            onClick={() => {
                setFilterAnim(!filterAnim);
            }}
        >
            <p>NAVIGATION & FILTERS</p>
            {filterAnim ? <p>-</p> : <p>+</p>}
        </div>
    );
};

export default SearchResults;
