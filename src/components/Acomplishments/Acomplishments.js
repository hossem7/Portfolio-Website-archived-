import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { FaGamepad } from 'react-icons/fa';
import { AiOutlineStock } from 'react-icons/ai';
import { FaCode } from 'react-icons/fa';
import { FaShareAlt } from 'react-icons/fa';


const Acomplishments = () => (
  <Section>
    <SectionTitle>Hobbies</SectionTitle>
    <Boxes>
      <Box>
        <FaCode />
        <BoxText>Coding</BoxText>
      </Box>
      <Box>
        <AiOutlineStock />
        <BoxText>Stocks</BoxText>
      </Box>
      <Box>
        <FaShareAlt />
        <BoxText>Social <br/> Media</BoxText>
      </Box>
      <Box>
        <FaGamepad />
        <BoxText>Gaming</BoxText>
      </Box>

    </Boxes>
    
  </Section>
);

export default Acomplishments;
