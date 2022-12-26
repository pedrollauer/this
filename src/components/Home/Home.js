import About from '../About/About';
import React,{Fragment} from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {Text} from './HomeStyles';
import Transition from '../../Transition'
const sectionTitle = 'About Me'
const aboutMe = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a lorem ac ex aliquet finibus. Pellentesque fermentum convallis nunc, a posuere orci pharetra id. Mauris at arcu non turpis venenatis maximus. Fusce a pulvinar velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque lobortis condimentum nisi. Sed volutpat cursus dignissim. Aliquam ut diam enim. Quisque vulputate lacinia nisl, at blandit sapien mattis ac. Proin tortor nunc, tristique ut tellus sed, scelerisque aliquet nunc. Aliquam sit amet dui ut tortor pulvinar faucibus sit amet vitae turpis.

Nunc a molestie felis. Sed vel tempus ex. Nam et elementum metus, eu scelerisque sapien. Aliquam mauris dolor, egestas eget dolor eu, fringilla pulvinar sem. Pellentesque facilisis eleifend quam et elementum. Aenean ultricies augue quam, in scelerisque nunc sagittis id. Donec sagittis ligula sem, a tincidunt quam viverra et. Sed mattis dapibus sem, vel maximus ipsum ornare vel. Maecenas lorem ante, viverra vitae fermentum nec, aliquet eget nulla. Vestibulum tempus cursus pretium.

Phasellus rutrum lorem sit amet nibh maximus hendrerit. Ut consequat, purus eget rutrum imperdiet, metus erat molestie ligula, nec feugiat metus augue vel ipsum. Suspendisse finibus risus ut tortor lobortis, ultrices vulputate turpis convallis. Phasellus auctor efficitur justo. Sed nunc leo, gravida id quam ac, pellentesque dictum libero. Donec lacinia lacinia aliquet. Nunc tincidunt nisi ac mi placerat, et convallis orci scelerisque.

Curabitur libero nunc, tristique et pharetra blandit, euismod ac purus. Etiam viverra porta enim quis pellentesque. Integer sit amet arcu nibh. Aliquam interdum dolor tellus. In imperdiet velit nec fringilla venenatis. Suspendisse potenti. Proin rutrum augue at purus dictum, eu iaculis turpis venenatis. Praesent elementum dolor nisl, eu fermentum turpis tincidunt vitae. Aliquam aliquam lacinia tincidunt. Nunc ultricies, arcu sit amet rhoncus posuere, ligula nulla malesuada metus, sit amet commodo mi nisi quis nulla. Aenean quis risus porta, egestas ante eu, imperdiet tortor. Nam condimentum tempor quam, ut fringilla metus feugiat eget. Duis eleifend tellus a tellus pulvinar, id maximus sem mattis. Aenean id dictum urna.

Pellentesque mattis, libero ac pretium porttitor, ex risus posuere libero, ut efficitur dui sem in sem. Suspendisse potenti. Phasellus hendrerit porta neque a mollis. Nulla elementum maximus diam ac pretium. Duis cursus viverra viverra. Etiam tincidunt enim ac efficitur varius. Duis hendrerit enim diam, a sollicitudin magna aliquam ac. Nunc quis justo diam.

Suspendisse quis suscipit eros. Nulla vel accumsan ligula. Nam id ipsum a felis tincidunt facilisis vitae venenatis tellus. Proin congue tristique auctor. Integer mi libero, malesuada consectetur interdum quis, pulvinar sed odio. Proin sagittis placerat urna, et pharetra tortor pretium sed. Quisque euismod, ligula vitae placerat semper, libero nisl posuere augue, nec tempus tortor felis et quam. Duis tincidunt mattis viverra. Aliquam dignissim volutpat nunc in mollis. Donec efficitur, massa vitae molestie rhoncus, ante risus consectetur leo, vel consequat leo odio sit amet magna. Donec id efficitur odio. Praesent at ornare orci. Mauris id enim vitae erat tempor finibus.`
const Home = (props) => (
	<Fragment>
<Transition>
	<About/>
<div style={{display:'block'}}>		
	<div style={{width:"100%"}}>	<SectionTitle>{sectionTitle}<br/></SectionTitle> </div>
	  <Text>
		{aboutMe}
	  </Text>


</div>

	</Transition>
	</Fragment>
);

export default Home;
