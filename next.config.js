const withSass = require('@zeit/next-sass');
// module.exports = {
//   target: "serverless"
// }
module.exports = withSass({
  target: "serverless"
});
