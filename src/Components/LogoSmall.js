import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const SmallLogo = styled.div`
  align-self: center;
  h3 {
    margin-left: 50px;
    font-size: 15px;
  }
  span {
    text-align: center;
    display: block;
    color: var(--accent-color);
    letter-spacing: 6px;
  }
  :hover {
    h3 {
      transition: all 300ms 500ms;
      color: var(--accent-color);
    }
    span {
      transition: all 300ms 500ms;
      color: var(--main-color);
    }
  }
`;

const LogoSmall = () => {
  return (
    <SmallLogo>
      <Link to="/dashboard">
        <h3>
          To Do <span id="list">List</span>
        </h3>
      </Link>
    </SmallLogo>
  );
};

export default LogoSmall;
