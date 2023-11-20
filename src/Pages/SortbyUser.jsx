import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Card } from '../Components/Card';
import { Sort } from '../Components/Sort';
import { Single } from '../Components/Single';

export const SortbyUser = () => {
  const [users, setUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const status = await axios.get("http://localhost:4000/api/quick/task");
      console.log(status);
      setUsers(status.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    if (users) {
      const sortedArray = [...users].sort((p1, p2) => (p1> p2) ? 1 : (p1 < p2) ? -1 : 0);
      setSortedUsers(sortedArray);
    }
  }, [users]);

  console.log(sortedUsers);
  return (
    <Main>
      <Lower>
            
            {
              sortedUsers.map((user,index)=>{
                console.log(user);
                return <Single navname={user} flag="user"/>
              })
            }
      </Lower>
    </Main>
  );
};

const Main = styled.div`
    height:100vh;
    width:100vw;
    display: flex;
    flex-direction: column;

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
        /* justify-content: space-around; */
    }
`