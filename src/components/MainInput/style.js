import styled from 'styled-components';
import mailIcon from '../../assets/icons/mail.svg';

export const InputWrapper = styled.div`
    max-width: 515px;
    height: 68px;
    border-radius: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    margin-bottom: 120px;
    
    &::before {
      content: '';
      background-image: url(${mailIcon});
      width: 20px;
      height: 16px;
      margin-right: 21px;
      margin-left: 24px;
      opacity: 0.2;
    }
  `;

export const BasicInput = styled.input.attrs({
  placeholder: 'Enter your email',
  type: 'text',
})`
    border: none; 
    outline: none; 
    -webkit-appearance: none; 
    width: 274px; 
    vertical-align: middle; 
    
  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    opacity: 0.2;
  }
 `;

export const InputSubmitButton = styled.button`
    width: 195px;
    height: 50px;
    margin-right: 11px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #FFFFFF;
    background-color: #215EE9;
    border-radius: 40px;
    border: 0;
    box-shadow: 0px 100px 161px rgba(33, 94, 233, 0.08), 
                0px 64.8148px 94.2894px rgba(33, 94, 233, 0.0607407),
                0px 38.5185px 51.2815px rgba(33, 94, 233, 0.0485926),
                0px 20px 26.1625px rgba(33, 94, 233, 0.04),
                0px 8.14815px 13.1185px rgba(33, 94, 233, 0.0314074), 
                0px 1.85185px 6.33565px rgba(33, 94, 233, 0.0192593);
    `;
