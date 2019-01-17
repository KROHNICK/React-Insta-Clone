import React, { Component } from "react";
import IGCamera from "../../assets/camera-logo.svg";
import IGLogo from "../../assets/iglogo.png";
import Logout from "../Logout/Logout";
import styled from "styled-components";

const Header = styled.header`
  border-bottom: 1px solid #3333;
  height: 100px;
  line-height: 70px;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  padding-bottom: 10px;
`;

const LogoHeader = styled.div`
  height: 100%;
  margin: 15px;
  display: flex;
  align-items: center;
`;

const LogoCamera = styled.img`
  height: 50%;
  margin-bottom: 10px;
`;

const Border = styled.p`
  height: 100%;
  width: 50px;
  font-size: 2rem;
  margin: 0;
`;

const LogoBrand = styled.img`
  height: 50%;
`;

const Search = styled.div`
  padding-top: 20px;
`;

const SearchLogo = styled.i`
  position: absolute;
  display: inline;
  top: 47px;
  padding-left: 90px;
  color: grey;
`;

const SearchInput = styled.input`
  border: 1px solid lightgray;
  background-color: rgb(240, 240, 240);
  color: black;
  width: 275px;
  height: 30px;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
`;

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20%;
  padding-top: 15px;
`;

const Social = styled.div`
  width: 30%;
  font-size: 2rem;
`;

const SearchBar = props => {
  return (
    <Header>
      <LogoHeader>
        <LogoCamera alt="ig camera" src={IGCamera} />
        <Border>|</Border>
        <LogoBrand alt="ig logo" src={IGLogo} />
      </LogoHeader>
      <Search>
        <SearchLogo className="fas fa-search" />
        <SearchInput
          type="text"
          placeholder="Search"
          onKeyDown={props.searchPosts}
        />
      </Search>
      <SocialWrapper>
        <Social className="far fa-compass" />
        <Social className="far fa-heart" />
        <Social>
          <Logout />
        </Social>
      </SocialWrapper>
    </Header>
  );
};

export default SearchBar;
