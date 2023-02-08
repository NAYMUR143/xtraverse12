const { log } = console;
export default function editHomePage(req, res) {
  if (req.method === "POST") {
    const nftData = req.body;
    log("Req payload", nftData);
    res.json(nftData);
  }
  return res.status(500).json({
    msg: "this needs to be post request",
  });
}
