fetch("http://localhost:8000/index.php")
.then(response => response.json())
.then(result => {
  console.log(result);

  const tbody = document.querySelector("#tabel-siswa tbody");
  tbody.innerHTML = "";

  result.data.forEach((student, index) => {
    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${student.nama}</td>
        <td>${student.email}</td>
        <td>${student.kelas}</td>
        <td>${student.wali_kelas}</td>
        <td>${student.bapak}</td>
        <td>${student.ibu}</td>
        <td>${student.no_family}</td>
        <td>${student.contact}</td>
        <td>${student.status}</td>
        <td>${student.mapel}</td>
        <td>${student.nilai}</td>
        <td><button>Edit</button></td>
        <td><button>Delete</button></td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
})
.catch(error => console.error(error));