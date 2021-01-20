const log4js = require('log4js')

log4js.configure({
    appenders:{
        out: {type: 'stdout'},
        app: {type:'dateFile',filename:"logs/app/app",pattern:"-yyyy-MM-dd.log",keepFileExt:true,alwaysIncludePattern:true},
        data:{type: 'dateFile',filename:'logs/data/data',pattern:"-yyyy-MM-dd.log",keepFileExt:true,alwaysIncludePattern:true},
        error:{type: 'dateFile',filename:'logs/error/error',pattern:"-yyyy-MM-dd.log",keepFileExt:true,alwaysIncludePattern:true},
    },
    categories:{
        default:{appenders:['out'],level:'debug'},
        app:{appenders:['app'],level:'info'},
        data:{appenders:['data'],level:'info'},
        error:{appenders:['error'],level:'error'},
    }
})

const outLogger = log4js.getLogger("default")
const appLogger = log4js.getLogger("app")
const dataLogger = log4js.getLogger("data")
const errorLogger = log4js.getLogger("error")

module.exports = {
    outLogger,
    appLogger,
    dataLogger,
    errorLogger
}