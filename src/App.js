import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import LandingPage from './Pages/landingpage/LandingPage';
function App() {
  return (
    <div className="App" >
     <Header>
     </Header>
          <body>
            <LandingPage></LandingPage>
          </body>
      <Footer></Footer>
    </div>
  );
}

export default App;
