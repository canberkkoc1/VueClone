<template>
  <div class="home">  
    <div class="timeline">
      <Avatar :size="40"> </Avatar>
    </div>
    <div class="sidebar">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
     Magni a voluptatibus, tempore laboriosam earum dolor
      vel inventore nihil qui modi fugiat dolore nam quam libero 
     eius officiis tempora culpa totam.
   </p>
    </div>


    
   
 
  </div>
</template>

<script>
// @ is an alias to /src
// import CustomText from '@/components/CustomText'
import '@/style/app.css';
import Avatar from '@/components/ProfilePhoto'



export default {
  name: "Home",
  components:{
    //  CustomText,
    Avatar,
     
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
 

