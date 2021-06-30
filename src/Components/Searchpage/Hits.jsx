import React from 'react'

import {
    Highlight,
    SortBy,
    Stats,
    connectHits,
} from 'react-instantsearch-dom';



const Hits = ({ hits, setProduct, setModal, setShowFederatedSearch, setSearchVisible }) => {

    return (
        <div className="hits-wrapper">
            <div className="sort-and-stat">
                <Stats />
                <SortBy
                    defaultRefinement="rayban_merged"
                    items={[
                        {
                            value: window.index,
                            label: 'Relevancy'
                        },
                        {
                            value: window.index_desc,
                            label: 'Price Desc'
                        },
                        {
                            value: window.index_asc,
                            label: 'Price Asc.'
                        }
                    ]}
                />
            </div>
            <ul className="hits-list">
                {hits.map((hit) => (
                    <li key={hit.objectID} className="hit-list" onClick={
                        () => {
                            setProduct(hit)
                            setModal(true)
                            setShowFederatedSearch(false)
                            setSearchVisible(true)
                        }
                    }>
                        <div className="image-wrapper">
                            <img src={hit.image_link} alt="" />
                        </div>
                        <div className="infos">
                            <h3><Highlight
                                hit={hit}
                                attribute="title"
                            /></h3>
                            <p>$ {hit.price}.00</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
const HitsModal = ({ hits }) => {

    return (
        <div className="hits-wrapper">
            <ul className="hits-list hits-list-modal">
                {hits.map((hit) => (
                    <li key={hit.objectID} className="hit-list">
                        <div className="image-wrapper">
                            <img src={hit.image_link} alt="" />
                        </div>
                        <div className="infos">
                            <h3><Highlight
                                hit={hit}
                                attribute="title"
                            /></h3>
                            <p>$ {hit.price}.00</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}



const CustomHits = connectHits(Hits);
const CustomHitsModal = connectHits(HitsModal);

export { CustomHits, CustomHitsModal }
