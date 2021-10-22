var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CardContainer } from "../components/CardContainer.js";
import { Filter } from '../components/Filter.js';
import { filterData } from '../plugin/utils.js';
import { MovieDetail } from '../components/MovieDetail.js';
export class Renderer {
    constructor(app, data) {
        this.app = app;
        this.data = data;
        this.currentPath = '';
        this.filteredData = [];
        this.searchInput = '';
        data.then(data => {
            this.filteredData = filterData(data, '');
        });
        // console.log("tes1");
    }
    setAllRendererNull() {
        let body = document.getElementById('body-page');
        body.innerHTML = '';
    }
    renderHome() {
        return __awaiter(this, void 0, void 0, function* () {
            const input = document.querySelector('.search-bar');
            const div = document.createElement('div');
            div.id = "card-container";
            this.app.append(div);
            const cardContainer = new CardContainer(div);
            if (input) {
                input.onkeyup = () => __awaiter(this, void 0, void 0, function* () {
                    this.searchInput = input.value;
                    yield this.data.then((data) => {
                        this.filteredData = filterData(data, this.searchInput);
                    });
                    div.innerHTML = '';
                    cardContainer.render(this.filteredData);
                });
            }
            if (this.filteredData) {
                cardContainer.render(this.filteredData);
            }
            else {
                const h1 = document.createElement('h1');
                h1.innerText = "Loading...";
                this.app.append(h1);
                // console.log("loading...");
            }
        });
    }
    getItemById(idNum) {
        this.data.then(data => this.item = data.find(d => d.id === idNum));
        // console.log(this.item);
    }
    renderDetailMovie(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.setAllRendererNull();
            yield this.getItemById(id);
            if (this.item) {
                const movieDetail = new MovieDetail(this.app);
                const itemRendered = this.item;
                movieDetail.render(itemRendered);
            }
            else {
                // console.log("rendering: page-" + id);
                const h1 = document.createElement('h1');
                h1.innerText = "Loading...";
                this.app.append(h1);
            }
        });
    }
    renderOnPageLoadUrlChange() {
        // console.log("Here1");
        this.currentPath = location.hash.substr(1);
        const path = this.currentPath.length > 1 ?
            parseInt(this.currentPath.substr(1, this.currentPath.length - 1)) :
            0;
        if (this.currentPath === '') {
            this.setAllRendererNull();
            const filter = new Filter(this.app);
            filter.render();
            this.renderHome();
        }
        else {
            if (this.currentPath[0] === 'c' && path > 0 && path <= this.filteredData.length) {
                this.renderDetailMovie(path);
            }
            else {
                this.setAllRendererNull();
                const h1 = document.createElement('h1');
                h1.innerText = "Wrong path";
                this.app.append(h1);
            }
        }
    }
}
