import React from 'react'
import styled from 'styled-components'
import { FiPlus } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { Avatar } from './Avatar';

export const Navbar = ({name,count,icon,flag,avai}) => {
  return (
    <Main>
        {
          flag=="user"?<div className="circle"><Avatar name={name} avai={avai}/></div>:<div className="circle">{icon}</div>
        }
        <div className="mid">
        <span className="name">{name}</span>
        <div className="count">{count}</div>
        </div>
        <FiPlus className='plus'/>
        <BsThreeDots className='dot'/>

    </Main>
  )
}

const Main = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(20,1fr);
    grid-template-rows: repeat(3,1fr);
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    .circle{
      grid-row:2/3;
      grid-column:2/3;
      width:100%;
      color:rgb(0,0,0,0.2);
      display: grid;
      align-items: center;
    }
    .mid{
      grid-row:2/3;
      grid-column:4/16;
      display: flex;
      align-items: center;
      .name{
        margin-right:10px;
        font-size:10px;
        font-weight:bold;
      }
      justify-content: left;
      
    }
    .count{
      grid-row:2/3;
      grid-column:auto;
      color:rgb(0,0,0,0.4);
      display: flex;
      align-items: center;
      font-size:12px;
    }
    .plus{
      grid-row:2/3;
      grid-column:17/18;
      display: flex;
      align-items: center;
    }
    .dot{
      grid-row:2/3;
      grid-column:19/20; 
      display: flex;
      align-items: center; 
    }

`
