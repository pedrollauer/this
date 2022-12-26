import {Bio, Profile, Frame, Picture,CallAction} from './AboutStyles' 

const About = ()=>{
    const mainTitle = "Hi, I'm Peter Lauer!"
    const profession = "Fullstack developer"
    const presentation = "Highlevel experience in web design and  development, producing quality work"
    const callToAction = 'Check out my projects'
    return( 
        <Frame>
            <Bio>
            <h1>{mainTitle}</h1>
            <h3>{profession}</h3>
            {presentation}
            <br/>
            <CallAction>{callToAction}</CallAction>
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