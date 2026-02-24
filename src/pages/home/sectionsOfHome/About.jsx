import React from 'react';
import CardsForHome from '../../../components/cards/CardsForHome';
import aboutData from '../../../data/aboutData/aboutData';

const About = () => {
    return (
        <div className='grid gap-4 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center max-w-7xl mx-auto'>
            
            {
                aboutData.map((cardData)=>{
                    const Icon =cardData.cardIcon;
                    
                    return (<CardsForHome 
                    key={cardData.id}
                    Icon={Icon}
                    cardTitle={cardData.cardTitle}
                    cardSubTitle={cardData.cardSubTitle}
                    
                    ></CardsForHome>)
                })
            }
        </div>
    );
};

export default About;