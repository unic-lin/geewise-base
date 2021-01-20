/*
 * @Description: 极智汇nodejs开发基础模板
 * @Version: 2.0
 * @Autor: chengDong
 * @Date: 2019-12-13 23:02:55
 * @LastEditors: chengDong
 * @LastEditTime: 2019-12-14 09:42:10
 */
module.exports = [
    {
      type: 'confirm',
      name: 'private',
      message: 'ths resgistery is private?',
    },
    {
      type: 'input',
      name: 'author',
      message: 'author?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'description?',
    },
    {
      type: 'input',
      name: 'license',
      message: 'license?',
    },
    {
        type: 'input',
        name: 'serverName',
        message: '服务名称(必填)?',
      },
  ];