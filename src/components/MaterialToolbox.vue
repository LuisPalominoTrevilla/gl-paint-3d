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
        0:{color: "ffffff",linewidth: 1,linecap: 'round',linejoin: 'round'},
        1:{color: "ffffff",linewidth: 1,linecap: 'round',linejoin: 'round', dashSize: 3, gapSize: 1, scale: 1},
        2:{alphaMap:null,aoMap:null,aoMapIntensity:1, color:"ffffff", combine:Three.Multiply, envMap: null, lightMap: null, lightMapIntensity:1 , map: null, morphTargets:false, reflectivity: 1, refractionRatio: 0.98, skinning: false, specularMap: null , wireframe: false, wireframeLinecap: 'round', wireframeLinejoin:'round', wireframeLinewidth: 1},
        3:{},
        4:{},
        5:{},
        6:{},
        7:{},
        8:{},
        9:{},
        10:{},
        11:{},
        12:{},
        13:{},
        14:{},
        15:{},
        16:{},
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