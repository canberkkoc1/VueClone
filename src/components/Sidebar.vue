<template>
    <div class="avatar">
        <Avatar size="40"></Avatar>
                <div class="who">
                    <CustomText tag="b">Canberkkoc</CustomText>
                    <CustomText size="xxsmall">Polatlı, Ankara</CustomText>
        </div>
    </div>
</template>

<script>
import Avatar from '@/components/ProfilePhoto'
import CustomText from '@/components/CustomText'
    export default {
        name:"SlideBar",
        components:{
            Avatar,
            CustomText
        }
    }
</script>

<style lang="scss" scoped>

</style>