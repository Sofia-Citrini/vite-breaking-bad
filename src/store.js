import {reactive} from 'vue'
import axios from 'axios';

export const store = reactive({
    characters:[],
    loading: false,
    elements:"",
    selectGender:''
})

export function fetchCharactersList () {
    store.loading  = true;

    axios.get("https://swapi.dev/api/people/", {
        params: {
            search:store.selectGender
        }
    })
    .then ((resp) => {
        console.log(resp.data);
        console.log(resp.data.results);
        store.elements = resp.data.count;

        store.characters = resp.data.results;
        console.log(store.characters)

        store.loading = false;

        // setTimeout(() => {
        // store.loading = false;
        // }, 3000);

        // for (let i = 0; i < store.characters.length; i++){
        //     axios.get(store.characters[i].homeworld)
        //     .then ((resp) => {
        //         store.characters[i].homeworld = resp.data.name;
        //     })
        // }
    })
    .catch ((error) => {
        alert("l'operazione non é andata a buon fine");
        store.loading = false;
    })
}