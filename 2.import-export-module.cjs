//changed the filename to .cjs extension as we are using modern javascript in package.json 
// and if we need to use commonJS in particular file we need to change the file extension as .cjs

const commonJSUtil = require('./commonJSUtil.cjs')
console.log(commonJSUtil.add(2, 3));
console.log(commonJSUtil.sub(2, 3))


