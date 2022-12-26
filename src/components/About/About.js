import {Bio, Profile, Frame, Picture} from './AboutStyles' 

const About = ()=>{
    const mainTitle = "Hi, I'm Peter Lauer!"
    const profession = "Fullstack developer"
    const presentation = "Highlevel experience in web design and  development, producing quality work"
    return( 
        <Frame>
            <Bio>
            <h1>{mainTitle}</h1>
            <h3>{profession}</h3>
            {presentation}
            <br/>
            <button>Contato</button>
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