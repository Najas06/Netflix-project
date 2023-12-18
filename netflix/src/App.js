import './App.css';
import Banner from './components/Banner';
import Navigationbar from './components/Navigationbar';
import Row from './components/Row';
import { requests } from './request';

function App() {
  return (
    <>
    <h1 style={{color:"red"}}>Netflix</h1>
    <Row title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}/>
    <Banner/>
    <Navigationbar/>
    </>
  );
}

export default App;
