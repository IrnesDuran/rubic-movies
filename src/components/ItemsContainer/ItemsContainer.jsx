import React from 'react';
import ItemCard  from '../ItemCard/ItemCard';
import { withRouter } from 'react-router-dom';
import './ItemsContainer.styles.scss';

const ItemsContainer =(props) => {
    return(
        <div className='items-container'>
            {
                props.data.filter((item, idx) => idx < 10)
                .map((item) => (<div className="item" key={item.id} onClick={() => props.history.push(`${props.searchCategory}/${item.id}`)}><ItemCard item={item}/></div>))
            }
        </div>
    )};

export default withRouter(ItemsContainer);