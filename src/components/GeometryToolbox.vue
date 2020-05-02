<template>
    <v-container class="toolbox">
            <v-card class="d-flex pa-0" 
            outlined
            tiled
            v-for="a in 3"
            :key="a"
            >
                <v-card class="tool"
                outlined
                tile
                >
                    cube
                </v-card>
                <v-card class="tool"
                outlined
                tile>
                    sphere
                </v-card>
            </v-card>
    </v-container>
</template>