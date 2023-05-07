import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import logo from '../images/Ezan\ Shop.png';

const Container = styled.div`
    padding: 0;
    box-shadow: 0px 3px 5px ;

`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    
`
const Left = styled.div`
    flex: 1;
    display: flex;
    margin-top: 2%;
    margin-left: 5px;
    height: 50%;
    
`
const Language = styled.div`
    font-style: 14px;
    cursor: pointer;
    object-fit: contain;
    height: 50%;

`
const SearchBar = styled.div`
    border: solid 0.5px lightgrey;
    display: flex;
    margin-left: 25px;
    padding: 0px 5px;
    align-items: center;
    height: 50%;
    

`
const Input = styled.input`
    border: none;

    
`
const Logo = styled.img`
    flex: 1;
    aspect-ratio: 10/2;
    margin-bottom: 0;
    object-fit: contain;
`
const Right = styled.div`
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: flex-end;
    margin-top: 2%;
    height: 50%;
`
const MenuItem = styled.div`
    font-style: 14px;
    cursor: pointer;
    padding: 0px 15px;
    height: 50%;
`
const Navbar = ({setIsModalRegisterVisible, setIsModalVisibleLogin}) => {
    const openModalRegister = () => {
        setIsModalRegisterVisible(true);
      };
    const openModalLogin = () => {
        setIsModalVisibleLogin(true);
      };
  return (
    <Container>
        <Wrapper>

            <Left>
                <Language>EN</Language>
                <SearchBar>
                    <Input/>
                    <SearchIcon />
                </SearchBar>
            </Left>

            <Logo src={logo}/>
            
            <Right>
                <MenuItem><button onClick={openModalRegister}>Register</button></MenuItem>
                <MenuItem><button onClick={openModalLogin}>Login</button></MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlinedIcon/>
                </Badge>
                </MenuItem>
            </Right>

        </Wrapper>
    </Container>
  )
}

export default Navbar
