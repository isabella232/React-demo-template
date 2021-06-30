import React from 'react'
import { connectHits, Highlight, connectRefinementList } from 'react-instantsearch-dom'

const Suggestions = ({ hits, setQuery, refine }) => {
  return (
    <div className="suggestions-container">
      {hits.slice(0, 9).map((hit) => (
        <div
          className="suggestion"
          onClick={(e) => setQuery(e.target.innerText)}
        >
          {/* <Highlight hit={hit} attribute="title" /> */}
          <p>{hit.title}</p>
        </div>
      ))}
    </div>
  )
}

const CustomSuggestions = connectHits(Suggestions)

export default CustomSuggestions