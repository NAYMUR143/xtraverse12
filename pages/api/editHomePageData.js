<<<<<<< HEAD
const { log } = console;
export default function editHomepage(req, res) {
=======
let nftData = {};

export default function teamAdd(req, res) {
>>>>>>> 8000ce7becb4d8936f22128712544d41d2c307eb
  if (req.method === "POST") {
    nftData = req.body;
    res.json(nftData);
  }

  if (req.method === "GET") {
    res.json(nftData);
  }

  return res.status(500).json({
    msg: "this needs to be post request",
  });
}
