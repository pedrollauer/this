import endpoint from '../../db'
import {NavLink} from './ProjectsStyles'
import React, {useEffect, useState} from 'react';
import Transition from '../../Transition'
import {Link} from 'react-router-dom'
import {BlogCard, CardInfo,GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import {Section, SectionTitle, SectionText} from '../../styles/GlobalComponents';


const Projects = (props) => {

	const summary = "Aqui estão alguns projetos em que trabalhei enquanto estava aprendendo novas tecnologias."	

	let [text, setText] = useState({projects:[]})
	useEffect(()=>{
	
		const fetchData = async()=>{
			try{
				const result = await fetch(endpoint+'/this',{
				method:'POST',	
				headers:{"Content-Type":"application/json"},
				body:JSON.stringify({lang: props.lang, page: 2})
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

	return (
		<Transition>
		<Section nopadding id="projects">
		<SectionTitle main>{text.title_1}</SectionTitle>
		<SectionText >{text.sub_1}</SectionText>
		<GridContainer>
		{text.projects.map((project,i)=>{return(<BlogCard key={'card_'+i}>
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
				<NavLink to='/details' state={{projs:project.proj_id}} >Details</NavLink>
				<NavLink to="/">Source</NavLink>
				</UtilityList>
				</BlogCard>)})}
		</GridContainer>
		</Section>
		</Transition>
);}


export default Projects;
