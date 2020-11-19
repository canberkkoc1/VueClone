<template>
<div class="stry">

     <div class="story" v-for="index in 10" :key="index">
        <div class="avatar-stry">
          <Avatar size="40"></Avatar>

        </div>
                <div class="who">
                    <CustomText size="xxsmall">Canberkkoc</CustomText>
                </div>
       
      </div>
     
     
</div>
  
     
</template>

<script>
import Avatar from '@/components/ProfilePhoto'
import CustomText from '@/components/CustomText'
    export default {
        name:"Story",
        components:{
            CustomText,
            Avatar,
        }
    }
</script>

<style scoped>
.stry{
    display: flex;
    width: 615px;
    height: 110px;
    border:1px solid rgb(var(--b6a));
    overflow: hidden;
}
.story{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
  padding: 0 12px;
}
.avatar-stry{
  
}
</style>