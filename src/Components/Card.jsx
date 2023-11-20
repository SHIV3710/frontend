import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { GiPlainCircle } from "react-icons/gi";
import { Avatar } from './Avatar';
import axios from 'axios';
import { BsFillCircleFill } from "react-icons/bs";

export const Card = ({card,flag}) => {
  // console.log(card);  
  const [avatar, setAvatar] = useState("Shiv Kumar");
  const [avai,setavai] = useState(false);
  const findavatar = async () => {
    try {
       const status = await axios.get("https://backend-eight-mu.vercel.app/api/quick/getuser",{
        params:{
          Id:card.UserID,
        }
       });
      //  console.log(status); 
      setAvatar(status.data.name);
      setavai(status.data.av);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    findavatar();
  },[])

  return (
    <Main>
        <div className="cam">{card.ID}</div>
        <div className="desc">{card.Title}</div>
        {
          flag=="user"?<></>:<div className="avatar">{avatar !== null && <Avatar name={avatar} />} </div>
        }
        <div className="icon">{card.icon}<div className="feature"><GiPlainCircle/><p>Feature Request</p></div></div>  
        {flag=="user"?<></>:<BsFillCircleFill className="status"  style={{color:avai ?"yellow":"grey",border:"2px solid black", borderRadius:"50%"}}/>   }
        
    </Main>
  )
}

const Main = styled.div`
    display: grid;
    grid-template-columns: repeat(20,1fr);
    grid-template-rows: repeat(3,1fr);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    margin:1vh;
    font-size:8px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    border-radius:5px;
    .cam{
      grid-row:1/2;
      grid-column:2/18;
      display: flex;
      align-items: center;
      color:rgba(0, 0, 0, 0.7);
    }
    .desc{
      grid-row:2/3;
      grid-column:2/17;
      display: flex;
      align-items: center;
      font-weight:bold;
    }
    .avatar{
      grid-row:1/2;
      grid-column:18/19;
      display: flex;
      align-items: center;
      margin-top:10px;
    }
    .icon{
      grid-row:3/4;
      grid-column:2/10;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .feature{
      width:80%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color:rgba(0, 0, 0, 0.4);
    }
    .status{
      grid-row:1/1;
      grid-column: 18/19;
      align-self: flex-end;
      justify-self: end;
      color:gray;
    }
`

