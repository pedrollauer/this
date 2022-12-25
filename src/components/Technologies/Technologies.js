import React from 'react';
import Transition from '../../Transition'
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = (props) =>  (
	<Transition>
		<Section id="tech">

		<SectionTitle main>{props.data.title_2}</SectionTitle>
		<SectionText>
		{props.data.sub_2}	
		<List>
		<ListItem>
		<DiFirebase size="3rem"/>
		<ListContainer>
				<ListTitle>Front-End</ListTitle>
		</ListContainer>
		<ListParagraph>
		Experience with <br/>
		React.js
		</ListParagraph>
		</ListItem>
		<ListItem>
		<DiFirebase size="3rem"/>
		<ListContainer>
				<ListTitle>Back-End</ListTitle>
		</ListContainer>
		<ListParagraph>
		Experience with <br/>
		Node.js
		</ListParagraph>
		</ListItem>
		<ListItem>
		<DiFirebase size="3rem"/>
		<ListContainer>
				<ListTitle>DataBase</ListTitle>
		</ListContainer>
		<ListParagraph>
		Experience with <br/>
		SQL
		</ListParagraph>
		</ListItem>
		</List>
		</SectionText>
		</Section>
	</Transition>
);

export default Technologies;
