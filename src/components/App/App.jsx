import Header from '../Header';
import Main from '../Main';
import { AppContainer, AppWrapper } from './style';

function App() {
  return (
    <AppWrapper>
      <AppContainer>
        <Header />
        <Main />
      </AppContainer>
    </AppWrapper>
  );
}

export default App;
