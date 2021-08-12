import React from 'react';
import Card from 'react-bootstrap/Card';


class Weather extends React.Component {

    render(){

        return(
<>


<Card border="warning" style={{ width: '18rem' }}>
    <Card.Header style={{fontSize:'1.1rem'}} >{this.props.date}</Card.Header>
    <Card.Body>
      <Card.Text>
      {this.props.description}
.
      </Card.Text>
    </Card.Body>
  </Card>


</>


        )
    }
}

export default Weather;



