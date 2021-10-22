var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const dataUrl = "https://616f79a0715a630017b39c91.mockapi.io/data";
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const rawData = yield fetch(dataUrl).then(res => res.json());
            // console.log("RAW");
            // console.log(rawData);
            return rawData;
        }
        catch (err) {
            return Promise.reject(err);
        }
    });
}
function cardOnClick(e) {
    location.href = location.origin + location.pathname + '#c' + this.id;
}
function homeOnClick() {
    location.href = location.origin + location.pathname;
}
function filterData(data, input) {
    const filteredData = data.filter(data => {
        const regex = new RegExp(input.toLowerCase());
        return regex.test(data.title.toLowerCase());
    });
    return filteredData;
}
export { getData, cardOnClick, homeOnClick, filterData };
