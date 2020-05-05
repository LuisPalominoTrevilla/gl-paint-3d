<template>
    <v-expansion-panel>
        <v-expansion-panel-header>{{field}}</v-expansion-panel-header>
        <v-expansion-panel-content>
        <v-color-picker v-if="field === 'color' || field==='emissive' || field==='specular'" v-model="current" v-on:input="handler"></v-color-picker>
        <v-text-field v-else-if="typeof(this.default) === 'number'" v-model="current" v-on:input="handler"></v-text-field>
        <v-switch v-else-if="typeof(this.default)==='boolean'" v-model="current" v-on:change="handler"></v-switch>
        <v-file-input v-else-if="this.default==null" accept="image/*" label="Texture" v-model="current" v-on:change="handler" default=null></v-file-input>
        <v-text-field v-if="typeof(this.default) === 'string'" v-model="current" v-on:input="handler"></v-text-field>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>



    export default {
        props:{
            field:{
                required:true,
            },
            default:{
                required:true,
            },
        },
        data(){
            return({
                current:this.default,
            });
        },
        methods:{
            handler(){
                this.$emit("updateData",this.field,this.current);
            }
        }
    }
</script>