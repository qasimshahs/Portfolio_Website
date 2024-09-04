import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, SpotLight, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';


const Computers = (isMobile) => {
  const { scene } = useGLTF('./desktop_pc/scene.gltf');

  return (
    <>
      <hemisphereLight intensity={3.15} />
      <pointLight intensity={1} />
      <spotLight 
      position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={2}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive
        object={scene}
        scale={0.9}
        position={[0, -5, -1.2]}
      />
    </>
  );
}

const ComputersCanvas = () => {
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(('max-width: 500'));
    setisMobile(mediaQuery.matches);

    const handleMediaQuerryChange = (event) => {
      setisMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQuerryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQuerryChange);
    }
  },[])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [30, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default ComputersCanvas;