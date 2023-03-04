import React from 'react';
import Transition from '../../Transition'
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = (props) =>  (
	<Transition>
		<Section id="tech">

		<SectionTitle main>{props.data.title_3}</SectionTitle>
		<SectionText>
		{props.data.sub_2}	
		<List>
		<ListItem>
		<DiFirebase size="3rem"/>
		<ListContainer>
				<ListTitle>Front-End</ListTitle>
		</ListContainer>
		<ListParagraph>
		React.js, HTML, CSS
		</ListParagraph>
		</ListItem>
		<ListItem>
		<DiFirebase size="3rem"/>
		<ListContainer>
				<ListTitle>Back-End</ListTitle>
		</ListContainer>
		<ListParagraph>
		Node.js/Java
		</ListParagraph>
		</ListItem>
		<ListItem>
		<DiFirebase size="3rem"/>
		<ListContainer>
				<ListTitle>DataBase</ListTitle>
		</ListContainer>
		<ListParagraph>
		MySQL
		</ListParagraph>
		</ListItem>
		</List>
		</SectionText>
		</Section>
	</Transition>
);

export default Technologies;
