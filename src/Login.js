import React from 'react';
import styled from 'styled-components';
import Photo from './ph.png';



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f7f7f7;
`;

const LoginContainer = styled.div`
  display: flex;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-width: 500px;
  padding: 20px;
`;

const Logo = styled.img`
  max-width: 100%;
`;

const FormContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RememberContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Label = styled.label`
  font-size: 14px;
`;

const AgreeContainer = styled.div`
  margin: 10px 0;
`;

const PasswordLink = styled.a`
  text-decoration: none;
  color: #007BFF;
  margin-right: 10px;
`;

const LoginButton = styled.button`
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
`;

function Login() {
  return (
    <Container>
      <LoginContainer>
      <Logo src={Photo} alt="Logo" />
        <FormContainer>
          <Title>Login</Title>
          <Form>
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <RememberContainer>
              <Checkbox type="checkbox" id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </RememberContainer>
            <AgreeContainer>
              <PasswordLink href="#forgot">Change password</PasswordLink>
              <Label>Agree to terms and conditions</Label>
            </AgreeContainer>
            <LoginButton type="submit">Login</LoginButton>
          </Form>
        </FormContainer>
      </LoginContainer>
    </Container>
  );
}

export default Login;
