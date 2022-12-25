import Hero from './components/Hero/Hero';
import {Fragment, useEffect,useState} from 'react'
import Transition from './Transition'



const Home = (props) => {

  return (
<Fragment>
<Transition>
        <Hero data={props.data} />
</Transition>
	</Fragment> 
  );
};

export default Home;
