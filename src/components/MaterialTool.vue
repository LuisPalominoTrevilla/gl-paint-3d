<template>
    <p>mat</p>
</template>

<script>

export default {
    props:{
        materialName:{
            type: String,
            required: true,
        },
        materialInfo:{
            type: Array,
            required:true,
        },
    }
}
</script>