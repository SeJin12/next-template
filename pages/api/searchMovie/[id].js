// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { defaultGet, fetcherParamGet } from "@lib/http";

/**
 * @example
 * @param {*} req
 * @param {*} res
 */
export default function handler(req, res) {
   

  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=${req.query.id}`;
  console.log('/[id]  ',req.method, req.query, ' : ' , url);
  
  defaultGet(url, {})
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch(({ err }) => {
      res.status(500).json({ err });
    });
}
