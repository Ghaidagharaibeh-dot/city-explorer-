// import { render } from '@testing-library/react';
import React from 'react';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import './App.css';
import Weather from './component/Weather'
import Movie from './component/Movie'


import Container from 'react-bootstrap/Container'




class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      displayTheName :'',
      lon :'',
      lat:'',
      city:'',
      latitude :'',
      longitude:'',
      displayTheMap:false,
    
      weather:'',
      weatherStrings:[],
    
      displayerror:false,
     theMsg : 'page not found',

     movies : [],



    }

  }

  getlocationfun= async (event)=>{
    event.preventDefault();
    let theCity = event.target.thecity.value;
    let url=`https://eu1.locationiq.com/v1/search.php?key=pk.9130d092d331efd1975bc4caa749ef55&q=${theCity}&format=json`;

    try{
    let getlocation = await  axios.get(url);
    console.log(getlocation);
    this.setState({
   displayTheName: getlocation.data[0].display_name,
   lon: getlocation.data[0].lon,
   lat: getlocation.data[0].lat,
   city:'city',
   longitude:' longitude:',
   latitude:' latitude:',
   displayTheMap:true

    });
  }
  catch{
    this.setState({
      displayTheMap:false,
      displayerror: true,

    });
  }
  this.getWeatherdatafun(theCity);
  this.getMovieFun(theCity);
  }

  getWeatherdatafun=async(thecity)=>{
    console.log(this.state.theCity)
   let url=`https://city-explorer-week2-level301.herokuapp.com/getWeather?cityName=${thecity}&lat=${this.state.lon}&lon=${this.state.lat}`
 
   let weatherdata = await axios.get(url);
 let arrforweather = weatherdata.data.map((item) => {
   return item;
    // `The Date is : ${item.date} and the description is : ${item.description}`;
 });
 this.setState({
   weather: weatherdata.data,
   weatherStrings: arrforweather,
 });
  }
//  getWeatherdatafun=async(thecity)=>{
//    console.log(this.state.theCity)
//   let url=`http://localhost:3001/gettheservice?cityName=${thecity}&lon=${this.state.lon}&lat=${this.state.lat}`

//   let weatherdata = await axios.get(url);
// let arrforweather = weatherdata.data.map((item) => {
//   return `The Date is : ${item.date} and the description is : ${item.description}`;
// });
// this.setState({
//   weather: weatherdata.data,
//   weatherStrings: arrforweather,
// });
//  }


 getMovieFun = async(thecity) => {
  const url = `https://city-explorer-week2-level301.herokuapp.com/getMovie?city=${thecity}`;
  let showMovie= await axios.get(url);
  let movieArr = showMovie.data.map((item) => {
    return item;
    });
    this.setState({
      movies : movieArr

    })
   
}

  render(){
    return(
      <>
      <header style={{color:'wheat'}} style={{fontSize:'3rem'}}>
      Explore the city 
      </header>
<form onSubmit={this.getlocationfun} >
  <label style={{fontSize:'1.5rem'}}>What would you like to explore:</label> <br />
        <input type='text' placeholder='Explore the city' name='thecity' /><br /><br />
        <button type='submit' class="btn btn-primary" >
          Explore!</button>

      </form> 
      {this.state.displayTheMap &&  <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.9130d092d331efd1975bc4caa749ef55&center=${this.state.lat},${this.state.lon}&zoom=17`} alt='map'  style={{ height: '18rem'  } ,{ width: '18rem'  }} />}


      <Table striped bordered hover>
  <thead>
    <tr>
      <th>City Name	</th>
      <th>City Longitude</th>
      <th>City Latitude</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>  {this.state.displayTheName}</td>
      <td> {this.state.lat}</td>
      <td>{this.state.lon}</td>
    </tr>
  </tbody>
</Table>

 { this.state.displayErr && 
       this.state.theMsg }


<div className="bg-secondary text-white p-1 text-center"><h5>Weather Data</h5></div>
        <div>
          <Container>
          {this.state.weatherStrings.map((item)=>{
return(
  <Weather date={item.date} description={item.description}
   />
);
})
}
          </Container>
        </div>

<br/> <br/> <br/>

        <div className="bg-secondary text-white p-1 text-center"><h5>Movies Data</h5></div>
        <div>
          <Container>

    

 {this.state.movies.map((item)=>{

              return(
  <Movie 

  title={item.title}
  overview={item.overview}
  vote_average={item.vote_average}
  vote_count ={item.vote_count}
    poster_path= {`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
     popularity={item.popularity}
 release_date={item.release_date}
 /> 

  )}) }



         </Container>
          </div>
  
      
  
<footer style={{fontSize:'1.5rem'}}>
&copy;Code-Fellows
</footer>
</>
    )
  }
}


export default App;


