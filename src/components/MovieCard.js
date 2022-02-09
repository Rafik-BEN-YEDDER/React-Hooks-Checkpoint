import React from 'react';
import {Card,Button} from 'react-bootstrap'
import { Rate } from 'antd';
function MovieCard({movie}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.posterUrl} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <Card.Text> <a href={movie.trailer}>{movie.trailer}</a> </Card.Text>
                <Rate disabled defaultValue={movie.rate} />
                
            </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard;
