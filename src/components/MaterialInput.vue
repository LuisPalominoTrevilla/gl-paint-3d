<template>
    <div >
        <p>{{field}}</p>
        <v-color-picker v-if="field === 'color'" v-model="current"></v-color-picker>
        <v-text-field v-else-if="typeof(this.default) === 'number'" v-model="current"></v-text-field>
        <v-switch v-else-if="typeof(this.default)==='bool'" v-model="current"></v-switch>
        <v-text-field v-if="typeof(this.default) === 'string'" v-model="current"></v-text-field>
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
    }
</script>