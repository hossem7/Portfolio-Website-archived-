import React from 'react';
import { DiNodejsSmall, DiReact, DiDatabase, DiPython } from 'react-icons/di';
import { GiElectricalResistance } from 'react-icons/gi';
import { BsTools } from 'react-icons/bs';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world. Check out all the skills I've picked over my journey.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End Dev</ListTitle>
          <ListParagraph>
            <h3>Experience with</h3>
            React.js <br/>
            Next.js <br/>
            ES6 <br/>
            CSS3 <br/>
            HTML5 <br/>
            Material-UI <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejsSmall size="3rem" />
        <ListContainer>
          <ListTitle>Back-End Dev</ListTitle>
          <ListParagraph>
            <h3>Experience with</h3>
            Node.js <br/>
            Express <br/>
            Commerce.js <br/>
            Stripe
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            <h3>Experience with</h3>
            MongoDB <br/>
            PostgresSQL <br/>
            MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Other Languages</ListTitle>
          <ListParagraph>
            <h3>Experience with</h3>
            Python<br/>
            Java <br/>
            C/C++ <br/>
            MATLAB <br/>
            Pearl
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <BsTools size="3rem" />
        <ListContainer>
          <ListTitle>Software/Tools</ListTitle>
          <ListParagraph>
            <h3>Experience with</h3>
            GIT <br/>
            REST <br/>
            Simulink <br/>
            Tableau <br/>
            MS-Office
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <GiElectricalResistance size="3rem" />
        <ListContainer>
          <ListTitle>Electrical</ListTitle>
          <ListParagraph>
            <h3>Experience with</h3>
            Oscilloscope <br/>
            Multimeter <br/>
            Function-Generator <br/>
            Network Analyzer <br/>
            PSpice <br/>
            Eagle
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
