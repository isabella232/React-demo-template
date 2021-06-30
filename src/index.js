import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//CHANGE ME IF USING NEW INDEX
window.appID = 'JDBD6EJM33'
window.key = '0fe54b2e3991d370c91376981aff9d48'
window.index = "rayban_merged"

//SORTBY
window.index_asc = "rayban_merged_price_asc"
window.index_desc = "rayban_merged_price_dsc"

// QUERY SUGG
window.indexSugg = "rayban_merged_query_suggestions"

ReactDOM.render(<App />, document.getElementById('root'));
