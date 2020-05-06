<template>
  <div class="toolbox card">
    <h3>Material</h3>
    <v-row>
      <v-col>
          <v-select
          :items="materials"
          label="Choose"
          v-model="chosenMaterial"
        ></v-select>
        <MaterialTool :materialName="chosenMaterial" :materialKey="materialValues[chosenMaterial]" :materialData="materialData" @updateData="updateData"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MaterialTool from "./MaterialTool";
import Constants from '../constants';
import * as Three from 'three';


//Every material has this properties inherited from material
//alphaTest: 0, blendDst: Three.OneMinusSrcAlphaFactor, blendDstAlpha: null, blendEquation: Three.AddEquation, blendEquationAlpha: null, blending: Three.NormalBlending, blendSrc: Three.SrcAlphaFactor, blendSrcAlpha: null, ...
var materialInfo={
        0:{color: "#FFFFFF",linewidth: 1,linecap: 'round',linejoin: 'round'},
        1:{color: "#FFFFFF",linewidth: 1,linecap: 'round',linejoin: 'round', dashSize: 3, gapSize: 1, scale: 1},
        2:{alphaMap:null,aoMap:null,aoMapIntensity:1, color:"#FFFFFF", combine:Three.MultiplyOperation, envMap: null, lightMap: null, lightMapIntensity:1 , map: null, morphTargets:false, reflectivity: 1, refractionRatio: 0.98, skinning: false, specularMap: null , wireframe: false, wireframeLinecap: 'round', wireframeLinejoin:'round', wireframeLinewidth: 1},
        3:{alphaMap:null,depthPacking:Three.BasicDepthPacking, displacementMap: null, displacementScale : 1, displacementBias: 0, fog:false, map:null, morphTargets:false, skinning: false, wireframe: false, wireframeLinewidth: 1 },
        4:{alphaMap: null, displacementMap: null, displacementScale: 1, displacementBias:0 , farDistance: 1, fog:false, map:null, morphTargets: false, nearDistance: 1, referencePosition: Three.Vector3(), skinning: false},
        5:{alphaMap: null, aoMap: null, aoMapIntensity: 1, color: "#FFFFFF", combine:Three.MultiplyOperationOperation, emissive:"#000000", emissiveMap: null, emissiveIntensity: 1, envMap: null, lightMap:null, lightMapIntensity:1, map:null, morphNormals: false, morphTargets: false, reflectivity:0, refractionRatio: 0.98, skinning: false, specularMap: null, wireframe:false, wireframeLinecap:'round', wireframeLinejoin:'round', wireframeLinewidth:1},
        6:{alphaMap: null, bumpMap: null, bumpScale: 1., color: "#FFFFFF", displacementMap: null, displacementScale: 1., displacementBias: 0., map:null, matcap: null, morphNormals: false, morphTargets: false, normalMap: null, normalMapType:Three.TangentSpaceNormalMap, normalScale: Three.Vector2(1,1), skinning: false,},
        7:{bumpMap: null, bumpScale: 1., displacementMap: null, displacementScale:1., displacementBias:0., fog:false, morphNormals: false, morphTargets: false, normalMap: null, normalMapType: Three.TangentSpaceNormalMap, normalScale:Three.Vector2(1.,1.), skinning: false, wireframe: false, wireframeLinewidth: 1., },
        8:{alphaMap: null, aoMap: null, aoMapIntensity: 1., bumpMap: null, bumpScale:1., color:"#FFFFFF", combine:Three.MultiplyOperation, displacementMap: null, displacementScale: 1., displacementBias: 0., emissive: "#000000", emissiveMap: null, emissiveIntensity: 1., envMap:null, lightMap: null, lightMapIntensity: 1., map: null, morphNormals: false, morphTargets: false, normalMap:null, normalMapType: Three.TangentSpaceNormalMap, normalScale: Three.Vector2(1,1), reflectivity: 1., refractionRatio: 0.98, shininess: 30., skinning: false, specular: "#111111", specularMap:null, wireframe:false, wireframeLinecap: 'round', wireframeLinejoin: 'round', wireframeLinewidth: 1.},
        //
        9:{alphaMap: null, aoMap: null, aoMapIntensity: 1., bumpMap: null, bumpScale: 1., color: "#FFFFFF", clearcoat: 0., clearcoatMap: null, clearcoatNormalMap: null, clearcoatNormalScale: Three.Vector2(1.,1.), clearcoatRoughness: 0.0, clearcoatRoughnessMap: null, displacementMap: null, displacementScale: 1., displacementBias: 0., emissive:"#000000", emissiveMap: null, emissiveIntensity: 1., envMap: null, envMapIntensity: 1., lightMap: null, lightMapIntensity: 1., map:null, metalness: 0.0, metalnessMap: null, morphNormals: false, morphTargets: false, normalMap: null, normalMapType: Three.TangentSpaceNormalMap, normalScale: Three.Vector2(1.,1.), reflectivity: 0.5, refractionRatio: 0.98, roughness: 1., roughnessMap: null, skinning: false, transparency: 0.0, vertexTangents: false, wireframe: false, wireframeLinecap: 'round', wireframeLinejoin: 'round', wireframeLinewidth: 1.},
        10:{alphaMap: null, aoMap: null, aoMapIntensity: 1., bumpMap: null, bumpScale: 1., color: "#FFFFFF", displacementMap: null, displacementScale: 1., displacementBias: 0., emissive:"#000000", emissiveMap: null, emissiveIntensity: 1., envMap: null, envMapIntensity: 1., lightMap: null, lightMapIntensity: 1., map:null, metalness: 0.0, metalnessMap: null, morphNormals: false, morphTargets: false, normalMap: null, normalMapType: Three.TangentSpaceNormalMap, normalScale: Three.Vector2(1.,1.), refractionRatio: 0.98, roughness: 1., roughnessMap: null, skinning: false, vertexTangents: false, wireframe: false, wireframeLinecap: 'round', wireframeLinejoin: 'round', wireframeLinewidth: 1.},
        11:{alphaMap: null, aoMap: null, aoMapIntensity: 1., bumpMap: null, bumpScale: 1., color: "#FFFFFF", displacementMap: null, displacementScale: 1., displacementBias: 0., emissive:"#000000", emissiveMap: null, emissiveIntensity: 1., gradientMap: null, lightMap: null, lightMapIntensity: 1., map: null, morphNormals: false, normalMap: null, normalMapType: Three.TangentSpaceNormalMap, normalScale:Three.Vector2(1.,1.), shininess: 30, skinning: false, specular:"#111111", specularMap: null, wireframe: false, wireframeLinecap: 'round', wireframeLinejoin: 'round', wireframeLinewidth: 1.},
        12:{alphaMap: null, color: "#FFFFFF", map:null, morphTargets: false, size: 1.0, sizeAttenuation: true},
        13:{},
        14:{},
        15:{transparent:true},
        16:{alphaMap: null, color:"#FFFFFF", fog: false, map: null, rotation: 0, sizeAttenuation: true},
      };

export default {
    components:{
        MaterialTool,
    },
    data: function(){
        return({
            materials : Object.keys(Constants.materials),
            materialValues: Constants.materials,
            chosenMaterial : "meshBasic",
            materialData : materialInfo,
        });
    },
    methods:{
      getMaterialData(){
        let jsondata= JSON.parse(JSON.stringify(this.materialData[this.materialValues[this.chosenMaterial]]));
        return {datakey: this.materialValues[this.chosenMaterial], params:jsondata};
      },
      updateData(key,field,value){
        this.materialData[key][field]=value;
      }
    }
};
</script>