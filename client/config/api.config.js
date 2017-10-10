const isProdMode = Object.is(process.env.NOOD_ENV,'production')

module.exports = {
    baseUrl:isProdMode ? 'http://api.vnshop.cn/api/' : 'api/'
}