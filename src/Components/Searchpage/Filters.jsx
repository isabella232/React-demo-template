import React, { useState } from 'react';

// ALGOLIA'S IMPORT
import {
    connectRefinementList,
    connectHierarchicalMenu,
    connectRange,
} from 'react-instantsearch-dom';

// COMPONENTS IMPORT
import DynamicFilter from './DynamicFilter';
import CustomStateResults from './StateResults'

// Prerequisite: install rheostat@4
import 'rheostat/initialize';
import Rheostat from 'rheostat';
import 'rheostat/css/rheostat.css';

const CatFilter = ({
    items,
    refine,
    createURL }) => {
    const [category, setcategory] = useState(true);
    return (
        <div className="filters-content">
            <div
                onClick={() => {
                    setcategory(!category);
                }}
                className="title"
            >
                <h3>Category</h3>
                <p>-</p>
            </div>
            <ul
                className={`filter-list-content ${category ? 'active-filters' : 'hidden-filters'
                    }`}
            >
                {items.map(item => (
                    <li className="filter-list" key={item.label}>
                        <a
                            className={`button-filter ${
                                item.isRefined ? 'refined-filter' : ''
                            }`}
                            href={createURL(item.value)}
                            style={{ fontWeight: item.isRefined ? 'bold' : '' }}
                            onClick={event => {
                                event.preventDefault();
                                refine(item.value);
                            }}
                        >
                            {item.label}
                        </a>
                        {item.items && (
                            <HierarchicalMenu
                                items={item.items}
                                refine={refine}
                                createURL={createURL}
                            />
                        )}
                    </li>
                ))}
            </ul>
            <div className="line"></div>
        </div>
    );
};

const HierarchicalMenu = connectHierarchicalMenu(CatFilter);

// CATEGORIES REFINMENT LIST
const CatRefinementList = ({ items, refine }) => {
    return (
        <div className="filters-content">
            <div
                className="title"
            >
                <h3>Categories</h3>
                <p>-</p>
            </div>
            <ul
                className="filter-list-content">
                {items.map(item => (
                    <li className="filter-list" key={item.label}>
                        <button
                            className={`button-filter ${
                                item.isRefined ? 'refined-filter' : ''
                            }`}
                            href="#"
                            onClick={event => {
                                event.preventDefault();
                                refine(item.value);
                            }}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="line"></div>
        </div>
    );
};

const CatRefinementLists = connectRefinementList(CatRefinementList);

// Color Filter
const ColorRefinementList = ({ items, refine }) => {
    const [colors, setColors] = useState(true);
    return (
        <div className="filters-content">
            <div
                className="title"
                onClick={() => {
                    setColors(!colors);
                }}
            >
                <h3>Colors</h3>
                <p>-</p>
            </div>
            <ul
                className={`filter-list-content ${colors ? 'active-filters' : 'hidden-filters'
                    }`}
            >
                {items.map(item => (
                    <li className="filter-list" key={item.label}>
                        <button
                            className={`button-filter ${
                                item.isRefined ? 'refined-filter' : ''
                            }`}
                            href="#"
                            onClick={event => {
                                event.preventDefault();
                                refine(item.value);
                            }}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="line"></div>
        </div>
    );
};

const CustomColorRefinementList = connectRefinementList(ColorRefinementList);

// Size Filter
const SizeRefinementList = ({ items, refine }) => {
    const [size, setSize] = useState(true);
    return (
        <div className="filters-content">
            <div
                onClick={() => {
                    setSize(!size);
                }}
                className="title"
            >
                <h3>Size</h3>
                <p>-</p>
            </div>
            <ul
                className={`filter-list-content ${size ? 'active-filters' : 'hidden-filters'
                    }`}
            >
                {items.map(item => (
                    <li className="filter-list" key={item.label}>
                        <button
                            className={`button-filter ${
                                item.isRefined ? 'refined-filter' : ''
                            }`}
                            href="#"
                            style={{ fontWeight: item.isRefined ? 'bold' : '' }}
                            onClick={event => {
                                event.preventDefault();
                                refine(item.value);
                            }}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="line"></div>
        </div>
    );
};

const CustomSizeRefinementList = connectRefinementList(SizeRefinementList);


// CATEGORIES
const CategoriesRefinementList = ({ items, refine }) => {
    return (
        <div className="filters-content">
            <div className="title"></div>
            <ul className='filter-list-content'>
                {items.map(item => (
                    <li className="filter-list" key={item.label}>
                        <button
                            className={`button-filter ${
                                item.isRefined ? 'refined-filter' : ''
                            }`}
                            href="#"
                            style={{ fontWeight: item.isRefined ? 'bold' : '' }}
                            onClick={event => {
                                event.preventDefault();
                                refine(item.value);
                            }}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="line"></div>
        </div>
    );
};

const CustomCateRefinementList = connectRefinementList(CategoriesRefinementList);


// Frame Shape Description
const FrameShapeRefinementList = ({ items, refine }) => {
    const [frameShapes, setFrameShapes] = useState(true);
    return (
        <div className="filters-content">
            <div
                className="title"
                onClick={() => {
                    setFrameShapes(!frameShapes);
                }}
            >
                <h3>Frame Shapes</h3>
                <p>-</p>
            </div>
            <ul
                className={`filter-list-content ${frameShapes ? 'active-filters' : 'hidden-filters'
                    }`}
            >
                {items.map(item => (
                    <li className="filter-list" key={item.label}>
                        <button
                            className={`button-filter ${
                                item.isRefined ? 'refined-filter' : ''
                            }`}
                            href="#"
                            onClick={event => {
                                event.preventDefault();
                                refine(item.value);
                            }}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="line"></div>
        </div>
    );
};

const CustomFrameShapeRefinementList = connectRefinementList(FrameShapeRefinementList);

// GENDER
const GenderRefinementList = ({ items, refine }) => {
    const [genders, setGenders] = useState(true);
    return (
        <div className="filters-content">
            <div
                className="title"
                onClick={() => {
                    setGenders(!genders);
                }}
            >
                <h3>Gender</h3>
                <p>-</p>
            </div>
            <ul
                className={`filter-list-content ${genders ? 'active-filters' : 'hidden-filters'
                    }`}
            >
                {items.map(item => (
                    <li className="filter-list" key={item.label}>
                        <button
                            className={`button-filter ${
                                item.isRefined ? 'refined-filter' : ''
                            }`}
                            href="#"
                            onClick={event => {
                                event.preventDefault();
                                refine(item.value);
                            }}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="line"></div>
        </div>
    );
};

const CustomGenderRefinementList = connectRefinementList(GenderRefinementList);

// FRAMEMATERIAL
const MaterialRefinementList = ({ items, refine }) => {
    const [materials, setMaterials] = useState(true);
    return (
        <div className="filters-content">
            <div
                className="title"
                onClick={() => {
                    setMaterials(!materials);
                }}
            >
                <h3>Frame Material</h3>
                <p>-</p>
            </div>
            <ul
                className={`filter-list-content ${materials ? 'active-filters' : 'hidden-filters'
                    }`}
            >
                {items.map(item => (
                    <li className="filter-list" key={item.label}>
                        <button
                            className={`button-filter ${
                                item.isRefined ? 'refined-filter' : ''
                            }`}
                            href="#"
                            onClick={event => {
                                event.preventDefault();
                                refine(item.value);
                            }}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="line"></div>
        </div>
    );
};

const CustomMaterialRefinementList = connectRefinementList(MaterialRefinementList);

// Price Filter
const RangeSlider = ({ min, max, currentRefinement, canRefine, refine }) => {
    const [stateMin, setStateMin] = React.useState(min);
    const [stateMax, setStateMax] = React.useState(max);

    React.useEffect(() => {
        if (canRefine) {
            setStateMin(currentRefinement.min);
            setStateMax(currentRefinement.max);
        }
    }, [currentRefinement.min, currentRefinement.max]);

    if (min === max) {
        return null;
    }

    const onChange = ({ values: [min, max] }) => {
        if (currentRefinement.min !== min || currentRefinement.max !== max) {
            refine({ min, max });
        }
    };

    const onValuesUpdated = ({ values: [min, max] }) => {
        setStateMin(min);
        setStateMax(max);
    };

    return (
        <div className="filters-content">
            <div className="title" style={{ marginBottom: '1em' }}>
                <h3>Price</h3>
                <p>-</p>
            </div>
            <Rheostat
                min={min}
                max={max}
                values={[currentRefinement.min, currentRefinement.max]}
                onChange={onChange}
                onValuesUpdated={onValuesUpdated}
                background=''
               
                
            >
                <div
                    className="rheostat-marker rheostat-marker--large"
                    style={{ left: 0 }}
                >
                    <div className="rheostat-value">{stateMin}</div>
                </div>
                <div
                    className="rheostat-marker rheostat-marker--large"
                    style={{ right: 0 }}
                >
                    <div className="rheostat-value">{stateMax}</div>
                </div>
            </Rheostat>
        </div>
    );
};

const CustomRangeSlider = connectRange(RangeSlider);

// MAIN COMPONENT
const CustomFilters = ({ filterAnim, isDynamicFactesOn, setIsDynamicFactesOn }) => {
    return (
        <div className={`filters-wrapper ${filterAnim ? "showWrapperFilter" : "hideWrapperFilter"}`}>
            <div>
                <CustomStateResults />
                {isDynamicFactesOn ? ('') : (
                    <div>
                        <CustomFrameShapeRefinementList attribute="FrameShapeDescription" />
                        <CustomMaterialRefinementList attribute="FRAMEMATERIAL" />
                        <CustomGenderRefinementList attribute="GENDER" />
                        <CustomColorRefinementList attribute="color" />
                        <CustomSizeRefinementList attribute="size" />
                    </div>)}

                <DynamicFilter setIsDynamicFactesOn={setIsDynamicFactesOn} isDynamicFactesOn={isDynamicFactesOn} />
                <CustomFrameShapeRefinementList attribute="FrameShapeDescription" />
                <CustomMaterialRefinementList attribute="FRAMEMATERIAL" />
                <CustomRangeSlider attribute="price" min={10} max={550} />
            </div>
        </div>

    );
};

export { CustomFilters, HierarchicalMenu, CatRefinementLists, CustomCateRefinementList };
