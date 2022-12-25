import {IngBox} from './IngredientsStyles'
import {Fragment} from 'react';

const Ingredients=(props)=>{
	return(
		<Fragment>
		<IngBox>
		<h2>Ingredients</h2>
		<span>|<br/></span>
		{props.ingredients.map((ingredient,i)=>{
			return(
				<span key={i}>|---> {ingredient}<br/></span>)})}
		</IngBox>
		</Fragment>
	)
	}
export default Ingredients;
