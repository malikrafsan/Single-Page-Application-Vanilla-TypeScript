import { MovieData } from '../interfaces/MovieData.js';

const dataUrl = "https://my-json-server.typicode.com/malikrafsan/TestingAPI/data";

async function getData() {
  try {
    const rawData = await fetch(dataUrl).then(res => res.json());
    return rawData;
  } catch (err) {
    return Promise.reject(err);
  }
}
function cardOnClick (this: HTMLElement , e: MouseEvent) {
  location.href = location.origin + location.pathname + '#details' + this.id;
  console.log(location.hash);
}
function homeOnClick() {
  location.href = location.origin + location.pathname;
  console.log("back to home");
}
function filterData(data: MovieData[]) {
  return data.filter(data => {
    true;
  });
}

export { getData, cardOnClick, homeOnClick, filterData };