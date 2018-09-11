import axios from 'axios';

export default class Search {
    constructor(query){
        this.query = query;
    }

    async getResults(){
        const proxy = 'https://cors-anywhere.herokuapp.com/'
        const base = 'https://food2fork.com/api/search'
        const key = 'a00bc35f5b41ddea861f1767df24aaa5';
        try {
            const res = await axios(`${proxy}${base}?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
        } catch(error){
            alert(error);
        }
        
    }

}