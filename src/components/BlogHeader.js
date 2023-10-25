import React from 'react';
import styled from 'styled-components';

const BlogHeader = () => {
    return(
    <HeaderStyle>
      <div>Project 02 - Blog</div>
    </HeaderStyle>);
}

export default BlogHeader;

const HeaderStyle = styled.nav`
  padding: 15px 0px 15px 25px;
  background-color: #333333;
  color:#FBFCFC;
  font-size: 1.25rem;
  font-family: 'DM Sans', sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    padding: 0.5em;
    width:20px;
  }
`