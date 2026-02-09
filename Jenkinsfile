pipeline {
    agent any
    tools {
        nodejs 'NodeJS-20'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
