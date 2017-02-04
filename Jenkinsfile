#!groovy
//nodeJS Jenkinsfile
node{
  checkout scm
  sh('cp .gitmodules-csp .gitmodules')
  sh('git submodule update --init --remote sam-ui-elements-submodule')
}
fileLoader.fromGit('nodejs-pipeline', 'https://csp-github.sam.gov/GSA-IAE-Infrastructure/pipeline.git', 'master', 'prod-github-cred', '')
