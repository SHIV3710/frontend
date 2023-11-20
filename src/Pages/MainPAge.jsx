import React, { useState } from 'react'
import { Sort } from '../Components/Sort';
import styled from 'styled-components';
import { Display } from './Display';
import { SortbyUser } from './SortbyUser';
import { SortbyPriority } from './SortbyPriority';

export const MainPAge = () => {

    const [url,seturl] = useState("/");

    const handleurl = (newvalue) => {
        seturl(newvalue);
    }

    let content;

    if(url==="/"){
        content = <SortbyUser/>
    }
    else if(url==="/status"){
        content = <Display/>
    }
    else{
        content = <SortbyPriority/>
    }

  return (
    <Main>
        <Upper>
            <Sort help={handleurl}/>
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
    /* justify-content: space-around; */

`
const Lower = styled.div`
/* width:auto;  */

`
const Upper = styled.div`
width:auto; 

`