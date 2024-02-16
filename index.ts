import { httpServer } from "./src/http_server/index";
import { websocketServer } from "./src/websocket/ws";

const HTTP_PORT = 8181;
const WEBSOCKET_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

console.log(`Websocket Start server on the ${WEBSOCKET_PORT} port!`);

websocketServer(WEBSOCKET_PORT)