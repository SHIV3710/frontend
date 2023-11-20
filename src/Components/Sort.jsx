import React, { useEffect, useState } from 'react'
import { VscSettings } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { RxBorderDotted } from "react-icons/rx";
import { BsCircleHalf } from "react-icons/bs";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';

export const Sort = ({help}) => {
    const [display,setdisplay] = useState(true);
    const [status,setstatus] = useState(true);
    const [priority,setpriority] = useState(true);
    const [url,seturl] = useState("/");
    const navigate = useNavigate();
    const handleDisplay = async () => {
        setdisplay(prev=>!prev);
    }
    useEffect(()=>{
        handleDisplay();
    },[]);


    useEffect(()=>{
        if(status && priority){
            seturl("/");
        }
        else if(status && !priority){
            seturl("/priority");  
        }
        else if(priority && !status){
            seturl("/status");
        }

        return help(url);
        
    },[status,priority])
    const handlestatus = () => {
        setstatus(!status);
    }
    const handlepriority = () => {
        setstatus(!priority);
    }
    console.log(url);
  return (
    <Main>
            <Dis>
                <VscSettings/> Display <IoIosArrowDown onClick = {handleDisplay}/>
            </Dis>
            {display?<GroupOrder>
                <div className="Group">
                    <div className="name">Grouping</div>
                    <div className="option" onClick={handlestatus} style={{ backgroundColor: status ? "white" : "cyan" }}>Status <IoIosArrowDown className='icon'/></div>
                </div>
                <div className="Order">
                    <div className="name">Ordering</div>
                    <div className="option" onClick={handlepriority} style={{ backgroundColor: priority ? "white" : "cyan" }}>Priority <IoIosArrowDown className='icon'/></div>
                </div>
            </GroupOrder>:<></>}
    </Main>
  )
}

const Main = styled.div`
    display: grid;
    grid-template-columns:repeat(50,1fr);
    grid-template-rows:repeat(10,1fr);
    max-height:20px;
    margin:10px;
    max-width:100vw;

`
const Dis = styled.div`
    grid-row: 2/3;
    grid-column: 2/7;
    @media screen and (max-width: 1300px) {
        grid-column:2/10;
    }
    @media screen and (max-width: 900px) {
      
    } 
    @media screen and (max-width: 500px) {
      
    }
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-radius:2px;
    font-size:10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    cursor: pointer;

`
const GroupOrder = styled.div`
    z-index:999;
    grid-row:5/6;
    grid-column: 2/12;
    font-size:12px;
    @media screen and (max-width: 1300px) {
        grid-column:2/12;
    }
    @media screen and (max-width: 900px) {
      font-size:10px;
      grid-column:2/16;

    } 
    @media screen and (max-width: 500px) {
        grid-column:2/16;
    }
    background-color: #ffffff;
    border-radius:10px;
    display: grid;
    grid-template-columns: repeat(8,1fr);
    grid-template-rows: repeat(10,1fr);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
   
    .Group{
        grid-row:2/5;
        grid-column:2/8;
        display: flex;
        justify-content: space-between;

    }
    .Order{
        grid-row:7/10;
        grid-column:2/8;  
        display: flex;
        justify-content: space-between;
    }
    .name{
        color:gray;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        display: flex;
        align-items: center;
        @media screen and (max-width: 500px) {
            font-size:7px;
            
        }

    }
    a{
        text-decoration: none;
        color:black;

    }
    .option{
        height:15px;
        width:50px;
        font-size:10px;
        @media screen and (max-width: 500px) {
            font-size:7px;
            height:10px;
            width:30px;
        }
        display: flex;
        align-items: center;
        justify-content: space-around;
        border:2px solid rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        
        cursor: pointer;
        
    }
`
