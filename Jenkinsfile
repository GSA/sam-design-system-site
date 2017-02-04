#!groovy
//nodeJS Jenkinsfile
node{
  checkout scm
  sh('cp csptest.txt .gitmodules')
  sh('git submodule sync')
  sh('git submodule update --init')
}
fileLoader.fromGit('nodejs-pipeline', 'https://csp-github.sam.gov/GSA-IAE-Infrastructure/pipeline.git', 'master', 'prod-github-cred', '')
