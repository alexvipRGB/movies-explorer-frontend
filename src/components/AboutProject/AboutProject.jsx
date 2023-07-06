import React from 'react';

import './AboutProject.css';

function AboutProject() {
    return (
        <section className='project' id='project'>
            <div className='project__container'>
                <h2 className='project__title'>О проекте</h2>
                <ul className='project__info'>
                    <li className='project__description'>
                        <h3 className='project__subtitle'>Дипломный проект включал 5 этапов</h3>
                        <p className='project__text'>
                            Составление плана, работу над бэкендом,
                            вёрстку, добавление функциональности и
                            финальные доработки.
                        </p>
                    </li>
                    <li className='project__description'>
                        <h3 className='project__subtitle'>На выполнение диплома ушло 5 недель</h3>
                        <p className='project__text'>
                            У каждого этапа был мягкий и жёсткий дедлайн,
                            которые нужно было соблюдать,
                            чтобы успешно защититься.
                        </p>
                    </li>
                </ul>

                <div className='project__timeline'>
                    <h3 className='project__timeline-title project__timeline-title_color'>1 неделя</h3>
                    <h3 className='project__timeline-title'>4 недели</h3>
                    <p className='project__timeline-description'>Back-end</p>
                    <p className='project__timeline-description'>Front-end</p>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;