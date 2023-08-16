// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCjMQpIeAR3hP8iWcC6pL1ATOEzJ_tvJ80',
  authDomain: 'technet-e3187.firebaseapp.com',
  projectId: 'technet-e3187',
  storageBucket: 'technet-e3187.appspot.com',
  messagingSenderId: '188360583242',
  appId: '1:188360583242:web:c66ca6580ad392c2bc9eb3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
