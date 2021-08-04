// import { render } from '@testing-library/react';
import React from 'react';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


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


    }

  }

  getlocationfun= async (event)=>{
    event.preventDefault();
    let theCity = event.target.thecity.value;
    // let url=`https://eu1.locationiq.com/v1/search.php?key=pk.0ea5125431a879434907a222356060aa&q=${theCity}&format=json`;
    let url=`https://eu1.locationiq.com/v1/search.php?key=pk.9130d092d331efd1975bc4caa749ef55	&q=${theCity}&format=json`;

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
  }
 getWeatherdatafun=async(thecity)=>{
   console.log(this.state.theCity)
  let url=`http://localhost:3001/gettheservice?cityName=${thecity}&lon=${this.state.lon}&lat=${this.state.lat}`

  let weatherdata = await axios.get(url);
let arrforweather = weatherdata.data.map((item) => {
  return `The Date is : ${item.date} and the description is : ${item.description}`;
});
this.setState({
  weather: weatherdata.data,
  weatherStrings: arrforweather,
});
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
      <p> {this.state.city} { this.state.displayTheName} {this.state.latitude}
      {this.state.lat} {this.state.longitude}
       {this.state.lon}</p>


      {this.state.displayTheMap &&  <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.9130d092d331efd1975bc4caa749ef55&center=${this.state.lat},${this.state.lon}&zoom=17`} alt='map'  style={{ height: '18rem'  } ,{ width: '18rem'  }} />}


  { this.state.displayErr && 
       this.state.theMsg }
       
       <p>{this.state.weatherStrings} </p>
<footer style={{fontSize:'1.5rem'}}>
&copy;Code-Fellows
</footer>
</>
    )
  }
}


export default App;


