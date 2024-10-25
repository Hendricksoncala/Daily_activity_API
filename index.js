import express from 'express';

/**
 * 
 * @author Hendrickson cala
 */
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});

app.on('error', (err) => {
  console.error('Error starting server:', err);
});