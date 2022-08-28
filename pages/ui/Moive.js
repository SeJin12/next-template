import Image from "next/image";
import React, { useEffect } from "react";

const Moive = ({ title, overview, poster_path, release_date }) => {
  return (
    <div>
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
    </div>
  );
};

export default Moive;
