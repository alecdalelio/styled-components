import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarWrapper,
  SideBtnWrap,
  SidebarRoute,
  SidebarLink,
} from "./SidebarElements";
const Sidebar = () => {
  return (
    <div>
      <SidebarContainer>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about">About</SidebarLink>
            <SidebarLink to="discover">Discover</SidebarLink>
            <SidebarLink to="services">Services</SidebarLink>
            <SidebarLink to="signup">Sign Up</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;
