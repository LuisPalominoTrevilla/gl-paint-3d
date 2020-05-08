<template>
    <v-form>
        <v-expansion-panels accordion>
        <MaterialInput v-for="(material) in Object.keys(materialFields)" :key="material" :field="material" :defaultVal="materialFields[material]" @updateData="updateData" @changeMaterialData="updateMatData" :selected="materialSelected" />
        </v-expansion-panels>
    </v-form>
</template>

<script>


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
        },
        materialData:{
            type: Object,
            required: true,
        },
        materialSelected:{
            type: Boolean,
        }
    },
    computed:{
        materialFields(){
            const fields = JSON.parse(JSON.stringify(this.materialData[this.materialKey]));
            return fields? fields: 0;
        },
    },
    methods:{
        getData(){
            let response={};
            return response;
        },
        updateData(field,value){
            this.$emit("updateData",this.materialKey,field,value);
        },
        updateMatData(field,value){
            this.$emit("updateMaterialData",this.materialKey,field,value);
        }
    }
}
</script>