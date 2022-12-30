import React, {useContext, useState,Fragment} from 'react';
import { DiCssdeck} from 'react-icons/di';
import {HiClipboardList} from 'react-icons/hi'
import {AiFillInfoCircle} from 'react-icons/ai'
import {FaLanguage} from 'react-icons/fa'
import {BsStackOverflow,BsSunFill,BsMoonFill} from 'react-icons/bs'
import {dark,light} from '../../themes/default'
import {ThemeUpdateContext} from '../../styles/GlobalComponents/Container'
import {DD,DDButton,Switch,ConfigMenu,NavLink, Container,Menu, SocialIcons } from './HeaderStyles';
import {ThemeContext} from 'styled-components';

const Header = (props) =>  {
		const activeTheme = useContext(ThemeContext);
		const setTheme = useContext(ThemeUpdateContext);
		const EN = () =>{ return <Fragment><img   style={{margin:"0px 5px 0px"}} src="/images/langs/us.png" height="20px" width="30px"/>EN</Fragment>} 

		const BR= () =>{ return <Fragment><img   style={{margin:"0px 5px 0px"}} src="/images/langs/br.png" height="20px" width="30px"/>BR</Fragment>} 

		return(
		<Container >
		<Menu>

		<ConfigMenu>	
			<DDButton onClick={props.setLang}>{props.currentLang===1?<EN/>:<BR/>}</DDButton>
			<DD><DDButton onClick={props.setLang}> {props.currentLang===2?<EN/>:<BR/>}</DDButton></DD>
				<Switch value="Dark" onClick={()=>{setTheme(activeTheme===dark?light:dark)}}>{activeTheme==dark?<BsSunFill/>:<BsMoonFill/>}</Switch>


			</ConfigMenu>
		<li><NavLink to='/'><b><h2 style={{fontFamily:'Minecraft'}}>Pedro Lauer</h2></b></NavLink></li>
		<li>
				<NavLink to="/"><AiFillInfoCircle/>{props.data.title_1}</NavLink>
		</li>
		<li>
				<NavLink to="/projects"><HiClipboardList/>{props.data.title_2}</NavLink>
		</li>
		<li>
				<NavLink to="/tech"><BsStackOverflow/> {props.data.title_3}</NavLink>
		</li>
		
		</Menu>
	{
	}
		</Container>
);}

export default Header;
