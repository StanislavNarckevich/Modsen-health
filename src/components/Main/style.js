import styled from 'styled-components';

export const MainContentWrapper = styled.main`
    display: flex;
    margin-top: 15px;
    
    @media(max-width: 768px) {
      flex-direction: column-reverse;
    }
  `;

export const MainContent = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-top: 75px;
    
    @media(max-width: 768px) {
      margin-top: 72px;
      margin-left: 25px;
    }
  `;

export const MainPicture = styled.div`
    //width: 740px;
    height: 855px;
  `;

export const MainTitle = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    color: #215EE9;
    margin-bottom: 19px;
  `;

export const MainAdvertising = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 65px;
    line-height: 64px;
    letter-spacing: -0.055em;
    color: #215EE9;
    margin-bottom: 30px;
    max-width: 515px;

  `;

export const MainSubAdvertising = styled.span`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    color: #215EE9;
    max-width: 543px;
    font-size: 20px;
    line-height: 34px;
    opacity: 0.7;
    margin-bottom: 45px;
  `;
