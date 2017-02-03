#!groovy
//nodeJS Jenkinsfile
node{
  sh('git submodule update --init --remote sam-ui-elements-module')
}
fileLoader.fromGit('nodejs-pipeline', 'https://csp-github.sam.gov/GSA-IAE-Infrastructure/pipeline.git', 'master', 'prod-github-cred', '')
