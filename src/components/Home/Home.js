import About from '../About/About';
import React,{Fragment} from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {Text} from './HomeStyles';
import Transition from '../../Transition'
const sectionTitle = 'About Me'

const firstParagraph =`Meu nome é Pedro e eu estou atualmente estudando ciência da computação na Unicamp,
				  e trabalhando num empresa de automação como programador, onde escrevo código todo dia, principalmente em java, javascript, C e MySql. Gosto bastante de resolver problemas 
				  e estou procurando um nova oportunidade que me permita encarar novos desafios, que involvam escrever bastante código, assim como o aprendizado das novas tecnologias.`

const secondParagraph = ` Estudei física por 3 anos, também na Unicamp, mas decidi partir para o lado da ciência da computação porque gosto de construir coisas, ao invés de apenas compreender como funcionam. Essa mudança de curso me deu a oportunidade de aprender 
				  a construir e de construir coisas incríveis, e esse processo é para mim um processo viciante, é como o trabalho de um escultor que vai lentamente adicionando detalhes e mais detalhes ao trabalaho, aperfeiçoando-o, e por fim acaba esquecendo-se de comer, de domir e de todos os seus outros afazeres,
				  essa é para mim a melhor parte em ser um programador.`
				  
const thirdParagraph = `Fora programação, gosto também bastante de ler (ficção, poesia e mangás), de jogos de computador(principalmente rpgs online como World of Warcraft) e de sair para dar uma volta com os amigos para bater um papo(que não infrequentemente é sobre código).`

const Home = (props) => (
	<Fragment>
<Transition>
	<About/>
<div style={{display:'block'}}>		
	<div style={{width:"100%"}}>	<SectionTitle>{sectionTitle}<br/></SectionTitle> </div>
	  <Text>
		 <p>{firstParagraph}</p>
		 <p>{secondParagraph}</p>
		 <p>{thirdParagraph}</p>
	  </Text>


</div>

	</Transition>
	</Fragment>
);

export default Home;
