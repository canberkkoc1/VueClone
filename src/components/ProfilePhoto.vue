<template>
    
        <figure class="avatar">
            <img :src="src" :alt="alt" :width="size" :height="size">
        </figure>

    
</template>

<script>
    export default {
        name:"ProfilePhoto",
        props:{
            src:{
                type:String,
                default:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
            },
            alt:{
                type: String,

            },
            size:{
                type:Number
            }
        }
    }
</script>

<style scoped>
.avatar{
    padding:2px;  
    border-radius: 999px;
    display: inline-flex;
    background: linear-gradient(83deg, rgba(184,63,140,1) 0%, rgba(237,158,90,1) 100%);
}
.avatar img{
    border-radius: 999px;
    border:2px solid white;
}
</style>