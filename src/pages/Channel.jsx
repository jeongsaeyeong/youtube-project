import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';
import VideoSearch from '../components/video/VideoSearch';
import Main from '../components/section/Main';

const Channel = () => {
    const { channelId } = useParams();
    const [channelDetail, setChannelDetail] = useState();
    const [channelVideo, setChannelVideo] = useState([]);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
                setChannelDetail(data.items[0])

                const videoData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`);
                setChannelVideo(videoData.items);
                setNextPageToken(videoData.nextPageToken);
            } catch (error) {
                console.log("Erorr ->", error)
            } finally {
                setLoading(false);
            }
        }
        fetchResults();
    }, [channelId])

    const loadMoreVideos = async () => {
        if (nextPageToken) {
            const videoData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet&pageToken=${nextPageToken}&order=date`);
            setChannelVideo((prevVideos) => [...prevVideos, ...videoData.items]);
            setNextPageToken(videoData?.nextPageToken);
        }
    }

    const channelPageclass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main
            title='음악 유튜버 채널'
            description='음악 유튜버 채널 페이지입니다. 채널의 영상을 모두 확인할 수 있습니다.'
        >

            <section id='channelPage' className={channelPageclass}>
                {channelDetail && (
                    <div className="channel__inner">
                        <div className='channel__header' style={{ backgroundImage: channelDetail ? `url(${channelDetail.brandingSettings.image.bannerExternalUrl})` : 'none' }}>
                        </div>
                        <div className="channel__info">
                            <div className="channel__master">
                                <div className="circle">
                                    <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                                </div>
                                <div className="channel__text">
                                    <div>
                                        <h3 className='title'>{channelDetail.snippet.title}</h3>
                                        <div>
                                            <span>{channelDetail.snippet.customUrl}</span>
                                            <span>구독자 {channelDetail.statistics.subscriberCount}명</span>
                                            <span>동영상 {channelDetail.statistics.videoCount}개</span>
                                            <span>조회수 {channelDetail.statistics.viewCount}회</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='desc'>{channelDetail.snippet.description}</div>
                        </div>
                        <div className="channel__video video__inner">
                            <VideoSearch videos={channelVideo} channelId={channelId} />
                        </div>
                        <div className="channel__more">
                            {nextPageToken && <button onClick={loadMoreVideos}>더 보기</button>}
                        </div>
                    </div>
                )}

            </section>

        </Main>
    )
}

export default Channel