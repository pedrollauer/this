import {NameBox} from './AnimationStyles'
import React from 'react';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import {useEffect} from 'react'
import Box from '../../styles/GlobalComponents/Container'
import {motion} from 'framer-motion';
let mixer;
const BackgroundAnimation = () => {

		
  useEffect(() => {
    
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75,1, 0.1, 1000 );
    
	const renderer = new THREE.WebGLRenderer({
			canvas:document.querySelector('#bt'),
			antialias:true,

	});

    renderer.setPixelRatio(window.devicePixelRation);
    renderer.setSize(500,500 );
    renderer.setClearColor(0xffffff,0)    

    

    
//    scene.add( cube );
    camera.position.y =0.2;
    
const loader = new GLTFLoader();
const ambientLight = new THREE.AmbientLight(0xcccccc,0.6);

	  scene.add(ambientLight);

const spotLight = new THREE.SpotLight(0xcccccc,7);
	spotLight.position.y=0.2;
	spotLight.position.z=-0.3;
let angle=0;
loader.load( './gear.glb', function ( gltf ) {
    const model=gltf.scene;
	scene.add(model);
    mixer=new THREE.AnimationMixer(model);
    console.log(gltf);
    const clips=gltf.animations;
    const clip=THREE.AnimationClip.findByName(clips,'tick')
    const action=mixer.clipAction(clip);
		action.play();


}, undefined, function ( error ) {

	console.error( error );

} );

  var clock=new THREE.Clock();
    var animate = function () {
      requestAnimationFrame( animate );

	if(mixer)
        	mixer.update(clock.getDelta());
      angle+=0.006;
      camera.lookAt(0,0,0);
      camera.position.z=0.40*Math.sin(angle);
      camera.position.x=0.40*Math.cos(angle);
      renderer.render( scene, camera );
    };
    
    animate();
  }, []);
	

	return (
		<div style={{width:500,margin:'auto',textAlign:'center'}}>
	<canvas  id="bt"></canvas>
		</div>
);
}

export default BackgroundAnimation;
