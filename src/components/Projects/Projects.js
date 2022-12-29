import {NavLink} from './ProjectsStyles'
import React, {useEffect} from 'react';
import Transition from '../../Transition'
import {Link} from 'react-router-dom'
import {BlogCard, CardInfo,GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import {Section, SectionTitle, SectionText} from '../../styles/GlobalComponents';


const Projects = (props) => {

	const summary = "Aqui estão alguns projetos em que trabalhei enquanto estava aprendendo novas tecnologias."	

	useEffect(async ()=>{
		document.title='Pedro Lauer';
		try{
		const result = await fetch('http://localhost:3000/this',{
		method:'POST',	
		headers:{"Content-Type":"application/json"},
		body:JSON.stringify({lang:1, page:1})
		})
		const data = await result.json();
			console.log(data);
		console.log(data);
	
		}catch(e){
				console.log(e);
		}	
		},[]);
	return (
		<Transition>
		<Section nopadding id="projects">
		<SectionTitle main>{props.data.title_1}</SectionTitle>
		<SectionText >{props.data.sub_1}</SectionText>
		<p>{summary}</p>
		<GridContainer>
		{props.data.projects.map((project,i)=>{return(<BlogCard key={'card_'+i}>
				<Img src={project.image}/>
				<TitleContent>
				<HeaderThree>{project.title}
				</HeaderThree>
				<Hr/>
				</TitleContent>
				<CardInfo>{project.description}</CardInfo>
				<div>
				<TitleContent>Stack</TitleContent>
			<TagList>{project.stacks.map((stack,i)=>(<Tag key={i}>{stack.stack}</Tag>))}</TagList>
			
				</div>
				<UtilityList>
				<NavLink to='/details' state={{projs:i}} >Details</NavLink>
				<NavLink to="/">Source</NavLink>
				</UtilityList>
				</BlogCard>)})}
		</GridContainer>
		</Section>
		</Transition>
);}


export default Projects;
