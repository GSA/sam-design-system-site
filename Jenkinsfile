#!groovy
//nodeJS Jenkinsfile
node{
  checkout scm
  sh('cat .gitmodules')
  sh('cp csptest.txt .gitmodules')
  sh('cat .gitmodules')
  sh('git submodule update --init')
}
fileLoader.fromGit('nodejs-pipeline', 'https://csp-github.sam.gov/GSA-IAE-Infrastructure/pipeline.git', 'master', 'prod-github-cred', '')
