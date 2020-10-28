<template>
  <div class="home">  
    <div class="timeline">
      
      <Story></Story>

      
      <br>
      <br>
      <br>
      <Post></Post>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      
      <Post></Post>
      
      
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <Post></Post>
      <br>
      <br>
      <br>
      <br>
      <br>
    </div>
    <div class="sidebar">
        <Slide></Slide>
    </div>


    
   
 
  </div>
</template>

<script>
// @ is an alias to /src
import '@/style/app.css';
import Post from '@/components/Posts'
import Slide from '@/components/Sidebar'
import Story from '@/components/Story'




export default {
  name: "Home",
  components:{
     Post,
     Slide,
     Story,
  }
 
};
</script>

<style scoped>
.sidebar{
  display: none;
  }
@media (min-width:900px){
  .sidebar{
    display: block;
  }
  .home{
        display: grid;
    grid-template-columns: 1fr 295px;
    grid-gap:30px;
  }
}
@media (max-width:750px){
  .home{
    max-width: 605px;
    padding: 0 2rem;
  }
}

</style>
 

