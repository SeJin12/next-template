import Image from "next/image";
import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MoiveCard = ({ title, overview, poster_path, release_date }) => {
  return (
    <Card style={{ width: '20rem'}}>
      <Card.Img variant="top" src={`${process.env.NEXT_PUBLIC_MOVIE_IMAGE_PATH}${poster_path}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {overview}
        </Card.Text>
        <Button variant="primary">Search</Button>
      </Card.Body>
    </Card>
  );
};

export default MoiveCard;

{
  /* <div>
<h3>제목: {title}</h3>
<Image
  src={`${process.env.NEXT_PUBLIC_MOVIE_IMAGE_PATH}${poster_path}`}
  alt={title}
  width="200"
  height="200"
/>
<p>{overview}</p>
<span>release_data: {release_date}</span>
<style jsx>
  {`
    div {
      border: 1px solid black;
      padding: 10px;
    }
  `}
</style>
</div> */
}
