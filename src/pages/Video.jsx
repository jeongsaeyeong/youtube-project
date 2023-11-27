import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';

const Video = () => {
    const { videoId } = useParams();
    const [videoDetaill, setVideoDetail] = useState(null);
    const [videoComments, setvideoComments] = useState([]);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
            .then((data) => {
                setVideoDetail(data.items[0])
                console.log(data)
            });

        fetchFromAPI(`commentThreads?videoId=${videoId}&part=snippet&id=${videoId}`)
            .then((data) => {
                if (data.items) {
                    setvideoComments(data.items);
                    console.log(data.items)
                } else {
                    console.log("No comments found for this video");
                }
            })
    }, [videoId]);

    return (
        <section id='videoViewPage'>
            {videoDetaill && (
                <div className='video__view'>
                    <div className="video__play">
                        <ReactPlayer
                            playing={true}
                            url={`https://www.youtube.com/watch?v=${videoId}`}
                            width='100%'
                            height='100%'
                            style={{ position: 'absolute', top: 0, left: 0 }}
                        />
                    </div>
                    <div className='video__info'>
                        <h2 className='video__title'>
                            {videoDetaill.snippet.title}
                        </h2>
                        <div className='video__channel'>
                            <div className='id'>
                                <Link to={`/channel/${videoDetaill.snippet.channelId}`}>{videoDetaill.snippet.channelTitle}</Link>
                            </div>
                            <div className='desc'>{videoDetaill.snippet.description}</div>
                            <div className='count'>
                                <span className='view'>View {videoDetaill.statistics.viewCount}</span>
                                <span className='like'>Like {videoDetaill.statistics.likeCount}</span>
                                <span className='comment'>Comment {videoDetaill.statistics.commentCount}</span>
                            </div>
                        </div>
                    </div>
                    <div className="video__comments">
                        <h2>Comment</h2>
                        {videoComments.map((comment, index) => (
                            <div key={index}>
                                <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}

export default Video;