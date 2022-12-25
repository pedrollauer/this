import React,{Fragment} from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Picture,LeftSection } from './HeroStyles';

const Hero = (props) => (
	<Fragment>

<div style={{display:'block'}}>		
	<div style={{width:"100%"}}>	<SectionTitle>{props.data.greetings_1}<br/></SectionTitle> </div>
			
		<Picture><img   src="/images/me.jpg" />
		<h3>{props.data.greetings_2}</h3>
	</Picture>
</div>

	</Fragment>
);

export default Hero;
