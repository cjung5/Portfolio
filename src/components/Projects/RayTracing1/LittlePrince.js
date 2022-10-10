import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()

    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (
        mesh.current.rotation.x += 0.01, 
        mesh.current.rotation.y += 0.01, 
        mesh.current.rotation.z += 0.01
    ))
    // Return view, these are regular three.js elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 2 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'green' : 'darkgreen'} />
      </mesh>
    )
  }

const LittlePrince = () => {
    return (  
        <div id="canvas-container" className='little_prince'>
            <Canvas  style={{height: 800}}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[-1.2, 0, 0]} />
                <Box position={[1.2, 0, 0]} />
            </Canvas>
        </div>
    )
  }

export default LittlePrince