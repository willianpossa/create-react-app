const path = require('path')
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    '@': resolveApp('src'),
    "@Assets": resolveApp('src/Assets'),
    "@Images": resolveApp('src/Assets/Images'),

    "@Pages": resolveApp('src/Pages'),
    "@Components": resolveApp('src/Components'),
    "@Routes": resolveApp('src/Routes'),
    "@Utils": resolveApp('src/Utils'),
    "@Services": resolveApp('src/Services'),
    "@Requests": resolveApp('src/Requests')
}