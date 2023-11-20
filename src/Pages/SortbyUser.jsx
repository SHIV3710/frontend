import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Card } from '../Components/Card';
import { Sort } from '../Components/Sort';
import { Single } from '../Components/Single';

// https://backend-eight-mu.vercel.app/api/quick/task
// https://backend-eight-peach.vercel.app/
export const SortbyUser = ({sort}) => {
  const [users, setUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const status = await axios.get("https://backend-eight-peach.vercel.app/api/quick/task");
      console.log(status);
      setUsers(status.data.result);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  if(users){
    console.log(users);
  }

  useEffect(() => {
    if (users) {
      const sortedArray = [...users].sort((p1, p2) => (p1[0] > p2[0]) ? 1 : (p1[0] < p2[0]) ? -1 : 0);
      setSortedUsers(sortedArray);
    }
  }, [users]);
  return (
    <Main>
      <Lower>
            
            {sortedUsers?
              sortedUsers.map((user,index)=>{
                return <Single navname={user.Name} flag="user" sort={sort} avai={user.Available}/>
              }):<></>
            }
      </Lower>
    </Main>
  );
};

const Main = styled.div`
    height:100vh;
    width:95vw;
    display: flex;
    flex-direction: column;
    align-items: center;

`
const Upper = styled.div`   
  
`
const Lower = styled.div`
   
    display: flex;
    justify-content: center;
    justify-content: space-around;
    @media screen and (max-width: 1300px) {
        display: grid;
        justify-content: space-evenly;
        align-items: center;
        grid-template-columns: repeat(2,1fr);
    }
    @media screen and (max-width: 900px) {
      display: flex;
        flex-direction:column;
  }
    @media screen and (max-width: 500px) {
      display: flex;
        flex-direction:column;
    }
`