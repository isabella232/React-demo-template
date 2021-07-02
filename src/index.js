import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createSorts from './scripts/generate-sorts';

//CHANGE ME IF USING NEW INDEX
window.appID = 'JDBD6EJM33';
window.key = '0fe54b2e3991d370c91376981aff9d48';
window.create_key = '930bf7d7e61cacd154566c94a9db58ef';
window.index = 'rayban_merged';

// QUERY SUGG
window.indexSugg = 'rayban_merged_query_suggestions';

//SORTBY
window.index_asc = window.index + '_price_asc';
window.index_dsc = window.index + '_price_dsc';

createSorts(
    window.appID,
    window.create_key,
    window.index,
    window.index_asc,
    window.index_desc,
    'price'
);

ReactDOM.render(<App />, document.getElementById('root'));
