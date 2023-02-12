import About from '../About/About';
import React,{Fragment, useEffect, useState} from 'react';
import {SectionTitle, SectionText } from '../../styles/GlobalComponents';
import {Text} from './HomeStyles';
import Transition from '../../Transition'

const Home = (props) => {

	let [text, setText] = useState({})
	
	useEffect(()=>{
	
	const fetchData = async()=>{
		try{
			const result = await fetch('http://localhost:3000/this',{
			method:'POST',	
			headers:{"Content-Type":"application/json"},
			body:JSON.stringify({lang: props.lang, page: 1})
		})
		
		let data = await result.json();
		console.log(data)
		if(data === null){ data ={} }	
		setText(data)

		}catch(e){
			return null;
		}
	}

	fetchData()


	},[props.lang]);
return(
	<Fragment>
<Transition>
	<About text={text}/>

	<SectionTitle>{text.title}<br/></SectionTitle>
	  <Text>
		 <p>{text.paragraph_1}</p>
		 <p>{text.paragraph_2}</p>
		 <p>{text.paragraph_3}</p>
	  </Text>



	</Transition>
	</Fragment>
)}

export default Home;
