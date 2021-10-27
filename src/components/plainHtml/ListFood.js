import Redux from 'redux'
import store from 'redux/reducer/plainHtmlReducer'
import { ADD_FOOD } from 'const'


export default function () {
    window.store = store;

    store.subscribe(() => {
        let foodListEl = document.querySelector('#foodList');
        foodListEl.innerHTML = '';
        const foodList = store.getState().foodList;
        
        foodList.map((food) => {
            let itemEl = document.createElement('li');
            itemEl.innerText = food;
            foodListEl.appendChild(itemEl);
        }) 
    })

    return (<>
        <h2>Food List</h2>
        <ul id="foodList">

        </ul>
    </>)

}