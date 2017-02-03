#!groovy
//nodeJS Jenkinsfile
node{
  checkout scm
  sh('ssh -T git@csp-github.sam.gov')
  sh('git submodule update --init')
}
fileLoader.fromGit('nodejs-pipeline', 'https://csp-github.sam.gov/GSA-IAE-Infrastructure/pipeline.git', 'master', 'prod-github-cred', '')
