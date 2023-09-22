const app = require('./app');

const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.listen(PORT, () => {
  console.log(`[${NODE_ENV}] Escutando na porta ${PORT}`);
});