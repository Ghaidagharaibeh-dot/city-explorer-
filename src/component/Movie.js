import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class Movie extends React.Component {
    render() {

        return (
            <>
             


        

  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.poster_path} />
  <Card.Body>
    <Card.Title  style={{fontSize:'1.1rem'}} >{this.props.title}</Card.Title>
    <Card.Text>
    {this.props.release_date}
    </Card.Text>
    <Card.Text> Overview:
    {this.props.overview}
    </Card.Text>
    <Card.Text> Vote_average:
    {this.props.vote_average}
    </Card.Text>
    <Card.Text>Vote_count:
    {this.props.vote_count}
    </Card.Text>
    <Card.Text>Popularity :  {this.props.popularity}
    </Card.Text>
   
  </Card.Body>
</Card>
<br/>

            </>
        )
    }
}
export default Movie;