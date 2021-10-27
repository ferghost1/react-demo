import React, {useState} from 'react';
import GrandChildComp from './grandChildComp/grandChildComp';

export default (props) => {
    // const [textFromChildComp, setTextFromChildComp] = useState('text from child Comp');
    // React.store.childComp = {textFromChildComp, setTextFromChildComp};

    // const {text,setText} = React.store.app;
    console.log('tg con');
    
    return <>
        <div>
            {/* text from App comp: {text} */}
        </div>
        <div>
            text from child comp: {props.text}
        </div>
        <GrandChildComp key="cacas"></GrandChildComp>
        {/* <div>
            <br/><br/><br/><br/>
            <h4>Grand child ne </h4>
            
            <div onClick={() => BamChoi()}>Bam choi ban</div>
        </div> */}
    </>
} 