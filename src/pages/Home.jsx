import React, { useEffect, useState } from 'react';
import Today from '../components/contents/Today';
import Youtuber from '../components/contents/Youtuber';
import Main from '../components/section/Main';
import VideoSlider from '../components/video/VideoSlider';
import { fetchFromAPI } from '../utils/api';


const Home = () => {
    const [channelVideo, setChannelVideo] = useState([]);
    const [channelVideo02, setChannelVideo02] = useState([]);
    const [channelVideo03, setChannelVideo03] = useState([]);
    const [channelVideo04, setChannelVideo04] = useState([]);
    const [channelVideo05, setChannelVideo05] = useState([]);

    const v1 = 'UCuad7SsgU6SabSQaBY9TsFg'
    const v2 = 'UCHHkP5D3JP0W4opHXMa7WyQ'
    const v3 = 'UCabXkcm1Nwe2Ra8_VUvCcMA'
    const v4 = 'UCjK7dqB6-rThAFe-n2sc-qQ'
    const v5 = 'UCmQvc4QPiCxMwiRpL3AOvqA'

    useEffect(() => {

        const fetchResult = async () => {
            try {
                const videosData = await fetchFromAPI(`search?channelId=${v1}&part=snippet&order=date`);
                setChannelVideo(videosData.items);

                const videosData02 = await fetchFromAPI(`search?channelId=${v2}&part=snippet&order=date`);
                setChannelVideo02(videosData02.items);

                const videosData03 = await fetchFromAPI(`search?channelId=${v3}&part=snippet&order=date`);
                setChannelVideo03(videosData03.items);

                const videosData04 = await fetchFromAPI(`search?channelId=${v4}&part=snippet&order=date`);
                setChannelVideo04(videosData04.items);

                const videosData05 = await fetchFromAPI(`search?channelId=${v5}&part=snippet&order=date`);
                setChannelVideo05(videosData05.items);
            } catch (error) {
                console.log('Error', error);
            }
        }
        fetchResult();
    }, [v1])

    return (
        <Main
            title='음악 유튜버'
            description='음악 유튜버 모음 사이트에 오신 것을 환영합니다.'
        >
            <Today videos={channelVideo04[6]} />
            <Youtuber />

            <VideoSlider videos={channelVideo} title='메르헨' name='v1' />
            <VideoSlider videos={channelVideo02} title='All was well' name='v2' />
            <VideoSlider videos={channelVideo03} title='by the way' name='v3' />
            <VideoSlider videos={channelVideo04} title='hello, sunset' name='v4' />
            <VideoSlider videos={channelVideo05} title='새던' name='v5' />
        </Main>
    );
}

export default Home;