import endpoint from '../../db'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import { Fragment, useEffect, useState} from 'react';
import {SectionDivider} from '../../styles/GlobalComponents'
import {Section, Menu,VideoContainer,Description,Video,FeatureCard,FeatureImage, Return} from './detailsStyles';
import Ingredients from '../Ingredients/Ingredients'
import {Title} from './detailsStyles'
import '../../style.css'
import {AiOutlineLeft} from 'react-icons/ai'
const features={
	application:'this',
    video:"https://www.youtube.com/embed/CvFH_6DNRCY",
	videoDescription:'This video outlines the main details that went into building this app',
	dependencies:['nodejs','styled-components','react','react-icons'],
	features:[
		{title:'Dynamic Content',description:"Because this app is intended to be a dynamic display of all my future projects, all projects are fetched form a mysql database in a way that makes it possible to change the text for a give project simply by updating it's entry in the database.",image:'/images/details/this/5.png'},
		{title:'Themes',description:'All the styles is this app are provided my the styledcomponents API, which makes it easier to keep track of loads of CSS code, enabling responsivity, light and dark themes, as well as a more readable code.',image:'/images/details/this/4.png'}
	]	
}

const transtions={
	in:{
		opacity:1,
		y:0,
	},
	out:{
		opacity:0,
		y:"-100%",
	}
}
const Details=(props)=>{

	const {projs} = useLocation().state;
	const [text, setText] = useState({features:[], dependencies: [], strings:[{dependencies:""}]})
	useEffect(()=>{
	
		console.log("Refute this!!")
		console.log(projs)
		const fetchData = async()=>{
			try{
				const result = await fetch(endpoint+'/this',{
				method:'POST',	
				headers:{"Content-Type":"application/json"},
				body:JSON.stringify({lang: props.lang, page: 3, proj_id: projs})
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
	},[props.lang])

	return(
<Fragment>
		<Section>
		<Menu>		
		<Title>
		<Return><Link to="/"><AiOutlineLeft/></Link></Return>
			{text.name}	
		</Title>
		</Menu>

		<VideoContainer>
		<Video>
		<iframe width="100%" height="315" src={text.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</Video>	
		</VideoContainer>

		</Section>
		<Section>
		<FeatureCard>
		<Ingredients strings = {text.strings} ingredients={text.dependencies}/>
		<br/>

		</FeatureCard>

		</Section>

		{text.features.map((feature,i)=>{
			return(
			<Section key={i}>
			<FeatureCard key={i+100}>
			<Description key={i+1000}>
				<h2>{feature.name}<br/></h2>
				<h5>{feature.description}</h5>
			</Description>
			<FeatureImage key={i+10000} style={{objectFit:'cover'}} src={feature.image}/>
			</FeatureCard>
			</Section>);})}

	</Fragment>
		);
}

export default Details;
