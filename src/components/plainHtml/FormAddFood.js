import Redux from 'redux'
import store from 'redux/reducer/plainHtmlReducer'
import { ADD_FOOD } from 'const'


export default function () {
    function addFood(e) {
        e.preventDefault();

        let foodName = document.forms.form?.foodName?.value;
        if (!foodName) {
            alert('ko tim thay form'); return;
        }

        store.dispatch({
            type: ADD_FOOD,
            data: { foodName }
        })
    }

    return (<>
        <form id="form" onSubmit={addFood}>
            <label>Food</label>: <input id="foodName" type="text" />
        </form>
    </>)

}