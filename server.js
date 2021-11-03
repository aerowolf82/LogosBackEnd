const {app} = require('./app');

const port = 3001;

app.listen(port, () => {
  console.log(`Logos Back End Listening on port: ${port}`);
});