if (process.env.NODE_ENV === 'development') {
  module.exports = require('./dist/react-pixi.umd-dev')
} else {
  module.exports = require('./dist/react-pixi.umd')
}
