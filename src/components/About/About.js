import {Bio, Profile, Frame, Picture,CallAction} from './AboutStyles' 
import {Link} from 'react-router-dom'

const About = (props)=>{
    return( 
        <Frame>
            <Bio>
            <h1>{props.text.hello}</h1>
            <h3>{props.text.profession}</h3>
            <h5>{props.text.description}</h5>
            <br/>
            <Link to={"/projects"}><CallAction >{props.text.button}</CallAction></Link>
            </Bio>

            <Profile>
                <Picture>
                <img src="/images/me.png" />
	            </Picture>
            </Profile>

        </Frame> 
    )
}

export default About;
