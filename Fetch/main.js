var getData = document.querySelector('.show');
var clearData = document.querySelector('.clear');
var showDetails = document.querySelector('.details');

getData.addEventListener('click', async () => {

  const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => data)

  let tableBodyData = "";

  for (var i = 0; data.length > i; i++) {
    tableBodyData += `
    <tr>
      <td>${data[i].id}</td>
      <td >${data[i].title}</td>
      <td>${data[i].completed}</td>
      <td>${data[i].userId}</td>
    </tr>
    `
  }
  const tableAPI = `
  <table border="collapse">
    <thead>
      <tr>
        <td>Id</td>
        <td style="text-align:center;">Title</td>
        <td>Completed</td>
        <td>User ID</td>
      </tr>
    </thead>
    <tbody>
    ${tableBodyData}
    </tbody>
  </table>
  `
  showDetails.innerHTML = tableAPI;
});
getData.style.cursor = "pointer";

clearData.addEventListener('click', () => {
  showDetails.innerHTML = '';
});