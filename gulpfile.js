const path = require('path');

const projectDir = __dirname;
const tsconfigPath = path.join(projectDir, 'scripts/gulp/tsconfig.json');

// Register TS compilation.
require('ts-node').register({
  project: tsconfigPath
});

require('./scripts/gulp/gulpfile');
