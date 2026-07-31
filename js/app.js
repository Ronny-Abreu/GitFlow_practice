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

// Captura el submit del formulario y extrae los valores
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const student = studentInput.value.trim();
  const date = dateInput.value;
  const status = statusInput.value;

  await addAttendance(student, date, status);
  form.reset();
});
