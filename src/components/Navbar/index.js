import React, {useEffect, useState} from 'react';
// import {FaBars } from 'react-icons';
import {Nav,NavButton,NavButtonLink,NavItem,NavLink,NavLogo,NavMenu,NavbarContainer,StyledBurger,SocialMedia,SocialMediaIcon, NavLinkS} from './NavbarElements';
import { Container } from 'reactstrap';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import reactDom from 'react-dom';

const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

// import { baseUrl } from '../../shared/baseUrl';
const Burger = ({ open, toggle }) => {
    // console.log(open);   
    return (
      <div className="nav-burger-button" style={{width: "2.121rem" }}>
      <StyledBurger open={open} onClick={() => toggle(open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      </div>
    )
  }

  const useViewport = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
  
    React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    // Return the width so we can use it in our components
    return { width };
  }


const Navbar = ({ open, toggle}) => {
    
    function closeSidebar(open) {
        if(open===true){
            toggle(open);
        }
    }

    const { width } = useViewport();


    const [scrollService, setScroll] = useState(0);

    


    useEffect(() => {
      document.addEventListener("scrollService", () => {
        const scrollCheck = window.scrollY > 100 && window.scrollY < 200
        if (scrollCheck !== scrollService) {
          setScroll(scrollCheck)
        }
      })
    })


    return (
               <Nav>
                    <NavbarContainer>
                        <NavLogo  to={process.env.PUBLIC_URL+"/#hero"}  onClick={() => closeSidebar(open)} scroll={el => scrollWithOffset(el)}>
                        {/* <img src={baseUrl+'assets/images/logo.png'} className='nav-logo' alt="ABC Power" /> */}
                        <div>Neel Panji</div>
                        </NavLogo>
                        {/* <SocialMedia>
                            <a href="#"><SocialMediaIcon src="/assets/images/logos/instagram.png"/></a>
                            <a href="#"><SocialMediaIcon src="/assets/images/logos/linkedin-3-48.png"/></a>
                            <a href="#"><SocialMediaIcon src="/assets/images/logos/facebook-3-48.png"/></a>
                            <a href="#"><SocialMediaIcon src="/assets/images/logos/messenger (1).png"/></a>
                            <a href="#"><SocialMediaIcon src="/assets/images/logos/email (1).png"/></a>
                        </SocialMedia> */}
                        <NavMenu>
                            <NavItem>
                                <NavLink to="/about#top"
                                activeClass="active"
                                >About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/#services" 
                                scroll={el => scrollWithOffset(el)}
                                >Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/#clients" 
                                scroll={el => scrollWithOffset(el)}
                                >Clients</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/contact#top"
                                activeClass="active"
                                >Contact</NavLink>
                            </NavItem>
                        </NavMenu>
                        <Burger open={open} toggle={toggle}/>
                    </NavbarContainer>

                </Nav>

    )
}

export default Navbar;


