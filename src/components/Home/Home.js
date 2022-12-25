import React,{Fragment} from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Picture,LeftSection } from './HomeStyles';
import Transition from '../../Transition'

const Home = (props) => (
	<Fragment>
<Transition>
<div style={{display:'block'}}>		
	<div style={{width:"100%"}}>	<SectionTitle>{props.data.greetings_1}<br/></SectionTitle> </div>
			
		<Picture><img   src="/images/me.jpg" />
		<h3>{props.data.greetings_2}<br/></h3>
		<h3>{props.data.greetings_3}<br/></h3>
		<h3>{props.data.greetings_4}<br/></h3>
		<h3>{props.data.greetings_5}<br/></h3>

		<h2>{props.data.greetings_6}<br/></h2>
	<ul>
		{props.data.tastes==null?'-':props.data.tastes.map((taste,i)=>{
			return(<li key={i}>{taste}</li>);
		})}
	</ul>
	</Picture>
</div>

	</Transition>
	</Fragment>
);

export default Home;
