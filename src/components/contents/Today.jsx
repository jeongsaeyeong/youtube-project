import React from 'react'
import { todayText } from '../../data/today';

const Today = () => {
    return (
        <section id='today'>
            <div className="today_inner">
                <div className="today__thubm">
                </div>
                <div className="today__text">
                    <span className='today'>오늘 당신과 함께할 노래<em className='line'></em></span>
                    <h3 className='title'>{todayText[0].title}</h3>
                    <p className='desc'>
                        {todayText[0].desc}
                    </p>
                    <div className='info'>
                        <span className='author'>{todayText[0].author}</span>
                        <span className='date'>{todayText[0].date}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Today