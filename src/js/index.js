import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

// Global State of App
//     Search object
//     Current recipe object
//     Shopping list object
//     Liked Recipes
const state = {};

const controlSearch = async () => {
    // get query from controller
    const query = searchView.getInput();

    if(query) {
        // add to state
        state.search = new Search(query);
        
        //prepare ui for results
        searchView.clearInput();
        searchView.clearResults();
        // search for recipes
        await state.search.getResults();

        //render recipes
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});


