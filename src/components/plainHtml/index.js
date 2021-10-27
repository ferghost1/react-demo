import Redux from 'redux'
import store from 'redux/reducer/plainHtmlReducer'
import FormAddFood from 'components/plainHtml/FormAddFood';
import ListFood from 'components/plainHtml/ListFood';

window.app = {store};

export default function () {
    
    return (<>
        <FormAddFood/>
        <ListFood/>
    </>)

}