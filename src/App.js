import React, { useState } from 'react';

//CSS / SCSS

import './SCSS/index.scss';

//COMPONENTS
import Header from './Components/Header/Header';
import SearchResults from './Components/Searchage/SearchResult';
import Homepage from './Components/Homepage/Homepage';

const App = () => {
    const [searchVisible, setSearchVisible] = useState(false);
    const [catSunglasses, setCatSunglasses] = useState(false);
    const [catEyeGlasses, setCatEyeGlasses] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [query, setQuery] = useState('');
    const [showFederatedSearch, setShowFederatedSearch] = useState(false);
    // console.log(searchVisible)
    return (
        <div>
            <Header
                setSelectedOption={setSelectedOption}
                searchVisible={searchVisible}
                setSearchVisible={setSearchVisible}
                setSearchVisible={setSearchVisible}
                catSunglasses={catSunglasses}
                setCatSunglasses={setCatSunglasses}
                catEyeGlasses={catEyeGlasses}
                setCatEyeGlasses={setCatEyeGlasses}
                setShowFederatedSearch={setShowFederatedSearch}
                showFederatedSearch={showFederatedSearch}
            />
            <SearchResults
                selectedOption={selectedOption}
                searchVisible={searchVisible}
                setSearchVisible={setSearchVisible}
                catSunglasses={catSunglasses}
                catEyeGlasses={catEyeGlasses}
                query={query}
                setQuery={setQuery}
                setShowFederatedSearch={setShowFederatedSearch}
                showFederatedSearch={showFederatedSearch}
            />
            <Homepage
                searchVisible={searchVisible}
                catSunglasses={catSunglasses}
                catEyeGlasses={catEyeGlasses}
            />
        </div>
    );
};

export default App;
