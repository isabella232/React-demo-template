import React from 'react'

// ALGOLIA IMPORT
import { Configure } from 'react-instantsearch-dom';

// COMPONENT IMPORT
import { CustomHits } from '../Searchpage/Hits';
import CustomSuggestions from '../Searchpage/Suggestions';
// import {HierarchicalMenu, CatRefinementLists, CustomFilters, CustomCateRefinementList} from '../Searchage/Filters'
import CustomSearchBox from '../Searchpage/SearchBox';
// import { federatedSearchVisible } from '../../actions/visibility';




const FederatedSearch = () => {
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
                    <CustomSuggestions />
                </div>
                <div className="federatedSearch-products">
                    <CustomSearchBox />
                    <h3 className="federated-title">Products</h3>
                    <Configure hitsPerPage={20} />
                    <CustomHits />
                </div>
            </div>
        </div>
    );
}

export default FederatedSearch;