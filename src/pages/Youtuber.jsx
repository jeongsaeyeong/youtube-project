import React from 'react'
import { youtuberText } from '../data/youtuber'
import { Link } from 'react-router-dom';
import Main from '../components/section/Main';

const Youtuber = () => {
    return (
        <Main
            title={'음악 유튜버 모음'}
            description={'음악 유튜버의 모입니다. 클릭하면 채널로 이동합니다.'}
        >
            <section id='youtuber'>
                <h2>음악 유튜버 모음</h2>
                <div className="youtuber__inner">
                    {youtuberText.map((yout, key) => {
                        return (
                            <div className="youtuber play__icon" key={key}>
                                <div className="youtuber__img">
                                    <Link to={`/channel/${yout.channelId}`}>
                                        <img src={yout.img} alt={yout.title} />
                                    </Link>
                                </div>
                                <div className="youtuber__info">{yout.anothor}</div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </Main>
    )
}

export default Youtuber