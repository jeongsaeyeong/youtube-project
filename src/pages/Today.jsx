import React from 'react';
import { todayText } from '../data/today';
import Main from '../components/section/Main';

const Today = () => {
    return (
        <Main
            title='추천 음악'
            description='오늘의 추천 음악입니다.'
        >
            <section id='todayPage'>
                {todayText.map((today, key) => {
                    return (
                        <div className="today_inner" key={key}>
                            <div className="today__thubm">
                            </div>
                            <div className="today__text">
                                <span className='today'>오늘 당신과 함께할 노래<em className='line'></em></span>
                                <h3 className='title'>{today.title}</h3>
                                <p className='desc'>
                                    {today.desc}
                                </p>
                                <div className='info'>
                                    <span className='author'>{today.author}</span>
                                    <span className='date'>{today.date}</span>
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