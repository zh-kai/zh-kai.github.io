# Three.js

## Code Snippet

```typescript
import { Group } from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'

export function loadOBJ(path: string, material?: MTLLoader.MaterialCreator) {
  const objLoader = new OBJLoader()
  if (material) {
    objLoader.setMaterials(material)
  }
  return new Promise<Group>((resolve, reject) => {
    try {
      objLoader.load(path, mesh => resolve(mesh))
    } catch (error) {
      reject(error)
    }
  })
}

export function loadFBX(path: string) {
  const fbxLoader = new FBXLoader()
  return new Promise<Group>((resolve, reject) => {
    try {
      fbxLoader.load(path, mesh => resolve(mesh))
    } catch (error) {
      reject(error)
    }
  })
}

```