/* eslint no-console: 0 */
export const onUserOnline = (socket) => {
  socket.on('user-online', (user) => {
    console.log('onUserOnline :', user);
  });
};
