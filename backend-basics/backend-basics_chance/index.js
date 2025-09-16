import { server } from "./server.js";

const port = 8000;
server.listen(port, "127.0.0.1", () => {
  console.log("Server is running on localhost:" + port);
});
