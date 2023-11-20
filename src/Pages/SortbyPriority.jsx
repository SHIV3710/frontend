import React, { useEffect, useState } from 'react';
import {styled} from 'styled-components';
import { VscSettings } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { RxBorderDotted } from "react-icons/rx";
import { PiFireSimpleFill } from "react-icons/pi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Dp from "../Resources/dp.jpeg"
import { MdNetworkWifi1Bar } from "react-icons/md";
import { MdNetworkWifi2Bar } from "react-icons/md";
import { MdNetworkWifi3Bar } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import { Navbar } from '../Components/Navbar';
import { FaRegCircle } from "react-icons/fa";
import { Card } from '../Components/Card';
import axios from 'axios';
import { Sort } from '../Components/Sort';
import { Single } from '../Components/Single';


export const SortbyPriority = ({sort}) => {

  const [Nopriority,setNoPriority] = useState([]);
  const [Urgent,setUrgent] = useState([]);
  const [High,setHigh] = useState([]);
  const [Medium,setMedium] = useState([]);
  const [Low,setLow] = useState([]);
  const [display,setdisplay] = useState(false);

  const handleDisplay = () => {
    setdisplay(!display);
  }
  
  const index = [
    {
        ind:0,
        desc:"No Priority",
    },
    {
        ind:1,
        desc:"Urgent",
    },
    {
        ind:2,
        desc:"High",
    },
    {
        ind:3,
        desc:"Medium",
    },
    {
        ind:4,
        desc:"Low",
    }

  ]

const Gettask = async (task) => {
    const val = task.ind;
    // console.log(task);
  try {
    const status = await axios.get("https://backend-eight-mu.vercel.app/api/quick/gettaskpriority", {
      params: {
       Priority: val,
      }
    });
    if(val==0)
        setNoPriority(status.data.tasks);
    else if(val==1){
        setUrgent(status.data.tasks);
    }
    else if(val==2){
        setHigh(status.data.tasks);
    }
    else if(val==3){
        setMedium(status.data.tasks);
    }
    else{
        setLow(status.data.tasks);
    }
  } catch (error) {
    console.error("Error:", error);
  }  
}
useEffect(() => {
  index.map((task, index) =>{
        Gettask(task);
  })
}, [])
  return (
    <Main>
        <Lower>
            <Single navname="0" flag="priority" sort={sort}></Single>
            <Single navname="1" flag="priority" sort={sort}></Single>
            <Single navname="2" flag="priority" sort={sort}></Single>
            <Single navname="3" flag="priority" sort={sort}></Single>
            <Single navname="4" flag="priority" sort={sort}></Single>
        </Lower>
    </Main>
  )
}

const Main = styled.div`
    height:100vh;
    width:95vw;
    display: flex;
    flex-direction: column;
    

`
const Upper = styled.div`
    
`
const Lower = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1300px) {
        display: grid;
        justify-content: space-evenly;
        align-items: center;
        grid-template-columns: repeat(2,1fr);
    }
    @media screen and (max-width: 900px) {
      display: flex;
        flex-direction:column;
        align-items: center;
    }
`
