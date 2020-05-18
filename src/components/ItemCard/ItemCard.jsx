import React from 'react';

const ItemCard =(props) => {

    return(
        <div className='flex-col align-center mx-10 relative'>
                <div className="hover:opacity-75">
                    <img className="object-cover w-full h-1/2" 
                    src={props.item.poster_path || props.item.backdrop_path ? `https://image.tmdb.org/t/p/w1280/${props.item.poster_path || props.item.backdrop_path}` : 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'} alt="https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"/>
                </div>
                <div className=' py-1 px-4 bg-black text-center align-center hd:text-xl text-teal-400 font-extrabold tracking-widest uppercase absolute right-0 transform translate-x-3 -translate-y-20 -skew-x-12'>
                        <span className="transform -skew-x-12">{props.item.title || props.item.name}</span>
                </div>
                <div className="absolute h-10 w-10 bg-black rounded-full text-white text-center p-2 top-0 right-0 transform translate-x-4 -translate-y-4">{props.item.vote_average}</div>
        </div> 
    )};

export default ItemCard;


