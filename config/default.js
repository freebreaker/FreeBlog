module.exports = {
  port: 3000,
  session: {
    secret: 'freeblog',
    key: 'freeblog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/myblog'
  //   port: 80,
  // mongodb: 'mongodb://freebrealer:freebrealer@ds149201.mlab.com:49201/myblog'
};