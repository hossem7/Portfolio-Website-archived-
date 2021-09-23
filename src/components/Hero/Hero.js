import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey, I Am Mohammad<br />
        Welcome To My Website
      </SectionTitle>
      <SectionText>
        I am a 4th year Electrical Engineering and Management student at McMaster University with a passion of creating web applications.
        
        Read more about me by clicking the button below.
      </SectionText>
      <br/>
      <br/>
      <Button onClick={()=> window.open('https://drive.google.com/file/d/1FofNJ40IamIPBfQs1Vl1U7r2yOhP6-0N/view?usp=sharing')}>
        View Resume
      </Button>
      <br/>
      <br/>
      
      
    </LeftSection>
  </Section>
);

export default Hero;