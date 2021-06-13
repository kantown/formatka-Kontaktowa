import TopBar from './TopBar/TopBar';
import ContactForm from './ContactForm/ContactForm';
import MainContent from './MainContent/MainContent';
import {withNamespaces} from 'react-i18next';

function App() {
  return (
    <div className="App" >
      <TopBar/>
      <MainContent/>
      <ContactForm/>
    </div>
  );
}

export default withNamespaces()(App);
