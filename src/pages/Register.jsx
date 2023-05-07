import { useState } from "react";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const CloseButton = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const ButtonContainer = styled.div`
    display: flex;
    //justify-content: space-between;
    margin-top: 5px;
    margin-bottom: 5px;
`

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const SwitchLogin = styled.button`
//width: 40%;
border-bottom:solide gray;
border-top: none;
border-left: none;
border-right: none;
margin-left: 20px;
//padding: 10px;
//background-color: #67e8e8;
color: black;
cursor: pointer;
`



const Register = ({setIsModalRegisterVisible, setIsModalVisibleLogin}) => {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make an HTTP request to your PHP file here
    // You can use the Fetch API or Axios to do this

    // For example, using the Fetch API:
    fetch("http://localhost/BDW/TP/ecomBackEnd/handelingNewCommers.php", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        lastName,
        username,
        email,
        password,
      }),
    })
    /*.then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));*/
  }

    const closeModalRegister = () => {
        setIsModalRegisterVisible(false);
      };
    const openModalLogin = () => {
      setIsModalVisibleLogin(true);
      setIsModalRegisterVisible(false);
        
      };
      
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="name" 
          value={name}
          onChange={(event) => setName(event.target.value)}/>
          <Input placeholder="last name" 
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}/>
          <Input placeholder="username" 
          value={username}
          onChange={(event) => setUsername(event.target.value)}/>
          <Input placeholder="email" 
          value={email}
          onChange={(event) => setEmail(event.target.value)}/>
          <Input placeholder="password" 
          value={password}
          onChange={(event) => setPassword(event.target.value)}/>
          <Agreement>
            Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla 
            Bla Bla Bla Bla <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
        <ButtonContainer>
            <p>Alredy have an account?</p>
            <SwitchLogin onClick={openModalLogin}>Login</SwitchLogin>
        </ButtonContainer>
        <CloseButton onClick={closeModalRegister}>Close</CloseButton>
      </Wrapper>
    </Container>
  );
};

export default Register;