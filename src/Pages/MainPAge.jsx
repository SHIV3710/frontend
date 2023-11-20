import React, { useEffect, useState } from 'react'
import { Sort } from '../Components/Sort';
import styled from 'styled-components';
import { Display } from './Display';
import { SortbyUser } from './SortbyUser';
import { SortbyPriority } from './SortbyPriority';

export const MainPAge = () => {

    const [url,seturl] = useState("/");
    const [sort,setsort] = useState("");
 
    const handleurl = (newvalue) => {
        seturl(newvalue);
    }
    const handleprior = (newvalue) => {
        setsort(newvalue);
    }

    const [content,setcontent] = useState(null);

    useEffect(() => {
        if(url==="/"){
            setcontent(<SortbyUser sort={sort}/>);
        }
        else if(url==="/status"){
            setcontent(<Display sort={sort}/>);
        }
        else{
            setcontent(<SortbyPriority sort={sort}/>);
        }
        console.log(url,sort);
    },[url,sort])


    console.log(sort);

  return (
    <Main>
        <Upper>
            <Sort help={handleurl} cut={handleprior}/>
        </Upper>
        <Lower>
            {content}
        </Lower>
    </Main>
  )
}

const Main = styled.div`
    display: flex;
    flex-direction: column;

`
const Lower = styled.div`
margin-top:5vh;
display: flex;
justify-content: center;
align-items: center;
`
const Upper = styled.div`
position: absolute;

`