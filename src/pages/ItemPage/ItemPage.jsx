import React, {useEffect, useState} from 'react';
import './ItemPage.styles.scss';
import ReactPlayer from 'react-player'

const ItemPage =(props) => {

    const [item, setItem] = useState([]);
    const [videos, setVideos] = useState([]);
    const [genres, setGenres] = useState([]);


    useEffect(() => {
        window.scrollTo(0,0);
    
      },[]);

      

      useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api.themoviedb.org/3${props.location.pathname}?api_key=addad1e44ebe9bd38c42a7e83a8851a9&language=en-US&append_to_response=credits`);
            const dataArray = await res.json();
            const result = await dataArray;

            const genres = await result.genres

             setItem(result);
             setGenres(genres);
        };

        const fetchVideos = async () => {
            const videoResults = await fetch(`https://api.themoviedb.org/3${props.location.pathname}/videos?api_key=addad1e44ebe9bd38c42a7e83a8851a9&language=en-US`);
            const videoArray = await videoResults.json();
            const video = await videoArray.results[0];
             setVideos(video);
        };

        fetchData();
        fetchVideos();

      },[]);

      
    
      

        //Conditional render, if available, video is being rendered, otherwise poster
        const VideoOrPoster = videos===undefined ? 
        (<img className="trailer-container" src={item.poster_path || item.backdrop_path ? `https://image.tmdb.org/t/p/w1280/${item.poster_path || item.backdrop_path}` : 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'} alt="https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"/>) :
        (<ReactPlayer key = "youtube" url={`https://www.youtube.com/embed/${videos.key}`} playing controls width="100%"/>);

    return(
        <div className="poster-container" >
            <div className='arrow' onClick={() => props.history.goBack()}>&#10094; Back</div>
            <div className="genres"> {genres.map(item=><div className="genre">{item.name}</div>)}</div>
                <div className="content">{VideoOrPoster}</div>
                <div className='content-title'>
                    <span className="title">{item.title || item.name}</span>
                </div>
    <div className='overview'>Movie overview: <br/>{item.overview}</div>
        </div>
    )

};

export default ItemPage;