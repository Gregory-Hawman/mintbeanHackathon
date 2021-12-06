const express = require('express');
const helmet = require('helmet'); 
const cors = require('cors');
const { authenticate } = require('./middleware')

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());

// server.use('/api/users', authenticate, userRouter)
// server.use('/api/artworks', authenticate, artworksRouter)
// server.use('/api/auth', authRouter)

server.get('/', (req, res) => {
    res.status(200).json({ server: 'Up and Running' })
});

module.exports = server;