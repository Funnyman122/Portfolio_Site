import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeDModel = () => {
    const mountRef = useRef(null);
    let gameboyModel = null; // Reference for the Gameboy model
    const [isLoading, setIsLoading] = useState(true); // State to track loading status

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0x8A2BE2, 3); // Purple ambient light
        scene.add(ambientLight);

        const pointLight = new THREE.SpotLight(0xffffff, 1);
        pointLight.position.set(0, 3, 0);
	const aambientLight = new THREE.AmbientLight(0xffffff, 0.9); // Purple ambient light
        scene.add(aambientLight);

        const loader = new GLTFLoader();
        loader.load(
            process.env.PUBLIC_URL + '/scene.gltf',
            (gltf) => {
                gameboyModel = gltf.scene;
                scene.add(gameboyModel);
		gameboyModel.add(pointLight);
                gameboyModel.scale.set(10, 10, 10);
                gameboyModel.rotation.z = THREE.MathUtils.degToRad(-35);
                gameboyModel.position.set(5, -6, -3);

                camera.position.set(0, -5, 7);
                camera.lookAt(gameboyModel.position);

                setIsLoading(false); // Model has loaded
            },
            undefined,
            (error) => {
                console.error('Error loading model:', error);
            }
        );

        const animate = () => {
            requestAnimationFrame(animate);
            if (gameboyModel) {
                gameboyModel.rotation.y += 0.01; // Continuous rotation on the Y axis
            }
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div>
            {isLoading && <div>Loading 3D Model...</div>}
            <div ref={mountRef} />
        </div>
    );
};

export default ThreeDModel;
