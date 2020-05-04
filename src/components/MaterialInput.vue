<template>
    <div >
        <p>{{field}}</p>
        <v-color-picker v-if="field === 'color'" v-model="current" v-on:input="handler"></v-color-picker>
        <v-text-field v-else-if="typeof(this.default) === 'number'" v-model="current" v-on:input="handler"></v-text-field>
        <v-switch v-else-if="typeof(this.default)==='boolean'" v-model="current" v-on:change="handler"></v-switch>
        <v-text-field v-if="typeof(this.default) === 'string'" v-model="current" v-on:input="handler"></v-text-field>
    </div>
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