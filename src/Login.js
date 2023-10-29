import React from 'react';
import styled from 'styled-components';
import Logo from './ph.png';

const Login = () => {
  return (
    <Container>
      <Image src={Logo} alt="Login Image" />
      <LoginForm>
        <h2>Login</h2>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <RememberMe>
          <input type="checkbox" /> Remember me
        </RememberMe>
        <AgreeToTerms>
          <input type="checkbox" /> Agree to Terms and Conditions
        </AgreeToTerms>
        <ChangePassword>Forgot Password?</ChangePassword>
        <SubmitButton>Log In</SubmitButton>
        <SignupLink>Don't have an account? Sign up</SignupLink>
      </LoginForm>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  max-width: 60%;
  height: 60%;
  margin-right: 180px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
    margin-right: 0;
  }
`;

const LoginForm = styled.form`
  width:40%;
  height:70%;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 12px;
  background: #FFF;
box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const RememberMe = styled.label`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const AgreeToTerms = styled.label`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const ChangePassword = styled.span`
  color: #0077FF;
  text-decoration: underline;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  background-color: #0077FF;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SignupLink = styled.div`
  margin: 20px 0;
`;

export default Login;
