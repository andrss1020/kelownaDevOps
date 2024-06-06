pipeline{
    agent any

    environment {
    FIREBASE_DEPLOY_TOKEN = credentials('firebase-token')
    }

    stages{
        stage('Building'){
            steps{
                echo 'Building'
            }
        } 

         stage('Testing'){
            steps{
                echo 'Testing'
            }
        }

        stage('Staging'){
            steps{
                echo 'Staging'
            }
        }

        stage('Production'){
            steps{
                echo 'Production'
            }
        }
    }
}
