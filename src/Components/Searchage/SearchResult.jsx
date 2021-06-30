import React, { useState } from 'react';
import algoliasearch from 'algoliasearch/lite';

import {
    InstantSearch,
    Pagination,
    Configure,
    QueryRuleCustomData,
    Index
} from 'react-instantsearch-dom';

//COMPONENTS
import {CustomHits} from './Hits';
import {CustomFilters} from './Filters';
import CustomSearchBox from './SearchBox';
import ProductDetails from '../ProductsDetails/ProductsDetails';
import Banner from '../Searchage/banner'
import CustomSuggestions from './Suggestions';
import DynamicFilter from './DynamicFilter'
import FederatedSearch from '../Federated Search/FederatedSearch';
import CustomStateResults from './StateResults';

const SearchResults = ({ selectedOption, searchVisible, setSearchVisible, catSunglasses, catEyeGlasses, showFederatedSearch, setShowFederatedSearch }) => {
    const searchClient = algoliasearch(
        window.appID,
        window.key
    );
    const [filterAnim, setFilterAnim] = useState(true)
    const [product, setProduct] = useState(null)
    const [modal, setModal] = useState(false)
    const [query, setQuery] = useState('')
    const [isDynamicFactesOn, setIsDynamicFactesOn] = useState(false);
    
    return (
<div className="searchResult-wrapper">
    <InstantSearch searchClient={searchClient} indexName={window.index}>
    <div className={`container-federated ${showFederatedSearch
                ? 'active'
                : 'hidden'
                }`}
        >
    <FederatedSearch query={query} setQuery={setQuery} setShowFederatedSearch={setShowFederatedSearch} showFederatedSearch={showFederatedSearch} searchVisible={searchVisible} setSearchVisible={setSearchVisible} />
   
    </div>
        <div
            className={`container ${searchVisible || catSunglasses || catEyeGlasses
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
                    <CustomSearchBox query={query} setQuery={setQuery} searchVisible={searchVisible} setSearchVisible={setSearchVisible} setShowFederatedSearch={setShowFederatedSearch} showFederatedSearch={setShowFederatedSearch} />
                    <Index indexName={window.indexSugg} indexId="suggestions">
                        <CustomSuggestions setQuery={setQuery} query={query} attribute='title' />
                    </Index>
                    <Banner />
                   
                    {catSunglasses ? (
                        <div className="searchPanel-results">
                            <FilterBtn filterAnim={filterAnim} setFilterAnim={setFilterAnim} />
                            <Configure userToken={selectedOption} filters="categorylvl3:Sunglasses" enablePersonalization={true} />
                            <CustomFilters filterAnim={filterAnim} isDynamicFactesOn={isDynamicFactesOn} setIsDynamicFactesOn={setIsDynamicFactesOn} />
                            <CustomHits setProduct={setProduct} setModal={setModal} />
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
                    {catEyeGlasses ? (<div className="searchPanel-results">
                        <FilterBtn filterAnim={filterAnim} setFilterAnim={setFilterAnim} />
                        <Configure userToken={selectedOption} filters="categorylvl3:'Vision Care'" enablePersonalization={true} />
                        <CustomFilters filterAnim={filterAnim} isDynamicFactesOn={isDynamicFactesOn} setIsDynamicFactesOn={setIsDynamicFactesOn} />
                        <CustomHits setProduct={setProduct} setModal={setModal} />
                    </div>) : (
                    // <div className="searchPanel-results">
                    //     <Configure userToken={selectedOption} enablePersonalization={true} />
                    //     <FilterBtn filterAnim={filterAnim} setFilterAnim={setFilterAnim} />
                    //     <CustomFilters filterAnim={filterAnim} />
                    //     <CustomHits setProduct={setProduct} setModal={setModal} />
                    // </div>
                    ""
                    )}
                    {searchVisible ? ( <div className="searchPanel-results">
                         <Configure userToken={selectedOption} enablePersonalization={true} />
                         <FilterBtn filterAnim={filterAnim} setFilterAnim={setFilterAnim} />
                         <CustomFilters filterAnim={filterAnim} isDynamicFactesOn={isDynamicFactesOn} setIsDynamicFactesOn={setIsDynamicFactesOn} />
                         <CustomHits setProduct={setProduct} setModal={setModal} />
                     </div>) :
                     ("")
                     }
                     

                    <div className="pagination">
                        <Pagination />
                    </div>

                </div>
        </div>
                    {modal ? (
                        <div className="modal-wrapper fadeModal">
                            <ProductDetails product={product} setModal={setModal} />
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
