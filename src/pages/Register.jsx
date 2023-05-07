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



const Register = ({setIsModalRegisterVisible}) => {
    const closeModalRegister = () => {
        setIsModalRegisterVisible(false);
      };
      
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
        <ButtonContainer>
            <p>Alredy have an account?</p>
            <SwitchLogin>Login</SwitchLogin>
        </ButtonContainer>
        <CloseButton onClick={closeModalRegister}>Close</CloseButton>
      </Wrapper>
    </Container>
  );
};

export default Register;