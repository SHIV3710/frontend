import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { GiPlainCircle } from "react-icons/gi";
import { Avatar } from './Avatar';
import axios from 'axios';
import { BsFillCircleFill } from "react-icons/bs";
import { MdNetworkWifi1Bar } from "react-icons/md";
import { MdNetworkWifi2Bar } from "react-icons/md";
import { MdNetworkWifi3Bar } from "react-icons/md";
import { RxBorderDotted } from "react-icons/rx";
import { PiFireSimpleFill } from "react-icons/pi";


export const Card = ({card,flag}) => { 
  const [avatar, setAvatar] = useState("Shiv Kumar");
  const icons = [<RxBorderDotted style={{fontSize:"15px"}}/>,<PiFireSimpleFill style={{color:"orange" ,fontSize:"15px"}}/>,<MdNetworkWifi3Bar style={{fontSize:"15px"}}/>,<MdNetworkWifi2Bar style={{fontSize:"15px"}}/>,<MdNetworkWifi1Bar style={{fontSize:"15px"}}/>];
  const [avai,setavai] = useState(false);
  const findavatar = async () => {
    try {
       const status = await axios.get("https://backend-eight-mu.vercel.app/api/quick/getuser",{
        params:{
          Id:card.UserID,
        }
       });
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
        <div className="icon"><div className="prior">{icons[card.Priority]}</div><div className="feature"><GiPlainCircle/><p>Feature Request</p></div></div>  
        
    </Main>
  )
}

const Main = styled.div`
    display: grid;
    grid-template-columns: repeat(20,1fr);
    grid-template-rows: repeat(3,1fr);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    margin:1vh;
    font-size:10px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    border-radius:2px;
    width:auto;
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
    }
    .avatar{
      grid-row:1/2;
      grid-column:19/20;
      display: flex;
      align-items: center;
      margin-top:10px;
    }
    .icon{
      grid-row:3/4;
      grid-column:2/10;
      display: flex;
      width: 9vw;
      align-items: center;
      @media screen and (max-width:1300px){
        min-width:12vw;
      }
    }
    .feature{
      min-width:100px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color:rgba(0, 0, 0, 0.4);
      @media screen and (max-width:1300px){
        /* min-width:13vw; */
      }
    }
    .status{
      grid-row:1/1;
      grid-column: 18/19;
      align-self: flex-end;
      justify-self: end;
      color:gray;
    }
`

