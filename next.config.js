// Temporary debug config
const withDebug = require('next-debug')({
  debug: true,
  removeDataTestid: false
});

module.exports = withDebug(nextConfig);
