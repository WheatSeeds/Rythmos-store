import React from 'react';
import bgGuitar from '../../Img/guitar.png';
import bgSynthesizer from '../../Img/synth.png';
import bgDrums from '../../Img/drums.png';

const SectionData = [
    {
        Title: 'GUITARS',
        Url: bgGuitar,
    },

    {
        Title: 'SYNTHESIZERS',
        Url: bgSynthesizer,
    },

    {
        Title: 'DRUMS',
        Url: bgDrums,
    },
];


const Section = () => {
    console.log(SectionData)
    return (
        <div className='content-block'>
        {SectionData.map((SectionData) => (
          <div className="item">
            <span>{SectionData.Title}</span>
            <img src={SectionData.Url} alt='test'></img>
          </div>
        ))}
      </div>
    );
  };

export default Section;