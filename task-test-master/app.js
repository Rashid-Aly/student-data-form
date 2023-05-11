// alert("Remove the Alert and Start implementing the functions")


let form = document.querySelector('form');
let table = document.querySelector('table');
let searchInput = document.getElementById('search');
let sortSelect = document.getElementById('sort-select');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let studentName = document.getElementById('studentName').value;
  let fatherName = document.getElementById('fatherName').value;
  let email = document.getElementById('email').value;
  let studentID = document.getElementById('studentID').value;
  let obtainedMarks = document.getElementById('obtainedMarks').value;

  let newRow = document.createElement('tr');
  newRow.innerHTML = `
  <td>${studentName}</td> 
   <td>${fatherName}</td>
    <td>${email}</td>
    <td>${studentID}</td>
    <td>100</td>
    <td>${obtainedMarks}</td>
  `;
  table.querySelector('tbody').appendChild(newRow);
  form.reset();
});

// here is search filter code 

searchInput.addEventListener('input', () => {
  let searchTerm = searchInput.value.toLowerCase();
  let rows = table.querySelectorAll('tbody tr');
  rows.forEach((row) => {
    let studentName = row.querySelector('td:nth-child(1)').textContent.toLowerCase();
    let fatherName = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
    let studentID = row.querySelector('td:nth-child(4)').textContent.toLowerCase();
    let shouldShowRow = studentName.includes(searchTerm) ||
                          fatherName.includes(searchTerm) ||
                          studentID.includes(searchTerm);
    row.style.display = shouldShowRow ? '' : 'none';
  });
});

sortSelect.addEventListener('change', () => {
  let sortType = sortSelect.value;
  let rows = Array.from(table.querySelectorAll('tbody tr'));

  rows.sort((rowA, rowB) => {
    let valueA = rowA.querySelector(`td:nth-child(${sortType === 'name' ? 1 : sortType === 'father-name' ? 2 : 4})`).textContent.toLowerCase();
    let valueB = rowB.querySelector(`td:nth-child(${sortType === 'name' ? 1 : sortType === 'father-name' ? 2 : 4})`).textContent.toLowerCase();
    if (valueA < valueB) return -1;
    if (valueA > valueB) return 1;
    return 0;
  });

    rows.forEach((row) => {
    table.querySelector('tbody').appendChild(row);
  });
});