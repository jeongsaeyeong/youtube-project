import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';
import { fetchFromAPI } from '../utils/api';
import { youtuberText } from '../data/youtuber';
import { Link } from 'react-router-dom';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const Today = () => {

    const channelId01 = youtuberText[0].channelId;
    const [videos, setVideos] = useState([]);
    const [pageToken, setPageToken] = useState('');

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data = await fetchFromAPI(`search?channelId=${channelId01}&part=snippet&order=date&maxResults=5&pageToken=${pageToken}`);
                setVideos(prevVideos => [...prevVideos, ...data.items]);
                setPageToken(data.nextPageToken || '');
            } catch (error) {
                console.log("Error ->", error);
            }
        }
        fetchResults();
    }, [channelId01, pageToken]);

    return (
        <Main
            title='추천 음악'
            description='오늘의 추천 음악입니다.'
        >
            <section id='todayPage'>
                {videos.map((today, key) => {
                    return (
                        <div className="today_inner" key={key}>
                            <div className="today__thubm">
                                <Link
                                    to={`/video/${today.id.videoId}`}
                                    style={{ backgroundImage: `url(${today.snippet.thumbnails.high.url})` }}>
                                </Link>
                            </div>
                            <div className="today__text">
                                <span className='today'>오늘 당신과 함께할 노래<em className='line'></em></span>
                                <h3 className='title'>{today.snippet.title}</h3>
                                <p className='desc'>
                                    {today.snippet.description}
                                </p>
                                <div className='info'>
                                    <span className='author'>{today.snippet.channelTitle}</span>
                                    <span className='date'>{formatDate(today.snippet.publishedAt)}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>
        </Main>
    );
}

export default Today;