/**
 * 统一工具类导出出口
 */

 const { outLogger, appLogger, dataLogger, errorLogger } = require('./logger')

 module.exports = {
    outLogger,
    appLogger,
    dataLogger,
    errorLogger
 }