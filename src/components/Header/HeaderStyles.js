import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';
import {FaBars} from 'react-icons';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  padding-top: 2rem;
  margin-left: 20px;
  margin-right: 20px;
  top: 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    justify-content: center;
    flex-direction: column;
    
  }
`;

export const Span = styled.span`
  font-size: 2rem;
`;

export const Anchor = styled.a`
  display: none;
  transition: 0.4s ease;
  &:hover {
    background-color: #212d45s;
    opacity: 1;
    cursor: pointer;
    border-radius: 5px;
    transform: scale(1.2);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: row;
  }
`;
export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    justify-content: center;
    padding-right: 15px;
    flex-direction: row;
    align-content: top;
    align-items: top;
  }
`;
export const Div2 = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 100%;
    justify-content: center;
    
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;


// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    background-color: #02785c;
    opacity: 1;
    cursor: pointer;
    border-radius: 5px;
    padding: 1rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
  
`