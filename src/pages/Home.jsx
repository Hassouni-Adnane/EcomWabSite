import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements';
import Slider from '../components/Slider';
import Products from '../components/Products';
import styled from 'styled-components';
import Register from './Register';
import { useState } from 'react';
import Login from './Login';

const ModalBackground = styled.div`
  display: ${props => (props.visibleRegister ? 'block' : props.visibleLogin ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  //transition: all 0.5s cubic-bezier();
`;


const Home = () => {
  const [isModalRegisterVisible, setIsModalRegisterVisible] = useState(false);
  const [isModalVisibleLogin, setIsModalVisibleLogin] = useState(false);
  

  return (
    <div>
      <Announcements />
      <Navbar setIsModalRegisterVisible={setIsModalRegisterVisible} setIsModalVisibleLogin={setIsModalVisibleLogin}/>
      <Slider />
      <Products />
      <ModalBackground visibleRegister={isModalRegisterVisible}>
          <Register setIsModalRegisterVisible={setIsModalRegisterVisible} setIsModalVisibleLogin={setIsModalVisibleLogin}/>
      </ModalBackground>
      <ModalBackground  visibleLogin={isModalVisibleLogin}>
        <Login setIsModalRegisterVisible={setIsModalRegisterVisible} setIsModalVisibleLogin={setIsModalVisibleLogin} />
      </ModalBackground>
    </div>
  )
}

export default Home
