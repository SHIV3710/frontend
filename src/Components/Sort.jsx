import React, { useEffect, useState } from 'react'
import { VscSettings } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { RxBorderDotted } from "react-icons/rx";
import { BsCircleHalf } from "react-icons/bs";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';

export const Sort = ({help,cut}) => {
    const [display,setdisplay] = useState(true);
    const [status,setstatus] = useState(false);
    const [priority,setpriority] = useState(false);
    const [url,seturl] = useState("/");

    const handleDisplay = () => {
        setdisplay(!display);
        setpriority(false);
        setstatus(false);
    }

    const [st,setst] = useState(false);
    const [pr,setpr] = useState(false);
    const [sortpr,setsortpr] = useState(false);
    const [sortst,setsortst] = useState(false);

    useEffect(()=>{
        handleDisplay();
    },[]);


    useEffect(()=>{
        if(!st&&!pr){
            help("/");
        }
        if(st&&!pr){
            help("/status");
        }
        if(!st&&pr){
            help("/priority");
        }
    },[st,pr])

    useEffect(()=>{
        if(sortpr && !sortst){
            cut("priority");
        }
        if(!sortpr && sortst){
            cut("status");
        }
    },[sortpr,sortst])
    const handlestatus = () => {
        setstatus(!status);
        if(priority){
            setpriority(!priority);
        }
    }
    const handlepriority = () => {
        setpriority(!priority);
        if(status){
            setstatus(!status);
        }
    }
    const handlest = () => {
        setst(true);
        if(pr){
            setpr(!pr);
        }
        setsortpr(true);
        if(sortst){
            setsortst(false);
        }
    }
    const handlepr = () => {
        setpr(true);
        if(st){
            setst(!st);
        }
        setsortpr(true);
        if(sortst){
            setsortst(false);
        }
    }
    const handleur = () => {
        setpr(false);
        setst(false);
        setsortpr(true);
        if(sortst){
            setsortst(false);
        }
    }
    const handlesortpr = () => {
        setsortpr(true);
        if(sortst){
            setsortst(false);
        }
    }
    const handlesorttitle = () => {
        setsortst(true);
        if(sortpr){
            setsortpr   (false);
        }
    }
    
  return (
    <Main>
            <Dis>
                <VscSettings/> Display <IoIosArrowDown onClick = {handleDisplay}/>
            </Dis>

            {display?<GroupOrder>
                <div className="Group">
                    <div className="name">Grouping</div>
                    <div className="option"onClick={handlestatus}>Status <IoIosArrowDown className='icon'/></div>
                </div>
                <div className="Order">
                    <div className="name">Ordering</div>
                    <div className="option" onClick={handlepriority}>Priority <IoIosArrowDown className='icon'/></div>
                </div>
            </GroupOrder>:<></>}

            {status? <Sta>
                    <div className="stat" onClick={handlest}>Status</div>
                    <div className="stat" onClick={handlepr}>Priority</div>
                    <div className="stat" onClick={handleur}>User</div>
            </Sta>:<></>

            }
            {priority? <Sta>
                    <div className="stat" onClick={handlesortpr}>Priority</div>
                    <div className="stat" onClick={handlesorttitle}>Title</div>
                    
            </Sta>:<></>

            }
    </Main>
  )
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    height:150px;
    margin:10px;
    max-width:100vw;
    user-select:none;

`
const Dis = styled.div`
    width:100px;
    height:25px;
    margin-bottom:10px;
    @media screen and (max-width: 1300px) {
        grid-column:2/10;
    }
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-radius:2px;
    font-size:10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    cursor: pointer;

`
const GroupOrder = styled.div`
    z-index:999;
    font-size:12px;
    width:200px;
    margin-bottom:10px;
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
    border-radius:5px;
    display: grid;
    grid-template-columns: repeat(8,1fr);
    grid-template-rows: repeat(10,1fr);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
   
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
        border-radius: 1px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        
        cursor: pointer;
        
    }
`
const Sta = styled.div`
    height:auto;
    width:200px;
    z-index:999;
    font-size:12px;
    border-radius:5px;
    display:flex;
    justify-content: space-evenly;
    align-items: flex-end;
    .stat{
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
        background-color: white;
        border:2px solid rgba(0, 0, 0, 0.2);
        border-radius: 1px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        
        cursor: pointer;
    }
`