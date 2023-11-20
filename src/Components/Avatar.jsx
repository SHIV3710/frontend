import React, { useState } from 'react'
import styled from 'styled-components'
import { BsFillCircleFill } from "react-icons/bs";

export const Avatar = ({name}) => {
  let a = "";
  let b = "";
  const len = name.length;
  const[flag,setflag] = useState(true);
  a=name[0];
  for (let i = 0; i < len; i++) {
    if(name[i]==' '){
      b=name[i+1];
      break;
    }
  } 

  const randomColor = "#" + Math. floor(Math. random() * 2000);
  return (
    <Main style={{backgroundColor:randomColor}}>
        {a+b}
    </Main>
  )
}

const Main = styled.div`
    height:25px;
    width:25px;
    font-family: "Helvetica Neue",Helvetica;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size:12px;
    font-weight: bold;
    color:black;
`
