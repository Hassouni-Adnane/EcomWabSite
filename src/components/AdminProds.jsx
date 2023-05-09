import React from 'react';
import styled from "styled-components";
import AdminProd from './AdminProd';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import { useState, useEffect } from 'react';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

`
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
const AddContainer = styled.div`
    margin: 5px;
    //width: 327px;
    //height: 350px;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: aqua;
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
  transform: scale(2);
  //opacity: 0;
  transition: all 0.5s ease-out;
  cursor: pointer;
  &:hover{
    transform: scale(3);
  }

`

const AdminProds = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost/BDW/TP/ecomBackEnd/sendingProductsToFrontEnd.php')
        .then(response => response.json())
        .then(data => {
            setIsLoading(false);
            setProducts(data);
        })
        .catch(error => {
            setIsLoading(false);
            setError(error);
        });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
  return (
    <Container>
       {products.map(product => (
        <AdminProd key={product.name} item={product}/>
      ))}
        <AddContainer>
            <Circle><Icon><IconButton><AddCircleOutlineOutlinedIcon /></IconButton></Icon></Circle>
        </AddContainer>
    </Container>
  )
}

export default AdminProds


