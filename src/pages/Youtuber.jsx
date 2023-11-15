import React from 'react'
import { youtuberText } from '../data/youtuber'
import { Link } from 'react-router-dom';

const Youtuber = () => {
    return (
        <section id='youtuber'>
            <h2>음악 유튜버 모음</h2>
            <div className="youtuber__inner">
                {youtuberText.map((yout, key) => {
                    return (
                        <div className="youtuber play__icon" key={key}>
                            <div className="youtuber__img">
                                <Link to={`/chnnel/${yout.channelId}`}>
                                    <img src={yout.img} alt={yout.title} />
                                </Link>
                            </div>
                            <div className="youtuber__info">{yout.anothor}</div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Youtuber