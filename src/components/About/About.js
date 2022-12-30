import {Bio, Profile, Frame, Picture,CallAction} from './AboutStyles' 

const About = (props)=>{
    return( 
        <Frame>
            <Bio>
            <h1>{props.text.hello}</h1>
            <h3>{props.text.profession}</h3>
            {props.text.description}
            <br/>
            <CallAction>{props.text.button}</CallAction>
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