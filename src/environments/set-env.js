const fs = require('fs')
const helpers = require('./helpers')
const path = require('path')

const STATIC_PATH = path.join(__dirname, '../_static')
const DOCS_PATH = path.join(__dirname, '../_docs')

const DOCS_MODULE_PATH =
  path.join(__dirname, '../_docs/doc.module.dynamic.ts')
const DOCS_ROUTE_PATH =
  path.join(__dirname, '../_docs/doc.routes.dynamic.ts')

const STATIC = JSON.stringify(helpers.getStaticDirStructure(STATIC_PATH))
const DOCS = JSON.stringify(helpers.getUIKitStructure(DOCS_PATH))
const ENV = process.env.ENV

const config = {
  STATICPAGES: STATIC,
  DOCS: DOCS,
  ENV: ENV,
  STATIC_PATH: STATIC_PATH,
  DOCS_PATH: DOCS_PATH,
  DOCS_MODULE_PATH: DOCS_MODULE_PATH,
  DOCS_ROUTE_PATH: DOCS_ROUTE_PATH
}

run(config)

function run (config) {

  helpers.writeModuleFile(config.DOCS_PATH, config.DOCS_MODULE_PATH)
  helpers.writeRoutesFile(config.DOCS_PATH, config.STATIC_PATH, config.DOCS_ROUTE_PATH)

  writeEnvFile(config)

}

function writeEnvFile (config) {

  const envFile = path.join(__dirname, './environment.ts')
  
  const content = setVariables(config);

  fs.writeFile(envFile, content, (err) => {

    if (err) {

      handleError(err)

    }

  })

}

function setVariables (config) {

  return `
/* tslint:disable */
import { EnvironmentVariables } from './environment.d';

export const environment: EnvironmentVariables = {
  STATICPAGES: ${config.STATICPAGES},
  DOCS: ${config.DOCS},
  ENV: '${config.ENV}',
  production: ${config.ENV === 'prod' ? true : false}
}\n`

}

function handleError (err) {

  if (err) {

    throw new Error(err)

  }

}
