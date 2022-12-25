import {motion} from 'framer-motion';
import React, {Fragment} from 'react'
import Footer from '../components/Footer/Footer'
import { Container } from './LayoutStyles'
import Title from '../components/NameBox/NameBox'
export const Layout = (props) => {	
	const animations={
		in:{
			opacity:0,
		},
		out:{
			opacity:1,
		},
		interpolation:{
			duration:10,
		}

	}

  return (
	  <Fragment>
    <Container>
     <motion.div variants={animations} animate="out" initial="out" transition="interpolation">{props.children}</motion.div> 
     <Footer/>
    </Container>
	  </Fragment>
  )
}
