import React, { useState } from 'react';
import Photo from './ph.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styled from 'styled-components';

const CustomContainer = styled.div`
 display: inline-flex;
  padding: 40px 40px 40px 142px;
  justify-content: flex-end;
  align-items: center;
  gap: 147px;
  background: #FFF;

  @media (max-width: 998px) {
    padding: 1rem 3.2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 3rem;
  }
`;

const CustomLeftPanel = styled.div`
  width: 30%;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 70%;
    margin-bottom: -5rem;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const CustomImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CustomRightPanel = styled.div`
  width: 70%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background: #FFF;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);

  @media (max-width: 768px) {
    width: 100%;
    height:65vh;
    margin-left:30px;
  }
`;

const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const CustomPasswordToggle = styled.div`
  position: absolute;
  right: 35px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  @media (max-width: 768px) {
    right: 20px;
  }
`;

const CustomH2 = styled.h2`
  color: #04072F;
  text-align: center;
  font-family: Poppins;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CustomLabel = styled.label`
  text-align: left;
  color: #04072F;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  margin-left: 1rem;

  @media (max-width: 480px) {
    line-height: 90%;
  }
`;

const CustomInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
`;

const CustomInput = styled.input`
  padding: 8px;
  width: 90%;
  border-radius: 8px;
  border: 1px solid rgba(4, 7, 47, 0.4);
  margin-left: 1rem;
`;

const CustomPasswordInput = styled.input`
  padding: 8px;
  width: 90%;
  border-radius: 8px;
  border: 1px solid rgba(4, 7, 47, 0.4);
  margin-left: 1rem;
`;

const CustomCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 1rem;

  @media (max-width: 768px) {
    gap: 1px;
  }
`;

const CustomCheckbox = styled.input`
  margin: 0;
`;

const CustomButton = styled.button`
  padding: 12px;
  margin:12px;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 50%;
  align-self: center;
  border-radius: 8px;
  background: #1575A7;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 95%;
    margin-left: 10px;
  }
`;

const CustomRegisterLink = styled.a`
  text-align: center;
  text-decoration: none;
  cursor: default;
  color: #04072F;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CustomChangePasswordLink = styled.a`
  text-align: center;
  margin-left: auto;
  margin-right: 2rem;
  text-decoration: none;
  cursor: pointer;
  color: #F78719;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%;

  @media (max-width: 768px) {
    margin-right: 0.5rem;
  }
`;

const CustomStyledSpan = styled.span`
  color: #F78719;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: underline;
  cursor: pointer;
`;

function CustomLogin() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [customPassword, setCustomPassword] = useState('');
  const [customLoginId, setCustomLoginId] = useState('');
  const [customRemember, setCustomRemember] = useState(false);
  const [customTerms, setCustomTerms] = useState(false);

  const toggleCustomPasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    console.log('Custom Login ID:', customLoginId);
    console.log('Custom Password:', customPassword);
    setCustomLoginId('');
    setCustomPassword('');
    setCustomRemember(false);
    setCustomTerms(false);
  };

  return (
    <CustomContainer>
      <CustomLeftPanel>
        <CustomImage src={Photo} alt="LoginImage" />
      </CustomLeftPanel>
      <CustomRightPanel>
        <CustomForm onSubmit={handleCustomSubmit}>
          <CustomH2>Login</CustomH2>
          <CustomLabel htmlFor="customLoginId">Login ID</CustomLabel>
          <CustomInput
            type="text"
            id="customLoginId"
            name="customLoginId"
            value={customLoginId}
            placeholder="Enter Login ID"
            required
            onChange={(e) => setCustomLoginId(e.target.value)}
          />
          <CustomLabel htmlFor="customPassword">Password</CustomLabel>
          <CustomInputContainer>
            <CustomPasswordInput
              type={passwordVisible ? 'text' : 'password'}
              id="customPassword"
              placeholder="Enter Password"
              name="customPassword"
              required
              value={customPassword}
              onChange={(e) => setCustomPassword(e.target.value)}
            />
            <CustomPasswordToggle onClick={toggleCustomPasswordVisibility}>
              {passwordVisible ? <FaEye /> : <FaEyeSlash />}
            </CustomPasswordToggle>
          </CustomInputContainer>
          <CustomCheckboxContainer>
            <CustomCheckbox
              type="checkbox"
              id="customRemember"
              name="customRemember"
              checked={customRemember}
              required
              onChange={() => setCustomRemember(!customRemember)}
            />
            <CustomLabel htmlFor="customRemember">Remember me</CustomLabel>
            <CustomChangePasswordLink href="/custom-password">
              Change Password
            </CustomChangePasswordLink>
          </CustomCheckboxContainer>
          <CustomCheckboxContainer>
            <CustomCheckbox
              type="checkbox"
              id="customTerms"
              name="customTerms"
              checked={customTerms}
              required
              onChange={() => setCustomTerms(!customTerms)}
            />
            <CustomLabel htmlFor="customTerms">
              Agree to the <a href="/custom-terms-conditions" style={{ color: '#F78719' }}>Terms and Conditions</a>
            </CustomLabel>
          </CustomCheckboxContainer>
          <CustomButton type="submit">Login</CustomButton>
          <CustomRegisterLink href="/custom-register">
            Don't have an account? <CustomStyledSpan>Register Here</CustomStyledSpan>
          </CustomRegisterLink>
        </CustomForm>
      </CustomRightPanel>
    </CustomContainer>
  );
}

export default CustomLogin;
