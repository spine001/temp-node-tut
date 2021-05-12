const os = require('os') // no ./ needed for internal modules

// info about current user, that of course is me
const user = os.userInfo()
//console.log(user)

//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS)