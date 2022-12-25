import {NavLink} from './ProjectsStyles'
import React from 'react';
import Transition from '../../Transition'
import {Link} from 'react-router-dom'
import {BlogCard, CardInfo,GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import {Section, SectionTitle, SectionText} from '../../styles/GlobalComponents';


const Projects = (props) => {

	
	return (
		<Transition>
		<Section nopadding id="projects">
		<SectionTitle main>{props.data.title_1}</SectionTitle>
		<SectionText >{props.data.sub_1}</SectionText>
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
