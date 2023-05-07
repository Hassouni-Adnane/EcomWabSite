import styled from "styled-components";
//import {mobile} from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;

`;

const SwitchRegister = styled.button`
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
const ButtonContainer = styled.div`
    display: flex;
    //justify-content: space-between;
    margin-top: 5px;
    margin-bottom: 5px;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const CloseButton = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = ({setIsModalVisibleLogin}) => {
  const closeModalLogin = () => {
    setIsModalVisibleLogin(false);
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
        <ButtonContainer>
            <p>Don't have an account?</p>
            <SwitchRegister>Register</SwitchRegister>
      </ButtonContainer>
      <CloseButton onClick={closeModalLogin}>Close</CloseButton>
      </Wrapper>
    </Container>
  );
};

export default Login;