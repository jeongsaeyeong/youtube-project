import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';
import Main from '../components/section/Main';

const Video = () => {

    const { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);

    console.log(videoId)
    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
            .then((data) => {
                console.log(data)
                setVideoDetail(data.items[0])
            });
    }, [videoId])

    return (
        <Main
            title='영상 모음'
            description='유튜버 영상 모음입니다.'
        >
            <section id='videoPage'>
                <h2 className='blind'>비디오</h2>
                {videoDetail && (
                    <div className="video__view">
                        <div className="video__play">
                            <ReactPlayer
                                playing={true}
                                url={`https://www.youtube.com/watch?v=${videoId}`}
                                width="100%"
                                height="100vh"
                            // style={{ position: "absolute", top: 0, left: 0 }}
                            />
                        </div>
                        <div className="video__info">
                            <h2 className='video__title'>{videoDetail.snippet.title}</h2>
                            <div className="video__channel">
                                <div className="id">
                                    {videoDetail.snippet.channelTitle}
                                </div>
                                <div className="video__desc">
                                    {videoDetail.snippet.description}
                                </div>
                                <div className="count">
                                    <div className="view">View: {videoDetail.statistics.viewCount}</div>
                                    <div className="like">Like: {videoDetail.statistics.likeCount}</div>
                                    <div className="comment">Comment: {videoDetail.statistics.commentCount}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </section>
        </Main>
    )
}

export default Video