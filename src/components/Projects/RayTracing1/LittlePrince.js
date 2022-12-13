import React, { useRef, useState } from 'react'
import { Suspense } from "react";
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls, useGLTF, Points, PointMaterial} from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import little_prince_img from '../../../img/little_prince.png'
import './LittlePrince.css'
import Model from './Model';

function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 55
    ref.current.rotation.y -= delta / 45
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#fafafa" size={0.005} sizeAttenuation={true} depthWrite={false} needsUpdate={true}/>
      </Points>
    </group>
  )
}


const LittlePrince = () => {
    return (
      <div className='littple_prince_wrapper' draggable="false">
        <div className='little_prince_picture box' draggable="false">
          <img className='little_prince_img' src={little_prince_img} alt="me" ></img>
        </div>
        <div className='little_prince_description box'>
          <h2>After the Little Prince Left the Rose at B612</h2>
          <h4>
            Spending most of the time together, the rose and the little prince became
            the best friend. However, getting tired of doing a favor for the rose, the
            prince decided to leave and travel to other planets to understand the rose.
            The rendered image shows a scene after the prince left the rose. The eye is
            looking at the rose and space. The rose is on a planet, B612, covered by a
            dome glass placed by the prince before he left the planet. We can see stars,
            planets, and the milky way. The brown and gray planets reflect the milky way.
            To express an innocent viewpoint of the little prince, there are unrealistic
            shapes of stars that are likely to be seen in the fairy tales. Overall, the
            scene describes the rose left alone, looking at the space while waiting for
            the prince to return.
          </h4>
        </div>
        <div className='little_prince_canvas box'>
            <Canvas style={{height: '100vh'}}>
              {/* <Stars /> */}
              <Suspense fallback={null}>
                <Model />
                <OrbitControls />
                <Environment preset="sunset" background/>
              </Suspense>
            </Canvas>
        </div>
      </div>  
        
    )
  }

export default LittlePrince