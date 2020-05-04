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
        <MaterialTool :materialName="chosenMaterial" :materialKey="materialValues[chosenMaterial]"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MaterialTool from "./MaterialTool";
import Materials from '../materials';

export default {
    components:{
        MaterialTool,
    },
    data: function(){
        return({
            materials : Object.keys(Materials.materials),
            materialValues: Materials.materials,
            chosenMaterial : "MeshBasic",
        });
    },
};
</script>