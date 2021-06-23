<template>
<h1>login page</h1>
<div class="login">
    <input type="text" v-model="email" placeholder="enter Email" />
    <input type="password" v-model="password" placeholder="enter Password" />
    <button v-on:click="login">login</button>
    <p>
    <router-link to="/signup">signup</router-link>
    </p>

</div>
</template>

<script>
import axios from 'axios'
export default {
      name:'login',
      
    data()
    {
        return{
            
            email:"",
            password:""
        
        }
    },
    methods:{
       async login()
        {    
            
            let result= await axios.get(
               `http://localhost:3000/user?email=${this.email}&ipassword=${this.password}`
            )
            if (result.data[0].name=='admin' && result.status==200 && result.data.length>0){
               let adminresult= await axios.get(
               `http://localhost:3000/user`)
                 localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                localStorage.setItem("reg-info",JSON.stringify(adminresult.data))
                this.$router.push({name:'home'})
                console.warn(result.data.name)
            }
           else if (result.status==200 && result.data.length>0 && result.data[0].name!='admin')
            {
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                this.$router.push({name:'home'})
            }
            console.warn(result)
           


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
};
</script>