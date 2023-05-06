import React from 'react'
import styled from 'styled-components'
//import PopupContext from './PopupContext'


const Container = styled.div`
    
`
const Title = styled.h2`
    font-size: 2em;
    color: #1b1a1a;
    text-align: center;
`
const Input_box = styled.div`
    position: relative;
    width: 100%;
    height: 50px;
    border-bottom: 2px solid #1b1a1a;
    margin: 30px 0;
`

const FormBoxLogin = () => {
  return (
    
    <Container>
      <Title />
      <form action=''>
        <Input_box>
            <input type='email' id='emailIn' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" name="" required />
            <label for="emailIn">Email</label>
        </Input_box>
        <Input_box>
            <input type="password" id="pswrdIn" value="" name="password" autocomplete="off" maxlength="20" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$" required />
            <label for="pswrdIn">Password</label>
        </Input_box>
        <button type="submit" class="btn">Sign in</button>
      </form>
    </Container>
  )
}

export default FormBoxLogin
