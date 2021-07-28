import React from 'react'
import { connectHits } from 'react-instantsearch-dom'
import { useDispatch } from 'react-redux'

import { getQuery } from '../../actions/getQuery'

const Suggestions = ({ hits }) => {
const dispatch = useDispatch()
  return (
    <div className="suggestions-container">
      {hits.slice(0, 9).map((hit) => (
        <div
          key={hit.title}
          className="suggestion"
          onClick={(e) => dispatch(getQuery(e.target.innerText))}
        >
          <p>{hit.title}</p>
        </div>
      ))}
    </div>
  )
}

const CustomSuggestions = connectHits(Suggestions)

export default CustomSuggestions