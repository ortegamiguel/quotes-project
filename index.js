const express = require('express');
const server = express();
const { PORT } = require('./config');
const { HomeRoutes, QuotesRoutes } = require('./routes');
const {NotFoundMiddleware} = require('./middlewares')

// middlewares
server.use(express.static('./public'));
server.use(express.json());

server.use('/', HomeRoutes);
server.use('/', QuotesRoutes);
server.use(NotFoundMiddleware);

server.listen(PORT, () => {
    console.log(`Aplication running on PORT ${PORT}`);
});