<template>
  <div class="toolbox card">
    <h3>Material</h3>
    <v-row>
      <v-col>
          <v-select
          :items="materials"
          label="Choose"
          v-model="materials[2]"
        ></v-select>
        <MaterialTool/>
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