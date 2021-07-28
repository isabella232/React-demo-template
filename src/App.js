import React from 'react';

//CSS / SCSS

import './SCSS/index.scss';

//COMPONENTS
import Header from './Components/Header/Header';
import SearchResults from './Components/Searchpage/SearchResult';
import Homepage from './Components/Homepage/Homepage';

const App = () => {
    return (
        <div>
            <Header
            />
            <SearchResults
            />
            <Homepage
            />
        </div>
    );
};

export default App;
