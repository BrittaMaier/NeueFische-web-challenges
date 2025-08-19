console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) {
    console.error("Bad response, status code: ", response.status);
  }
  return data;
}

const data = await fetchData();
//const firstElementofArray = Data.results;
console.log("Data: ", data);
//console.log("Element of Data: ", firstElementofArray);
console.log("Data results value: \n Array ", data.results);
console.log("R2D2's eye-color: ", data.results[2]["eye_color"]);
