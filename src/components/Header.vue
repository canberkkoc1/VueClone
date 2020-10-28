<template>
 
        <header class="header">
            <Container class="header-container">
                <!-- LOGO -->
            <router-link to="/" class="logo">Instagram</router-link> 
            <!-- SEARCH -->
            <form class="search">
                <input type="text" name="" id="" placeholder="Search">
            </form >
            <!--  NAV -->
            <nav class="navigation">
            <router-link to="/">
                <IconHomeFill v-if="$route.name === 'Home'"></IconHomeFill>
                <IconHome v-else></IconHome>
            </router-link> 
            <router-link to="/direct">
            <IconDirectFill v-if="$route.name === 'Direct'"></IconDirectFill> 
            <IconDirect v-else></IconDirect> 
            </router-link> 
            <router-link to="/explore">
            <IconExploreFill v-if="$route.name === 'Explore'"></IconExploreFill>
            <IconExplore v-else></IconExplore>
            </router-link> 
            <router-link to="/profile">
                <Avatar :size="26"></Avatar>
            </router-link>

            </nav>
            </Container>
            
    </header>
    
</template>

<script>
import IconHome from '@/icons/home1.svg'
import IconHomeFill from '@/icons/homeFill.svg'
import IconDirect from '@/icons/directms.svg'
import IconDirectFill from '@/icons/directmsFill.svg'
import IconExplore from '@/icons/explore.svg'
import IconExploreFill from '@/icons/exploreFill.svg'
import Container from '@/components/Container'
import Avatar from '@/components/ProfilePhoto'

    export default {
        name:"MainHeader",
        components:{
            Container,
            IconHome,
            IconDirect,
            IconExplore,
            IconExploreFill,
            IconDirectFill,
            IconHomeFill,
            Avatar
        }
    }
</script>

<style scoped>

.header{
    border-bottom: 1px solid rgb(var(--b6a));
    position: fixed;
         left: 0;
         right: 0;
         top: 0;
         z-index: 90;
         background-color: white;
}
.header-container{
    height: 60px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
}
.logo{
    font-size: 1.5;
    font-weight: bold;
    
}
.search{
    text-align: center;
}
.search input{
    width: 215px;
    height: 28px;
    border-bottom: 1px solid rgb(var(--b6a));
    border-radius: 3px;
    background-color: rgb(var(--b3f));
    padding: 0 20px;
    outline: none;
    }

     .navigation{
         display: flex;
         justify-content: flex-end;
         align-items: center;
     }
     .navigation a{
         margin-left:20px;
     }
 @media (max-width:700px) {
     .header{
         position: fixed;
         background-color: white;
         left: 0;
         right: 0;
         top: 0;
         z-index: 90;
         border-bottom: 1px solid rgb(var(--b6a));
     }
     .navigation{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background-color: white;
    display: flex;
    height: 5rem;
    justify-content: space-around;
    border-top: 1px solid rgb(var(--b6a));
}
.search{
    display: none;
}
.header-container{
    height: 60px;
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
}
 }

</style>
