import {ThemeProvider,createGlobalStyle}from 'styled-components'
import {BrowserRouter,Routes,Route, useLocation} from 'react-router-dom';
import {theme1} from './themes/default'
import ReactDOM from 'react-dom'
import Home from './App'
import BackgroundAnimation from './components/BackgrooundAnimation/BackgroundAnimation';
import Details from './components/Details/details'
import {motion,AnimatePresence} from 'framer-motion';
const GlobalStyle = createGlobalStyle`
  body {
    color: white;
    background-color:black;
  }
`
const Page = ()=>{
	return(
		<BrowserRouter>
	  <GlobalStyle/>
		<AnimatePresence exitBeforeEnter >
		<Routes>

		<Route path="/" element={<Home/>}/>
		<Route path="projects" element={<BackgroundAnimation/>}/>
		<Route path="details" element={<Details/>}/>

		</Routes>
		</AnimatePresence>
		</BrowserRouter>
	);
}

ReactDOM.render(<Page style={{color:"black"}}/>,document.getElementById('root'));
