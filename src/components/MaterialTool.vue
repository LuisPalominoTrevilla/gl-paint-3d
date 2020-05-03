<template>
    
    <v-expansion-panel>
        <v-expansion-panel-header>{{materialName}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet
        </v-expansion-panel-content>
      </v-expansion-panel>
</template>

<script>

export default {
    props:{
        materialName:{
            type: String,
            required: true,
        },
        materialInfo:{
            type: Array,
            required:true,
        },
    }
}
</script>