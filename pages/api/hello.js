// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { defaultGet } from "../../lib/http";

/**
 * @example
 * @param {*} req 
 * @param {*} res 
 */
export default function handler(req, res) {
  const url = "http://192.168.0.11:8080/v1/market/all";

  defaultGet(url, {})
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch(({ err }) => {
      res.status(500).json({ err });
    });
}
