import styled from 'styled-components';
import mainPicture from '../../assets/images/main-picture.png';
import bgVectorOne from '../../assets/images/background-little-vector.svg';
import bgVectorTwo from '../../assets/images/background-big-vector.svg';
import bgVectorLinesOne from '../../assets/images/background-vectors-lines.svg';
import bgVectorLinesTwo from '../../assets/images/background-vector-lines-two.svg';
import mainPictureMobile from '../../assets/images/main-picture-mobile.png';
import bgVectorMobile from '../../assets/images/background-big-vector-mobile.svg';

export const AppWrapper = styled.div`
    max-width: 100%;
    background: #EBF1FF;
    display: flex;
    justify-content: center;
  `;

export const AppContainer = styled.div`
    width: 100%;
    max-width: 1600px;
    min-height: 1200px;
    padding: 7.292% 3.8025% 5% 8.021%;
    background: url(${mainPicture}) no-repeat 100% 45%,
                url(${bgVectorOne}) no-repeat 91% 24%,
                url(${bgVectorTwo}) no-repeat 100% 98%,
                url(${bgVectorLinesOne}) no-repeat 0% 95%,
                url(${bgVectorLinesTwo}) no-repeat 100% 6%;
        filter: drop-shadow(50px -56px 104px rgba(28, 91, 235, 0.05));
    
    @media(max-width: 768px) {
      padding: 25px 17px 122px 15px;
      background: url(${mainPictureMobile}) no-repeat ,
                url(${bgVectorMobile}) no-repeat 0% 16%;
    }
  `;
