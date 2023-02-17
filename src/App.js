import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import LandingPage from './Pages/landingpage/LandingPage';
function App() {
  return (
    <div className="App" >
     <Header>
     </Header>
          <body>
            <LandingPage></LandingPage>
          </body>
          <footer></footer>
    </div>
  );
}

export default App;
