<template>
    
        <div class="followNew" >
            <div class="items-follows" v-for="index in 5" :key="index">
                <div class="hdrs-newFollow">
                <Avatar size='30'></Avatar>
                <div class="hdsrOthers">
                        <CustomText tag="b">Canberkkoc</CustomText>
                        <h4>Follows you</h4>

                </div>
                </div>           
                <div class="btns-follow">
                    <button class="buttons-slides">Takip Et</button>
                </div>

            </div>

</div>
</template>

<script>
import Avatar from '@/components/ProfilePhoto'
import CustomText from '@/components/CustomText'
    export default {
        name:"FollowNew",
        components:{
            Avatar,
            CustomText

        }
    }
</script>

<style>
.followNew{
    min-height: 23rem;
}
.items-follows{
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 0;
}
.hdrs-newFollow{
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.hdrs-newFollow h4{
    opacity: .5;
    font-size: .8rem;
}
</style>