// SDK
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const form = document.getElementById('attendance-form');
const studentInput = document.getElementById('student');
const dateInput = document.getElementById('date');
const statusInput = document.getElementById('status');
const tableBody = document.getElementById('table-body');
const formTitle = document.getElementById('form-title');
const submitBtn = document.getElementById('submit-btn');
