<template>
    <div class="post">
        <!-- Header -->
        <header class="header">
            <div class="header-author">
                <Avatar size="40"></Avatar>
                <div class="who">
                    <CustomText tag="b">Canberkkoc</CustomText>
                    <CustomText size="xxsmall">Polatlı, Ankara</CustomText>
                </div>
            </div>
            <div class="header-more">
                <button type="button">
                    <IconMore></IconMore>
                </button>
            </div>
        </header>
        <!-- Media -->
        <div class="media">
            <img src="https://images.unsplash.com/photo-1517298257259-f72ccd2db392?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80" 
            alt="">
        </div>
        <!-- Buttons -->
        <div class="actionButtons">
                <div class="threeButton">

                    <button type="button">
                        <IconLikes></IconLikes>
                    </button>
                    <button type="button">
                        <IconComment></IconComment>
                    </button>
                    <button type="button">
                        <IconDirect></IconDirect>
                    </button>
                </div>
                    <button type="button" class="saveButton">
                        <IconSave></IconSave>
                    </button>
        </div>
        <!-- Views -->
        <div class="views">
            <CustomText tag="b">1.564 beğenme</CustomText>
        </div>
        <!-- Comments -->
        <div class="display-comment">
            <CustomText size="xxsmall">17 yorumun tümünü gör</CustomText>
        </div>
        <div class="normal-comment">
            <div class="comment-author">

            <CustomText type="b" size="small">mhmtade</CustomText>
            <CustomText size="small">Harika...</CustomText>
            </div>
            <div class="comment-author">

            <CustomText type="b" size="small">aysetdh</CustomText>
            <CustomText size="small">çok beğendim</CustomText>
            </div>
            
        </div>
        <!-- Time -->
        <div class="time">
            <CustomText size="xxsmall">16 SAAT ÖNCE</CustomText>
        </div>
        <!-- Comment Input -->
        <form class="comment-input">
                <input type="text" name="" id="" placeholder="Yorum ekle..">
            </form >
    </div>
</template>

<script>
import Avatar from '@/components/ProfilePhoto'
import CustomText from '@/components/CustomText'
import IconMore from '@/icons/more.svg'
import IconLikes from '@/icons/likes.svg'
import IconComment from '@/icons/comment.svg'
import IconDirect from '@/icons/directms.svg'
import IconSave from '@/icons/save.svg'

    export default {
        name:"Post",
        components:{
            Avatar,
            CustomText,
            IconMore,
            IconLikes,
            IconComment,
            IconDirect,
            IconSave,
        }
    }
</script>

<style scoped>
.post{
    border-radius: 3px;
    border:1px solid rgb(var(--b6a))
    }
.header{
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    
}
.header .header-author{
    display: flex;
    align-items: center;
}
.who{
    display: flex;
    flex-direction: column;
    margin-left:1rem;
}

.actionButtons{
    display: flex;
    justify-content: space-between;
    padding-top:12px ;
}
.threeButton{
    width: 9rem;
    display: flex;
    justify-content: space-evenly;
    

}
.saveButton{
    margin-right: 15px;
}
.views{
    padding-left: 20px;
    padding-top: 12px;
}
.display-comment{
    padding-left: 20px;
    padding-top: 12px;
    color: grey;
}
.normal-comment{
    padding-left: 20px;
    display: flex;
    flex-direction: column;
}
.comment-author{
    min-width: 10rem;
    display: flex;
    flex-wrap:wrap;
    gap:12px;
    margin-top:7px;
}
.time{
    padding-left: 20px;
    padding-top: 4px;
    color: grey;
}
.comment-input{
    border:1px solid rgb(var(--b6a));
    height: 3rem;
    margin-top:4px;
}
.comment-input input{
    padding: 10px 0 0 10px;
}
</style>