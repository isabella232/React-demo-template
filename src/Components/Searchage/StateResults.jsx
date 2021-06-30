import { connectStateResults } from 'react-instantsearch-dom';

const StateResults = ({searchResults}) => {

  console.log(searchResults)
  
  return null
};

const CustomStateResults = connectStateResults(StateResults);

export default CustomStateResults;