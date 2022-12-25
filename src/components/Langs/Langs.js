import React from 'react';
import Transition from '../../Transition'
import {BlogCard, CardInfo,GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from '../Projects/ProjectsStyles'
import { Section, SectionDivider, SectionTitle, SectionText} from '../../styles/GlobalComponents';


const Langs= (props) => {

	return (
		<Transition>
		<Section nopadding id="langs">
		<SectionTitle main>{props.data.title_3}</SectionTitle>
		<SectionText>{props.data.sub_3}</SectionText>
		</Section>
		</Transition>
);}


export default Langs;
