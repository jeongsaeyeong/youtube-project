import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { fetchFromAPI } from '../utils/api'
import VideoSearch from '../components/video/VideoSearch';

const Search = () => {
    const { searchId } = useParams();
    const [ videos, setVideo ] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?type=video&part=snippet&q=${searchId}`)
            .then((data) => setVideo(data.items));
    }, [searchId]);

    return (
        <section id='searchPage'>
            <h2>{searchId}</h2>
            <div className='video__inner search'>
                <VideoSearch videos={videos} />
            </div>
        </section>
    )
}

export default Search