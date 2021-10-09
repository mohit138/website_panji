import React from 'react';
import {
    SidebarContainer,
    SidebarLink,
    SidebarMenu,
    SidebarWrapper,
    SocialMedia,
    SocialMediaIcon
} from './SidebarElements';
import { useState, useEffect } from "react";

const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

const Sidebar = ({open,toggle}) => {


    // below arrangements for closing sidebar menu, if screen is rateted in certain devices
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
      });
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
          
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    
    if(windowSize.width >=992){
        // open=false;
        if(open===true){
            toggle(open);
        }
    }

    return (
        <SidebarContainer open={open} onClick={() => toggle(open)}>
            <SidebarWrapper>
                <SidebarMenu>
                    
                    <SidebarLink to="/about#top" 
                    scroll={el => scrollWithOffset(el)}
                    onClick={toggle}
                    >About</SidebarLink>
                    <SidebarLink to="/#services" 
                    scroll={el => scrollWithOffset(el)}
                    onClick={toggle}
                    >Services</SidebarLink>
                    <SidebarLink to="/#clients" 
                    scroll={el => scrollWithOffset(el)}
                    onClick={toggle}
                    >Clients</SidebarLink>
                    <SidebarLink to="/contact#top" 
                    scroll={el => scrollWithOffset(el)}
                    onClick={toggle}
                    >Contact</SidebarLink>
                </SidebarMenu>

                <SocialMedia>
                    <a href="#"><SocialMediaIcon src="/assets/images/logos/instagram.png"/></a>
                    <a href="#"><SocialMediaIcon src="/assets/images/logos/linkedin-3-48.png"/></a>
                    <a href="#"><SocialMediaIcon src="/assets/images/logos/facebook-3-48.png"/></a>
                    <a href="#"><SocialMediaIcon src="/assets/images/logos/messenger (1).png"/></a>
                    <a href="#"><SocialMediaIcon src="/assets/images/logos/email (1).png"/></a>
                </SocialMedia>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
