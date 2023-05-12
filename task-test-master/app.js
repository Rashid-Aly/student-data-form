// alert("Remove the Alert and Start implementing the functions")


// let form = document.querySelector('form');
// let table = document.querySelector('table');
// let searchInput = document.getElementById('search');
// let sortSelect = document.getElementById('sort-select');
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   let studentName = document.getElementById('studentName').value;
//   let fatherName = document.getElementById('fatherName').value;
//   let email = document.getElementById('email').value;
//   let studentID = document.getElementById('studentID').value;
//   let obtainedMarks = document.getElementById('obtainedMarks').value;

//   let newRow = document.createElement('tr');
//   newRow.innerHTML = `
//   <td>${studentName}</td> 
//    <td>${fatherName}</td>
//     <td>${email}</td>
//     <td>${studentID}</td>
//     <td>100</td>
//     <td>${obtainedMarks}</td>
//   `;
//   table.querySelector('tbody').appendChild(newRow);
//   form.reset();
// });

// // here is search filter code 

// searchInput.addEventListener('input', () => {
//   let searchTerm = searchInput.value.toLowerCase();
//   let rows = table.querySelectorAll('tbody tr');
//   rows.forEach((row) => {
//     let studentName = row.querySelector('td:nth-child(1)').textContent.toLowerCase();
//     let fatherName = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
//     let studentID = row.querySelector('td:nth-child(4)').textContent.toLowerCase();
//     let shouldShowRow = studentName.includes(searchTerm) ||
//                           fatherName.includes(searchTerm) ||
//                           studentID.includes(searchTerm);
//     row.style.display = shouldShowRow ? '' : 'none';
//   });
// });

// // sortSelect.addEventListener('change', () => {
// //   let sortType = sortSelect.value;
// //   let rows = Array.from(table.querySelectorAll('tbody tr'));

// //   rows.sort((rowA, rowB) => {
// //     let valueA = rowA.querySelector(`td:nth-child(${sortType === 'name' ? 1 : sortType === 'father-name' ? 2 : 4})`).textContent.toLowerCase();
// //     let valueB = rowB.querySelector(`td:nth-child(${sortType === 'name' ? 1 : sortType === 'father-name' ? 2 : 4})`).textContent.toLowerCase();
// //     if (valueA < valueB) return -1;
// //     if (valueA > valueB) return 1;
// //     return 0;
//   // });


//   function sortTable() {
//     var table, rows, switching, i, x, y, shouldSwitch;
//     table = document.querySelector("table");
//     switching = true;
//     while (switching) {
//       switching = false;
//       rows = table.rows;
//       for (i = 1; i < (rows.length - 1); i++) {
//         shouldSwitch = false;
//         x = rows[i].getElementsByTagName("td")[0];
//         y = rows[i + 1].getElementsByTagName("td")[0];
//         if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//           shouldSwitch = true;
//           break;
//         }
//       }
//       if (shouldSwitch) {
//         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//         switching = true;
//       }
//     }
//   }

//     rows.forEach((row) => {
//     table.querySelector('tbody').appendChild(row);
//   });
// });

let form = document.querySelector('form');
// let table = document.querySelector('table');
// let searchInput = document.getElementById('search');
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

// searchInput.addEventListener('input', () => {
//   let searchTerm = searchInput.value.toLowerCase();
//   let rows = table.querySelectorAll('tbody tr');
//   rows.forEach((row) => {
//     let studentName = row.querySelector('td:nth-child(1)').textContent.toLowerCase();
//     let fatherName = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
//     let studentID = row.querySelector('td:nth-child(4)').textContent.toLowerCase();
//     let shouldShowRow = studentName.includes(searchTerm) ||
//                         fatherName.includes(searchTerm) ||
//                         studentID.includes(searchTerm);
//     row.style.display = shouldShowRow ? '' : 'none';
//   });
// });

// const searchBtn = document.getElementById("search-btn");
// const searchInput = document.getElementById("search");
// const table = document.querySelector("table"); // Caching the table element
// searchBtn.addEventListener("click", function () {
//   let searchTerm = searchInput.value.toLowerCase();
//   let rows = table.querySelectorAll("tbody tr");
//   for (let i = 0; i < rows.length; i++) {
//     let row = rows[i];
//     let studentname = row.querySelector("td:nth-child(1)").textContent.toLowerCase();
//     let fathername = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
//     let studentID = row.querySelector("td:nth-child(4)").textContent.toLowerCase();
//     let searchRowBy = studentname.includes(searchTerm) || fathername.includes(searchTerm) || studentID.includes(searchTerm);
//     // row.style.display = searchRowBy ? "" : "none";
//   }
// });

// const searchBtn = document.getElementById("search-btn");
// const searchInput = document.getElementById("search");
// const table = document.querySelector("table"); // Caching the table element

// // Function to filter the table rows based on the search term


// function filterTableRows() {
//   let searchTerm = searchInput.value.toLowerCase();
//   let rows = table.querySelectorAll("tbody tr");
//   for (let i = 0; i < rows.length; i++) {
//     let row = rows[i];
//     let studentname = row.querySelector("td:nth-child(1)").textContent.toLowerCase();
//     let fathername = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
//     let studentID = row.querySelector("td:nth-child(4)").textContent.toLowerCase();
//     let searchRowBy = studentname.includes(searchTerm) || fathername.includes(searchTerm) || studentID.includes(searchTerm);
//     row.style.display = searchRowBy ? "" : "none";
//   }
// }

// searchInput.addEventListener("input", function () {
//   if (searchInput.value === "") {
//     showTable();
//   }
// });

// searchBtn.addEventListener("click", filterTableRows);
// searchInput.addEventListener("input", filterTableRows);


const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search");
const table = document.querySelector("table");
// function to show table when search input is empty
function showTable() {
  let rows = table.querySelectorAll("tbody tr");
  for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    row.style.display = "";
  }
}
searchBtn.addEventListener("click", function () {
  let searchTerm = searchInput.value.toLowerCase();
  let rows = table.querySelectorAll("tbody tr");
  for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    let studentName = row.querySelector("td:nth-child(1)").textContent.toLowerCase();
    let fatherName = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
    let studentID = row.querySelector("td:nth-child(4)").textContent.toLowerCase();
    let searchRowBy = studentName.includes(searchTerm) || fatherName.includes(searchTerm) || studentID.includes(searchTerm)
    row.style.display = searchRowBy ? "" : "none";
  }
});
// add event listener to search input to show table when empty
searchInput.addEventListener("input", function () {
  if (searchInput.value === "") {
    showTable();
  }
});







sortSelect.addEventListener('change', () => {
  let sortType = sortSelect.value;
  let rows = Array.from(table.querySelectorAll('tbody tr'));

  rows.sort((rowA, rowB) => {
    let valueA = rowA.querySelector(`td:nth-child(${sortType === 'name' ? 1 : sortType === 'name' ? 2 : 4})`).textContent.toLowerCase();
    let valueB = rowB.querySelector(`td:nth-child(${sortType === 'father-name' ? 1 : sortType === 'father-name' ? 2 : 4})`).textContent.toLowerCase();
    if (valueA < valueB) return -1;
    if (valueA > valueB) return 1;
    return 0;
  });

  rows.forEach((row) => {
    table.querySelector('tbody').appendChild(row);
  });
});