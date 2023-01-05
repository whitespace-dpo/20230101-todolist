
import React from 'react';
import styles from './Button.module.css';
// import styled from "styled-components";

// const Button = styled.button`
//   /* Color */
//   color: white;
//   background: #008b33;

//   /*Display & box-model */
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #008b33;
//   border-radius: 5px;
//   box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
//   width: 100%;
//   /* Text */
//   font: inherit;

//   /* Other */
//   cursor: pointer;

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #00742a;
//     border-color: #00742a;
//     box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
//   }

//   @media (min-width: 768px){
//     width: auto;
//   }
// `;
const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
