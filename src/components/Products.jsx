import React from 'react';
import {prod} from './data';
import Product from './Product';
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

`

const Products = () => {
  return (
    <Container>
      {prod.map((item)=> (
      <Product item = {item} key={item.id}/>
      ))}

    </Container>
  )
}

export default Products


