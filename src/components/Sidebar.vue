<template>
    <div class="avatars">
                <div class="whos">
                    <div class="others">
                        <Avatar size="40"></Avatar>
                        <div class="hdsrOthers">
                            <CustomText tag="b">Canberkkoc</CustomText>
                            <h4>cnbrkkc</h4>                    

                        </div>

                    </div>
                    <div class="buttons">
                            <button class="buttons-slides">Geçiş Yap</button>
                    </div>
                </div>
       <Foryou></Foryou>
    </div>
</template>

<script>
import Avatar from '@/components/ProfilePhoto'
import CustomText from '@/components/CustomText'
import Foryou from '@/components/Foryou'
    export default {
        name:"SlideBar",
        components:{
            Avatar,
            CustomText,
            Foryou
        }
    }
</script>

<style>
.avatars{
    height:80px ;
}
.whos{
    height: 100%;
    align-items: center;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.others{
    display: flex;
    width: 45%;
    justify-content: space-between;
    
}


.whos h4{
    opacity: .5;
}
.buttons-slides{
    color: rgb(56, 56, 250);
}
</style>