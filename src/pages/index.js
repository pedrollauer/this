import Langs from '../components/Langs/Langs'
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import {useEffect,useState} from 'react'
const Home = () => {
	let [state,setState]=useState({projects:[]});

	useEffect(async ()=>{
	try{
	const result = await fetch('http://localhost:3000/users',{
	method:'POST',	
	headers:{"Content-Type":"application/json"},
	body:JSON.stringify({lang:0})
	})
	const data = await result.json();
		console.log(data);
	console.log(data);
	setState(data);
	}catch(e){
			console.log(e);
		}
	},[]);
  return (
    <Layout data={state}>
       <Section grid>
        <Hero data={state} />
        <BgAnimation /> 
      </Section> 
      <Projects data={state} />
      <Technologies data={state} /> 
      <Langs data={state} />
    </Layout>
  );
};

export default Home;
