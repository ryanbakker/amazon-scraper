import { NextApiRequest, NextApiResponse } from "next";

type Body = {
  search: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Submitting...");
  const search = req.body.search;

  console.log("SEARCH IS >>> ", search);

  res.status(200).json({ message: "Success" });
}
