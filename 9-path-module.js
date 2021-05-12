const path = require('path')

console.log(path.sep) // platform especific separator for windows \

const filePath = path
.join('/content','subfolder','test.txt')
console.log(filePath)

const base=path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute)
/* OUTPUT:
\
\content\subfolder\test.txt
test.txt
C:\Users\spine\Desktop\Tutorial\content\subfolder\test.txt
Note: the directory of the app.js where this was run from was
__directory: C:\Users\spine\Desktop\Tutorial
*/