import endpoint from './db'
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

	useEffect(()=>{	
		const fetchData = async ()=>{
			try{
				const result = await fetch(endpoint+'/this',{
				method:'POST',	
				headers:{"Content-Type":"application/json"},
				body:JSON.stringify({lang:lang, page:0})
			})
			
			const data = await result.json();
			console.log(data)
			
			if(data === null){ data ={} }
			setState(data);
			console.log(data);
			}catch(e){
				return null;
			}
		}


	fetchData()
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

		<Route path="/" element={<Home browse={browse} lang = {lang} data={state}/>}/>	
		<Route path="projects" element={<Projects lang = {lang} browse={browse} data={state}/>}/>
		<Route path="tech" element={<Technologies data={state}/>}/>
		<Route path="languages" element={<Langs data={state}/>}/>
		<Route path="details" component={<Details browse={browse} lang={lang}/>} element={<Details lang={lang}/>}/>
		<Route path="test" element={<Projs/>}/>

		</Routes>
		</AnimatePresence>
		</BrowserRouter>
		</Layout>
		</Box>
	);
}

ReactDOM.render(<Page style={{color:"black"}}/>,document.getElementById('root'));
