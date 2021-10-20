import { MovieData } from '../interfaces/MovieData.js';

const dataUrl = "https://616f79a0715a630017b39c91.mockapi.io/data";

async function getData() {
  try {
    const rawData = await fetch(dataUrl).then(res => res.json());
    // console.log("RAW");
    // console.log(rawData);
    return rawData;
  } catch (err) {
    return Promise.reject(err);
  }
}
function cardOnClick (this: HTMLElement , e: MouseEvent) {
  location.href = location.origin + location.pathname + '#c' + this.id;
}
function homeOnClick() {
  location.href = location.origin + location.pathname;
}
function filterData(data: MovieData[], input: string) {
  const filteredData = data.filter(data => {
    const regex = new RegExp(input.toLowerCase());
    return regex.test(data.title.toLowerCase());
  })
  return filteredData;
}

export { getData, cardOnClick, homeOnClick, filterData };