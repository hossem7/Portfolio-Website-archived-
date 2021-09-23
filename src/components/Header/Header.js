import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiReact } from 'react-icons/di';
import {FaBars} from 'react-icons/fa';
import { SectionDivider } from '../../styles/GlobalComponents';


import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons, Anchor } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", alignContent: "center", color: 'white'}}>
          <DiReact size="3rem"/> <Span>My Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3 marginBottom="20px">
      <SocialIcons href="https://github.com/hossem7" target="_blank">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/m-hossein/" target="_blank">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
    </Div3>
    
  </Container>
  
);

export default Header;
