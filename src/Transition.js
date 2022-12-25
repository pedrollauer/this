import {motion} from 'framer-motion'
	const animations={
		in:{
			opacity:0,
			y:'-20%',
		},
		out:{
			opacity:1,
			y:0,
		},
		interpolation:{
			type:'spring',
			stiffness:10000,
			damping:100,
		}

	};



const Transition= ({children})=>{
     return (<motion.div variants={animations} animate="out" initial="in" transition="interpolation" exit="in">
	       {children}
		</motion.div>);
}

export default Transition;
