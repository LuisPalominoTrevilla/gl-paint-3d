<template>
    <v-card>
        <v-tabs v-model="tab">
            <v-tabs-slider color="yellow"></v-tabs-slider>
                <v-tab>
                    Geometries
                </v-tab>
                <v-tab>
                    Materials
                </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
            <v-tab-item>        
                <GeometryToolbox @create-mesh="createMesh"/>
            </v-tab-item>
    
            <v-tab-item>
                <MaterialToolbox ref="toolbox" :selectedMaterial="selected" :currentMeshMaterial="currentMesh" :currentMeshMaterialName="getMaterialName" @changeMesh="updateMesh"/>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
    
</template>

<script>
    import GeometryToolbox from './GeometryToolbox';
    import MaterialToolbox from './MaterialToolbox';
    import GeometryFactory from '../factories/geometryFactory';
    import MaterialFactory from '../factories/materialFactory';
    import * as Three from 'three';


    export default {
        components:{
            GeometryToolbox,
            MaterialToolbox,

        },
        props:{
            selected:{type: Boolean},
            currentMesh:{type: Object},
        }
        ,
        computed:{
            getMaterialName(){
                console.log("Here");
                if(this.currentMesh){
                    let name= this.currentMesh.mesh.material.type.slice(0,-8);
                    name=name.replace(name[0],name[0].toLowerCase());
                    return name;
                }
                return "";
            }
        },
        data(){
            return({
                tab:null,
            });
        },
        methods:{
            createMesh({geometryType,geometryParams}) {
                const geometry = GeometryFactory.create({type:geometryType,params:geometryParams});
                // TODO: Create selected material using own factory
                let currentMaterial= this.$refs.toolbox;
                var material;
                if(currentMaterial){
                    let data= currentMaterial.getMaterialData();
                    material = MaterialFactory.create(data.datakey,data.params);
                }
                else{
                    material = new Three.MeshBasicMaterial();
                }
                this.$emit('create-mesh', { geometry:geometry, material:material });
            },
            updateMesh(data,key){
                let newMaterial = MaterialFactory.create(key,data);
                this.$emit("updateMesh", newMaterial);
            }
        }
    }
</script>