import React from 'react';
import bgGuitar from '../../Img/guitar.png';
import bgSynthesizer from '../../Img/synth.png';
import bgDrums from '../../Img/drums.png';
import { Link, useParams } from "react-router-dom";


const SectionData = [
    {
        Title: 'GUITARS',
        Url: bgGuitar,
        path: '/store?category=electric-guitars'
    },
    {
        Title: 'SYNTHESIZERS',
        Url: bgSynthesizer,
        path: '/store?category=synthesizers'
    },

    {
        Title: 'DRUMS',
        Url: bgDrums,
        path: '/store?category=drums'
    },
];


const Section = () => {
    return (
        <div className='categories-blocks'>
            {SectionData.map((SectionData) => (
                <Link to={SectionData.path}>
                    <div className="category" key={SectionData.Title}>
                        <span>{SectionData.Title}</span>
                        <img src={SectionData.Url} ></img>
                    </div>
                </Link>
            ))}
        </div>
    );
  };

export default Section;