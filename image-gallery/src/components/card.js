import React, { useState, useEffect } from "react";
import axios from 'axios';
import env from 'react-dotenv';

const FLICKR_API = process.env.REACT_APP_API_KEY;
// const FLICKR_API = '4d8b271f53174cb2c945329ca9d5d762';

const Card = (props) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const result = await axios.get('https://api.flickr.com/services/rest', {
                params: {
                    method: 'flickr.photos.search',
                    api_key: FLICKR_API,
                    text: props.value,
                    format: 'json',
                    nojsoncallback: 1,
                    per_page: 20,
                },
            });
            //console.log(response);
            setImages(result.data.photos.photo)
        };

        fetchImages();
    }, [props.value]);

    return (
        <>
            {images.map(item => (
                <img key={item.id} src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} alt={item.title} />
            ))}
        </>
    )
}

export default Card;