<template>
    <v-form>
        <MaterialInput v-for="(material,index) in Object.keys(materialFields)" :key="index" :field="material" :default="materialFields[material]" @updateData="updateData"/>
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
        }
    },
    computed:{
        materialFields(){
            const fields = this.materialData[this.materialKey];
            return fields? fields: 0;
        }
    },
    methods:{
        getData(){
            let response={};
            return response;
        },
        updateData(field,value){
            this.$emit("updateData",this.materialKey,field,value);
        }
    }
}
</script>