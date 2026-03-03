import React from 'react';
import NextAimHero from './sectionsofnextaim/NextAimHero';
import NextAimProgress from './sectionsofnextaim/NextAimProgress';
import NextAimTimeLine from './sectionsofnextaim/NextAimTimeLine';

const NextAim = () => {
    return (
        <div>
            <NextAimHero></NextAimHero>
             <NextAimProgress></NextAimProgress>
             <NextAimTimeLine></NextAimTimeLine>
        </div>
    );
};

export default NextAim;