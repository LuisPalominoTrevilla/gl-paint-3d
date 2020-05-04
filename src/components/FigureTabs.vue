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
                <MaterialToolbox ref="toolbox" @/>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
    
</template>

<script>
    import GeometryToolbox from './GeometryToolbox';
    import MaterialToolbox from './MaterialToolbox';
    import GeometryFactory from '../factories/geometryFactory';
    import MaterialFactory from '../factories/materialFactory';


    export default {
        components:{
            GeometryToolbox,
            MaterialToolbox,

        },
        data(){
            return({
                tab:null,
            });
        },
        methods:{
            createMesh(geometryType) {
                const geometry = GeometryFactory.create(geometryType);
                // TODO: Create selected material using own factory
                let currentMaterial= this.$refs.toolbox;
                let data= currentMaterial.getMaterialData();
                //const material = new Three.MeshBasicMaterial();
                const material = MaterialFactory.create(data.datakey,data.params);
                this.$emit('create-mesh', { geometry, material });
            },
        }
    }
</script>