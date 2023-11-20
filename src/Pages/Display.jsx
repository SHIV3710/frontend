import React, { useEffect, useState } from 'react';
import {styled} from 'styled-components';
import { VscSettings } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { RxBorderDotted } from "react-icons/rx";
import { BsCircleHalf } from "react-icons/bs";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Dp from "../Resources/dp.jpeg"
import { Navbar } from '../Components/Navbar';
import { FaRegCircle } from "react-icons/fa";
import { Card } from '../Components/Card';
import axios from 'axios';
import { Single } from '../Components/Single';
import { Sort } from '../Components/Sort';
import { FcTodoList } from "react-icons/fc";
import { FaBarsProgress } from "react-icons/fa6";
import { MdOutlinePendingActions } from "react-icons/md";



export const Display = ({sort}) => {
    const [status,setstatus] = useState([]);
    const iconstatus = [<FcTodoList/>,<FaBarsProgress/>,<MdOutlinePendingActions/>];


    const getallstatus = async () => {
        try {

            const res = await axios.get("http://localhost:4000/api/quick/getallstatus");
            console.log(res);
            setstatus(res.data.result);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getallstatus();
       
    },[]);

    useEffect(() => {
        if (status.length > 0) {
            console.log("Green", status);
        }
    }, [status]);

    const[page,setpage] = useState("Display");

    const handleChild = (data) => 
    {
        setpage(data);
    }
    console.log(sort);
    
    return (
        <Main>
            <Lower>
            {
                status.map((data,index)=>{
                    return <Single navname={data} flag="status" icon={iconstatus[index]} sort={sort}/>;
                })
            }
            </Lower>
        </Main>
    )
}

const Main = styled.div`
    height:100vh;
    width:95vw;
    display: flex;
    flex-direction: column;
    align-self:center;
    align-items:center;

`
const Upper = styled.div`
    
`
const Lower = styled.div`
    display: flex;
    
    @media screen and (max-width: 1600px) {
        display: grid;
        justify-content: space-evenly;
        align-items: center;
        grid-template-columns: repeat(3,1fr);
    }
    @media screen and (max-width: 900px) {
      display: flex;
        flex-direction:column;
  }
    @media screen and (max-width: 500px) {
      display: flex;
        flex-direction:column;
        /* justify-content: space-around; */
    }
`
