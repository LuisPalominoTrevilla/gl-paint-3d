<template>
  <div class="toolbox card">
    <h3>Material</h3>
    <v-row>
      <v-col>
          <v-expansion-panels accordion>
                <MaterialTool v-for="material in materials" :key="material" :materialName="material" :materialInfo="info"/>
          </v-expansion-panels>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MaterialTool from "./MaterialTool";
import Constants from '../constants';

export default {
    components:{
        MaterialTool,
    },
    data: function(){
        return({
            materials : Object.keys(Constants.materials),
            info:[],
        });
    },
};
</script>