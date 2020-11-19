<template>
     <div class="foryou">
            <div class="headers-foryou">
                <h4>Senin için Önerilen</h4>
                <button class="allFriends">Tümünü Gör</button>
            </div>
            <FollowNew></FollowNew>
        </div>
</template>

<script>
import FollowNew from '@/components/Follownew'
    export default {
        name:'ForYou',
        components:{
           FollowNew
        }
    }
</script>

<style>
.headers-foryou{
    display: flex;
    justify-content: space-between;
}
</style>