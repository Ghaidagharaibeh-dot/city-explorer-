// import React from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import Weather from 'Weather.css';
// class Main extends React.Component{
//     constructor(props){
//       super(props);
//       this.state= {
//         displayTheName :'',
//         lon :'',
//         lat:'',
//         city:'',
//         latitude :'',
//         longitude:'',
//         displayTheMap:false,
//        displayerror:false,
//        theMsg : 'page not found',
  
  
//       }
  
//     }
  
//     getlocationfun= async (event)=>{
//       event.preventDefault();
//       let theCity = event.target.thecity.value;
//       let url=`https://eu1.locationiq.com/v1/search.php?key=pk.0ea5125431a879434907a222356060aa&q=${theCity}&format=json`;
//       // let url=`process.env.REACT_APP_KEY&q=${theCity}&format=json`;
  
//       // let url=`https://eiq.com/v1/search5431adsvfd87a222356060aa&q=${theCity}&format=json`;
//       try{
//       let getlocation = await  axios.get(url);
//       this.setState({
//      displayTheName: getlocation.data[0].display_name,
//      lon: getlocation.data[0].lon,
//      lat: getlocation.data[0].lat,
//      city:'city',
//      longitude:' longitude:',
//      latitude:' latitude:',
//      displayTheMap:true
  
//       });
//     }
//     catch{
//       this.setState({
//         displayTheMap:false,
//         displayerror: true,
  
//       });
//     }
//     }
   
  
  
//     render(){
//       return(
//         <>
//         <header style={{color:'wheat'},{fontSize:'3rem'}}>
//         Explore the city 
//         </header>
//   <form onSubmit={this.getlocationfun} >
//     <label style={{fontSize:'1.5rem'}}>What would you like to explore:</label> <br />
//           <input type='text' placeholder='Explore the city' name='thecity' /><br /><br />
//           <button type='submit' class="btn btn-primary" >
//             Explore!</button>
  
//         </form> 
//         <p> {this.state.city} { this.state.displayTheName} {this.state.latitude}
//         {this.state.lat} {this.state.longitude}
//          {this.state.lon}</p>
  
  
//         {this.state.displayTheMap &&  <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.0ea5125431a879434907a222356060aa&center=${this.state.lat},${this.state.lon}&zoom=17`} alt='map'  style={{ height: '18rem'  } ,{ width: '18rem'  }} />}
  
  
//     { this.state.displayErr && 
//          this.state.theMsg }
         
//   <footer style={{fontSize:'1.5rem'}}>
//   &copy;Code-Fellows
//   </footer>
//   </>
//       )
//     }
//   }

//   export default Main;
