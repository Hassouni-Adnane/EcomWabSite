import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import { useState } from 'react';
import { useEffect } from 'react';

const Circle = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  //Whene i added the position absolute property the images wnaped into place!!!!!! must invatigate
  //position: absolute;
  //z-index: 3;
  //: flex;
  //opacity: 0;
  border-radius: 50%;
  background-color: white;
  width: 200px;
  height: 200px;
  //position: absolute;
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //z-index: 2;
  background-color: white;
  border-radius: 50%;
  padding: 10px;
  margin: 5px;
  opacity: 0;
  transition: all 0.5s ease-out;
  cursor: pointer;
  &:hover{
    transform: scale(1.2);
  }

`

const Container = styled.div`
    margin: 5px;
    position: relative;
    flex: 1;
    min-width: 280px;
    height: 350px;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: aqua;
    &:hover ${Circle}{
    opacity: 0.8;
    //transform: scale(1.2) ;
    //transition: all 0.2s ease-in;
  }
  &:hover ${Icon}{
    opacity: 1;
    //transform: scale(1.2) ;
    //transition: all 0.2s ease-in;
  }
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: fill;
    overflow: hidden;
`

const Info = styled.div`
  //width: 327px;
  //height: 350px;
  align-items: center;
  justify-content: center;
  //Whene i added the position absolute property the images wnaped into place!!!!!! must invatigate
  position: absolute;
  //display: flex;
  //opacity: 0;
  //background-color: aqua;
  
  
`





const AdminProd = ({item}) => {
       // const [imageUrl, setImageUrl] = useState('');
    
  return (
    <Container>
        {/*<Image src = {imageUrl} />*/}
          <Info>
            <p>name: {item.name}</p>
            <p>categorie: {item.cat}</p>
            <p>prix: {item.price}</p>
            <Circle>
                <Icon><IconButton><AddCircleOutlineOutlinedIcon /></IconButton></Icon>
                <Icon><IconButton><RemoveCircleOutlineOutlinedIcon/></IconButton></Icon>
                <Icon><IconButton><TipsAndUpdatesRoundedIcon /></IconButton></Icon>
            </Circle>
          </Info>
    </Container>
  )
}

export default AdminProd
