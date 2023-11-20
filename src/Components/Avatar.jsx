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
    <Main>
        <div className="avatar" style={{backgroundColor:randomColor}}>
        {a+b} 
        </div>
        <div className="status">
        <BsFillCircleFill/>
        </div>
    </Main>
  )
}

const Main = styled.div`
    height:100%;
    width:100%;
    display: flex;
    .avatar{
      height:30px;
      width:30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      color:black;
    }
    .status{
      height:30px;
      width:30px;
      position: absolute;
      display: flex;
      justify-content: end;
      svg{
        font-size:7px;
        align-self: flex-end;
        justify-self: end;
        border: 2px solid white;
        color:black;
        border-radius: 50%;
      }
      
    }
`
