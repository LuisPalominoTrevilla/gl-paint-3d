<template>
    <v-expansion-panel>
        <v-expansion-panel-header>{{field}}</v-expansion-panel-header>
        <v-expansion-panel-content>
        <v-color-picker v-if="field === 'color' || field==='emissive' || field==='specular'" :value="defaultVal" v-on:input="handler" ref="Colorinp"></v-color-picker>
        <v-text-field v-else-if="typeof(this.defaultVal) === 'number'" v-model="current" v-on:input="handler" ref="inp"></v-text-field>
        <v-switch v-else-if="typeof(this.defaultVal)==='boolean'" v-model="current" v-on:change="handler" ref="inp"></v-switch>
        <v-file-input v-else-if="this.defaultVal==null" accept="image/*" label="Texture" v-model="current" v-on:change="handler"  ref="inp"></v-file-input>
        <v-text-field v-else-if="typeof(this.defaultVal) === 'string'" v-model="current" v-on:input="handler" ref="inp"></v-text-field>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>



    export default {
        props:{
            field:{
                required:true,
            },
            defaultVal:{
                required:true,
            },
            selected:{
                type:Boolean,
            }
        },
        computed:{
            getDefault(){
                console.log(this.defaultVal);
                return this.defaultVal;
            }
        }
        ,
        data(){
            return({
                current:this.defaultVal,
            });
        },
        methods:{
            handler(){
                let colorRef=this.$refs.Colorinp;
                if(colorRef){
                    this.current=(colorRef.$children[0].$children[0].color.hex);
                }
                if(!this.selected){
                    this.$emit("updateData",this.field,this.current);
                }
                else{
                    this.$emit("changeMaterialData", this.field, this.current);
                }
            }

        }
    }
</script>