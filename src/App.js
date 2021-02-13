import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import requests from "./requests"
import Row from './Row';


function App() {
  return (
    <div className="App">
       <Nav/>
       <Banner/>
       <Row title = "NETFLIX ORIGINAL" fetchUrl ={requests.fetchNetflixOriginals} isLaregeRow />
       <Row title = "Trending Now" fetchUrl = {requests.fetchTrending} />
       <Row title ="TopRatedMovies" fetchUrl = {requests.fetchTopRatedMovies}/>
       <Row title= "ActionMovies" fetchUrl = {requests.fetchActionMovies}/>
       <Row title = "ComedyMovies" fetchUrl ={requests.fetchComedyMovies}/>
       <Row title ="HorrorMovies" fetchUrl ={requests.fetchHorrorMovies}/>
       <Row title ="RomanceMovies" fetchUrl = {requests.fetchRomanceMovies}/>
       <Row title ="Documentaries" fetchUrl ={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
