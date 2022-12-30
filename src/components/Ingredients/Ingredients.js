import {IngBox} from './IngredientsStyles'
import {Fragment} from 'react';

const Ingredients=(props)=>{
	console.log(props.strings)
	return(
		<Fragment>
		<IngBox>
		<h2>{props.strings[0].dependencies}</h2>
		<span>|<br/></span>
		{props.ingredients.map((ingredient,i)=>{
			return(
				<span key={i}>|---> {ingredient.name}-{ingredient.description}<br/></span>)})}
		</IngBox>
		</Fragment>
	)
	}
export default Ingredients;
