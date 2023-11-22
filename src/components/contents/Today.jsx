import React from 'react'
import { Link } from 'react-router-dom';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const Today = ({ videos }) => {
    if (!videos) {
        return null;
    }
    if (!videos.id || !videos.snippet) {
        return null;
    }

    return (
        <section id='today'>
            <div className="today_inner">
                <div className="today__thubm">
                    <Link
                        to={`/video/${videos.id.videoId}`}
                        style={{ backgroundImage: `url(${videos.snippet.thumbnails.high.url})` }}>
                    </Link>
                </div>
                <div className="today__text">
                    <span className='today'>오늘 당신과 함께할 노래<em className='line'></em></span>
                    <h3 className='title'>{videos.snippet.title}</h3>
                    <p className='desc'>
                        {videos.snippet.description}
                    </p>
                    <div className='info'>
                        <span className='author'>{videos.snippet.channelTitle}</span>
                        <span className='date'>{formatDate(videos.snippet.publishedAt)}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Today