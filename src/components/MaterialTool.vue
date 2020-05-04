<template>
    <v-form>
        <MaterialInput v-for="material in Object.keys(materialFields)" :key="material" :field="material" :default="materialFields[material]"/>
    </v-form>
</template>

<script>

import Materials from '../materials';
import MaterialInput from './MaterialInput';

export default {
    components:{
        MaterialInput
    },
    props:{
        materialName:{
            type: String,
            required: true,
        },
        materialKey:{
            type: Number,
            required: true,
        }
    },
    computed:{
        materialFields(){
            const fields = Materials.materialInfo[this.materialKey];
            return fields? fields: 0;
        }
    }
}
</script>