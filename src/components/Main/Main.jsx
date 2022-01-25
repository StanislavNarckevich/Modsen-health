import MainInput from '../MainInput';
import Achievements from '../Achievements';
import {
  MainAdvertising,
  MainContent,
  MainContentWrapper, MainPicture,
  MainSubAdvertising,
  MainTitle,
} from './style';

function Main() {
  return (
    <MainContentWrapper>
      <MainContent>
        <MainTitle>
          Booking of doctor’s appointment
        </MainTitle>
        <MainAdvertising>
          Don’t Miss Our Exclusive Patient Special
        </MainAdvertising>
        <MainSubAdvertising>
          We want to make sure that everyone has access to natural and effective care.
          With our special, you’ll receive a consultation and a digital posture assesment.
        </MainSubAdvertising>
        <MainInput />
        <Achievements />
      </MainContent>
      <MainPicture />
    </MainContentWrapper>
  );
}

export default Main;
