import './App.css';
import ChildComp from './components/childComp/childComp';
import React, {useState} from 'react';
import GrandChildComp from './components/childComp/grandChildComp/grandChildComp';

window.app = {};
window.React = React;
React.store = {};

function App() {
	console.log('app ne');
	const [text, setText] = useState('default text');
	const [text2, setText2] = useState('default text 2');
	React.store.app = {text, setText, text2, setText2};
	
	function getChildFromParent(it) {
		const {textFromChildComp, setTextFromChildComp} = React.store.childComp;
		console.log(textFromChildComp);
		setTextFromChildComp(it);
	}

	window.app = {...window.app, text, setText, getChildFromParent};
	
	return (
		<div className="App">
			<ChildComp text={text}></ChildComp>
			<ChildComp text={text2}></ChildComp>
			<div onClick={(e) => getChildFromParent(Math.random())}> Bam day ne</div>
		</div>
	);
}

export default App;
