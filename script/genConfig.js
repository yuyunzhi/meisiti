// 后期这个会用ts重写

const moment = require('moment')
const fe = require('fs-extra')

const path = require('path')

function resolve (p) {
  return path.resolve(__dirname, p)
}

const configPath = resolve('../config/index.json')

const config = fe.existsSync(configPath) ? require(configPath) : { online: {}, pre: {} }

const env = process.argv.splice(2)[0]

function renderConfigData (env) {
  if (env) {
    config[env] = {
      // 用于生成每次release的版本号
      release: moment().format('YYYY-MM-DD HH:mm')
    }
  }

  return `${JSON.stringify(config, undefined, 2)}`
}

fe.writeFileSync(configPath, renderConfigData(env), { encoding: 'utf8' })
