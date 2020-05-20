import React from 'react';
import './ItemCard.styles.scss';

const ItemCard =(props) => {

    return(
        <div className='card-item'>
                <div className="image-container">
                    <img src={props.item.poster_path || props.item.backdrop_path ? `https://image.tmdb.org/t/p/w1280/${props.item.poster_path || props.item.backdrop_path}` : 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'} alt="https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"/>
                </div>
                <div className='item-title-container'>
                        <span className="title">{props.item.title || props.item.name}</span>
                </div>
                <div className="rating">{props.item.vote_average}</div>
        </div> 
    )};

export default ItemCard;


