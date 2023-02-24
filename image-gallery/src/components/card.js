import React, { useState, useEffect } from "react";
import axios from 'axios';
// import env from 'react-dotenv';

const FLICKR_API = process.env.REACT_APP_F_API_KEY;


const Card = ({search}) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const result = await axios.get('https://api.flickr.com/services/rest', {
                params: {
                    method: 'flickr.photos.search',
                    api_key: FLICKR_API,
                    text: search,
                    format: 'json',
                    nojsoncallback: 1,
                    per_page: 20,
                },
            });
            //console.log(response);
            setImages(result.data.photos.photo)
        };

        fetchImages();
    }, [search]);

    return (
        <>
            {images.map(item => (
                // <img key={item.id} src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} alt={item.title} />
                <img key={item.id} src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} alt={item.title} />
            ))}
        </>
    )
}

export default Card;