import React from 'react'

import { CustomHits } from '../Searchage/Hits';
import CustomSuggestions from '../Searchage/Suggestions';
import {HierarchicalMenu, CatRefinementLists, CustomFilters, CustomCateRefinementList} from '../Searchage/Filters'
import CustomSearchBox from '../Searchage/SearchBox';

import {
    Configure,
    RefinementList, 
    Index
} from 'react-instantsearch-dom';


const FederatedSearch = ({query, setQuery, setShowFederatedSearch, showFederatedSearch, searchVisible, setSearchVisible}) => {
    // console.log(searchVisible)
    return ( 
    <div className="federatedSearch">
       
        <div className="federatedSearch-wrapper">
        {/* <div className="federatedSearch-categories">
            
            <h3>Gender</h3>
            <CustomCateRefinementList attribute='GENDER'/>
            <h3>Age</h3>
            <CustomCateRefinementList attribute='age_group'/>
            <h3>Color</h3>
            <CustomCateRefinementList attribute='color'/> 
        </div> */}
        <div className="federatedSearch-suggestions">
        <h3>Suggestions</h3>
            <CustomSuggestions query={query} setQuery={setQuery}/>
        </div>
        <div className="federatedSearch-products">
        <CustomSearchBox query={query} setQuery={setQuery} setShowFederatedSearch={setShowFederatedSearch} showFederatedSearch={showFederatedSearch} searchVisible={searchVisible} setSearchVisible={setSearchVisible}  />
        <h3 className="federated-title">Products</h3>
            <Configure hitsPerPage={20}/>
            <CustomHits/>
        </div>
        </div>
    </div> 
    );
}
 
export default FederatedSearch;