module.exports= {
    port: process.nextTick.PORT || 3000,
    mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/example',
    env: process.env.NODE_ENV || 'development'
}