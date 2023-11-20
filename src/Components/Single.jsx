import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Card } from './Card';
import { Navbar } from './Navbar';
import { FaCheckCircle } from "react-icons/fa";
import { MdNetworkWifi1Bar } from "react-icons/md";
import { MdNetworkWifi2Bar } from "react-icons/md";
import { MdNetworkWifi3Bar } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { RxBorderDotted } from "react-icons/rx";
import { PiFireSimpleFill } from "react-icons/pi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FcTodoList } from "react-icons/fc";
import { FaBarsProgress } from "react-icons/fa6";
import { MdOutlinePendingActions } from "react-icons/md";

export const Single = ({navname,flag,icon=<FaCheckCircle/>}) => {
  
  const [task,settask] = useState([]);
  const prior = ["No Priority","Urgent","High","Medium","Low"];
  const icons = [<RxBorderDotted/>,<PiFireSimpleFill style={{color:"orange"}}/>,<MdNetworkWifi3Bar/>,<MdNetworkWifi2Bar/>,<MdNetworkWifi1Bar/>];
  
  useEffect(()=>{
    getalltask(navname,flag);
  },[])

  const getalltask = async  (name,flag) => {
    try {
      let res = null;

      if(flag=="user"){
          try {
              res = await axios.get("https://backend-eight-mu.vercel.app/api/quick/getuser",{
              params:{
              Name:name,
            }
          });
          settask(res.data.tasks);
          } catch (error) {
            console.log(error);
          }
      }
      else if(flag=="priority"){
          try {

            const priority = parseInt(name);

            res = await axios.get("https://backend-eight-mu.vercel.app/api/quick/gettaskpriority",{
              params:{
                Priority:priority,
              }
            });

            settask(res.data.tasks);

          } catch (error) {
            console.log(error);
          }

      }
      else if(flag=="status"){
        try {
          res = await axios.get("https://backend-eight-mu.vercel.app/api/quick/gettask",{
            params:{
              Status:name,
            }
          });
          settask(res.data.tasks);

        } catch (error) {
          console.log(error);
        }
      }
      
    } catch (error) {
      console.error(error);
    }
  }
  
  const str = parseInt(navname);
  return (
    <Main>
        {flag=="priority"?
          <Navbar name={prior[str]} count = {task.length} icon={icons[str]} flag={flag}/>
          :
          <Navbar name={navname} count = {task.length} icon={icon} flag={flag}/>
        }
        {
          flag=="user"?<>
          {
            task.map((idx,index)=>{
              return <Card card={idx} flag="user"/>
            })
          }
          </>:<>
          {
            task.map((idx,index)=>{
              return <Card card={idx}/>
            })
          }
          </>
        }
    </Main>
  )
}

const Main = styled.div`
  width:auto;
  @media screen and (max-width: 1600px) {
        height: auto;
        width:auto;
        align-self: flex-start;
        justify-self: center;
  }
  @media screen and (max-width: 1300px) {
        align-self: center;
        width:auto;

  }
`
