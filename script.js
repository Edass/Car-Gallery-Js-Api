const BASE_URL = "https://carrental-v3-backend.herokuapp.com";
const listCars = document.querySelector(".listCars");
const tableContainer = document.querySelector(".container.table");

const fetchCars = (cb) => {
  const url = `${BASE_URL}/car/visitors/all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => cb(data));
};

const loadCars = (cars) => {
  let allCars = "";
  cars.forEach((item) => {
    allCars += ` <div class="card m-3">
        <img src="${BASE_URL}/files/display/${item.image[0]}" alt="">
        <div class="card-body">
        </div>
        <div class="card-title">
        <h3>${item.model}</h3>
        </div>
    </div>
`;
  });

  return allCars;
};

const descriptionTable = (car) => {
  const table = ` <img src="" alt="">
<h3></h3>
</div>
<table class="table">
<tr>
    <td>door</td>
    <td></td>
</tr>
<tr>
    <td>seat</td>
    <td></td>
</tr><tr>
    <td>seat</td>
    <td></td>
</tr><tr>
    <td>seat</td>
    <td></td>
</tr><tr>
    <td>seat</td>
    <td></td>
</tr><tr>
    <td>seat</td>
    <td></td>
</tr><tr>
    <td>seat</td>
    <td></td>
</tr><tr>
    <td>seat</td>
    <td></td>
</tr><tr>
    <td>seat</td>
    <td></td>
</tr><tr>
    <td>seat</td>
    <td></td>
</tr><tr>
    <td>seat</td>
    <td></td>
</tr><tr>
    <td>seat</td>
    <td></td>
</tr>
</table>`;
};

fetchCars((data) => {
  const cars = loadCars(data);
  listCars.innerHTML = cars;
});
