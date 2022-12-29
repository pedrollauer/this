import Title from './components/NameBox/NameBox'
import About from './components/About/About'
import Header from './components/Header/Header'
import { Layout } from "./layout/Layout";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ReactDOM from 'react-dom'
import {useState,useEffect} from 'react';
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Projs from './Projs'
import Details from './components/Details/details'
import {motion,AnimatePresence} from 'framer-motion';
import Langs from './components/Langs/Langs'
import Technologies from './components/Technologies/Technologies'
import Box from './styles/GlobalComponents/Container'

const Page = ()=>{

	let [state,setState] = useState({projects:[]});
	let [lang,setLang] = useState(1);
	let [page, setPage] = useState(1);

	useEffect(async ()=>{
	document.title='Pedro Lauer';
	try{
		console.log(lang);
	const result = await fetch('http://localhost:3000/this',{
	method:'POST',	
	headers:{"Content-Type":"application/json"},
	body:JSON.stringify({lang:lang, page:page})
	})
	const data = await result.json();
		console.log(data);
	console.log(data);
	setState(data);
	}catch(e){
			console.log(e);
	}	
	},[lang]);

	const browse = (destination) =>{
		setPage(destination)
	}

	const switchLanguage = ()=>{
		setLang(lang===1?2:1);
		console.log(lang)
	}	
	return(
		<Box>
		<Layout data={state}>
		<BrowserRouter>

     <Header currentLang={lang} data={state} setLang={switchLanguage}/>
		<AnimatePresence exitBeforeEnter >
		<Routes>

		<Route path="/" element={<Home browse={browse} data={state}/>}/>	
		<Route path="projects" element={<Projects browse={browse} data={state}/>}/>
		<Route path="tech" element={<Technologies data={state}/>}/>
		<Route path="languages" element={<Langs data={state}/>}/>
		<Route path="details" component={<Details browse={browse} />} element={<Details/>}/>
		<Route path="test" element={<Projs/>}/>

		</Routes>
		</AnimatePresence>
		</BrowserRouter>
		</Layout>
		</Box>
	);
}

ReactDOM.render(<Page style={{color:"black"}}/>,document.getElementById('root'));
