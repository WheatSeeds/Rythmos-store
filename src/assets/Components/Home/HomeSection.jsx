import React from 'react';
import bgGuitar from '../../Img/guitar.png';
import bgSynthesizer from '../../Img/synth.png';
import bgDrums from '../../Img/drums.png';

const SectionData = [
    {
        Title: 'GUITARS',
        Url: bgGuitar,
        value: 'electricGuitars'
    },
    {
        Title: 'SYNTHESIZERS',
        Url: bgSynthesizer,
        value: 'synthesizers'
    },

    {
        Title: 'DRUMS',
        Url: bgDrums,
        value: 'drums'
    },
];


const Section = () => {
    return (
        <div className='content-block'>
        {SectionData.map((SectionData) => (
            <div className="item" key={SectionData.Title}>
                <span>{SectionData.Title}</span>
                <img src={SectionData.Url} ></img>
            </div>
        ))}
      </div>
    );
  };

export default Section;