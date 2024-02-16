import { WebSocketServer } from 'ws';

export const websocketServer = (port: number) => {
  const wss = new WebSocketServer({ port });

  wss.on('connection', function connection(ws) {
    ws.on('message', async (message) => {
      console.log('received: %s', message);
      try {
        const parsedData = JSON.parse(message.toString());
        if (parsedData.type === 'reg') {
          const userCreds = parsedData.data;
          const response = {
            type: 'reg',
            data: {
              name: userCreds.name,
              index: 0,
              error: false,
              errorText: '' 
            },
            id: 0
          };
        
          ws.send(JSON.stringify(response));
        }
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    });
  });
}
