// Guardian Cloud MVP 02 — minimal Node fixture (second proof app).
// GET /      -> "Guardian Cloud MVP 02"
// GET /health -> "OK MVP02"
// Deliberately DIFFERENT from guardian-cloud-e2e ("Guardian Cloud E2E" / "OK").
const http = require("http");

const port = parseInt(process.env.PORT || "3000", 10);

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("OK MVP02");
    return;
  }
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Guardian Cloud MVP 02");
});

server.listen(port, () => {
  console.log("guardian-cloud-mvp02 listening on port " + port);
});
