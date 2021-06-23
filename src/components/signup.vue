<template>
<h1>signup</h1>
<div class="register">
    <input type="text"  v-model="name" placeholder="Enter name" />
    <input type="text" v-model="email" placeholder="enter Email" />
    <input type="password" v-model="password" placeholder="enter Password" />
    <button v-on:click="Signup">sign up</button>
    <p>
    <router-link to="/login">login</router-link>
    </p>

</div>
</template>

<script>
import axios from 'axios'
export default{
    name :'signup',

    data()
    {
        return{
            name:"",
            email:"",
            password:"",
        
        }
    },
    methods:{
       async Signup()
        {

                 let result = await axios.post("http://localhost:3000/user",{
                 id:this.id,
                 name:this.name,
                 email:this.email,
                 password:this.password
            
              });
   
            console.log(result);
            console.warn(result);
            if(result.status==201)
            {
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'home'})
            }
        }

    },

mounted() 
  {
      let user= localStorage.getItem('user-info');
      if(user)
      {
         this.$router.push({name:'home'})  
      }

   }
}
    
</script>

<style>

</style>


