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

// --- CREATE ---
async function addAttendance(student, date, status) {
  await db.collection('asistencias').add({
    student,
    date,
    status,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });
}

// Captura el submit del formulario y extrae los valores
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const student = studentInput.value.trim();
  const date = dateInput.value;
  const status = statusInput.value;

  await addAttendance(student, date, status);
  form.reset();
});

// --- READ ---
function renderRow(doc) {
  const { student, date, status } = doc.data();
  return `
    <tr data-id="${doc.id}">
      <td>${student}</td>
      <td>${date}</td>
      <td>${status}</td>
      <td></td>
    </tr>
  `;
}

// Escucha cambios en la colección en tiempo real y re-renderiza la tabla
db.collection('asistencias')
  .orderBy('createdAt', 'desc')
  .onSnapshot((snapshot) => {
    tableBody.innerHTML = snapshot.docs.map(renderRow).join('');
  });
