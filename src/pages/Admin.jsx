import React from 'react'
import styled from 'styled-components'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import IconButton from '@mui/material/IconButton';
import logo from '../images/Ezan\ Shop.png';
import Products from '../components/Products';
import AdminProds from '../components/AdminProds';



const Wrapper = styled.div`
    /*display: flex;
    justify-content: space-between;
    align-items: center;
    object-fit: cover;
    overflow: hidden;
    height: 80px;*/
`
const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    //height: 60px;
    //background-color: lightblue;
    align-items: center;
    object-fit: cover;
    overflow: hidden;
    padding: 0 10px;
    box-shadow: 0px 3px 5px ;
`

const HLeft = styled.div`
    flex: 1;
    height: 50%;
`

const HRight = styled.div`
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: flex-end;
    //margin-top: 2%;
    //height: 50%;
    

`

const Logo = styled.img`
    flex: 1;
    aspect-ratio: 12/2;
    margin-bottom: 0;
    object-fit: contain;
`

const Manage = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    background-color: #a31c1c34;
`

const ManageProd = styled.div`
    
`

const ManageCli = styled.div`
    
`

const Admin = () => {
  return (
    <Wrapper>
        <Header>
            <HLeft>
                <IconButton>
                    <HomeOutlinedIcon />
                </IconButton>
            </HLeft>
            <Logo src={logo} />
            <HRight>
                <h2>Administration</h2>
            </HRight>
        </Header>
        <Manage>
            <ManageProd>
                <AdminProds />
            </ManageProd>
        </Manage>
        <Manage>
            <ManageCli>

            </ManageCli>
        </Manage>
    </Wrapper>
  )
}

export default Admin
