import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import {Fragment,useEffect} from 'react';
import {Section,SectionDivider} from '../../styles/GlobalComponents'
import {Menu,VideoContainer,Description,Video,FeatureCard,FeatureImage, Return} from './detailsStyles';
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
		{title:'Dynamic Content',description:"Because this app is intended to be a dynamic display of all my future projects, all projects are fetched form a mysql database in a way that makes it possible to change the text for a give project simply by updating it's entry in the database.",image:'/images/details/this/5.png'},{title:'Themes',description:'All the styles is this app are provided my the styledcomponents API, which makes it easier to keep track of loads of CSS code, enabling responsivity, light and dark themes, as well as a more readable code.',image:'/images/details/this/4.png'}
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
	console.log(projs);

	useEffect(async ()=>{
		document.title='Pedro Lauer';
	try{
	const result = await fetch('http://localhost:3000/this/details',{
	method:'POST',	
	headers:{"Content-Type":"application/json"},
	body:JSON.stringify({lang:1})
	})
	const data = await result.json();
		console.log(data);
	console.log(data);
	}catch(e){
			console.log(e);
	}	
	},[]);

	return(
<Fragment>


		<Section>
		<Menu>		<Return><Link to="/"><AiOutlineLeft/></Link></Return>
		<Title>
		{features.application}
		</Title>
		</Menu>
		<VideoContainer>
		<Video>
		<iframe width="500" height="315" src="https://www.youtube.com/embed/CvFH_6DNRCY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</Video>	
		</VideoContainer>

		</Section>
		<Section>
		<FeatureCard>
		<Ingredients ingredients={features.dependencies}/>
		<br/>

		</FeatureCard>

		</Section>

		{features.features.map((feature,i)=>{
			return(
			<Section key={i}>
			<FeatureCard key={i+100}>
			<Description key={i+1000}>
				<h2>{feature.title}<br/></h2>
				<h5>{feature.description}</h5>
			</Description>
			<FeatureImage key={i+10000} style={{objectFit:'cover'}} src={feature.image}/>
			</FeatureCard>
			</Section>);})}

	</Fragment>
		);
}

export default Details;
