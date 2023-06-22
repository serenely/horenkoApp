import './main.scss'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ContactModal from './components/ContactModal/ContactModal';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <ContactModal />
    </div>
  );
}

export default App;
