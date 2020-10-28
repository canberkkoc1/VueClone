<template>
 
        <header class="header">
            <Container class="header-container">

            <router-link to="/" class="logo">Instagram</router-link> 
            <form class="search">
                <input type="text" name="" id="" placeholder="Search">
            </form >
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
            <router-link to="/profile">Profile</router-link>

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

    export default {
        name:"MainHeader",
        components:{
            Container,
            IconHome,
            IconDirect,
            IconExplore,
            IconExploreFill,
            IconDirectFill,
            IconHomeFill
        }
    }
</script>

<style scoped>

.header{
    border-bottom: 1px solid rgb(var(--b6a));
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

</style>
