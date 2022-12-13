import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/little_prince.gltf");
//   console.log(nodes)

//   useFrame(() => {
//     const a = 1;
//     planet.x = a;
//     planet.y = a;
//     planet2.x = a;
//     planet2.z = a;

//   });

  return (
    <group ref={group} {...props} dispose={null} scale={0.4}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere001.geometry}
            material={materials["glass"]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere001_1.geometry}
            material={materials["B612"]}
        />
        {/* <mesh
            ref={planet}
            castShadow
            receiveShadow
            geometry={nodes.planet2.geometry}
            material={materials["planet2"]}
        />
        <mesh
            ref={planet2}
            castShadow
            receiveShadow
            geometry={nodes.pllanet.geometry}
            material={materials["planet"]}
        /> */}
    </group>
  );
}

useGLTF.preload("/little_prince.gltf");
