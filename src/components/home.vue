<template>
<div><Header /></div>

<h1>Hello user,welcome to Doctune</h1>

<div>

    <h1>Registration List</h1>
    <table>
        <tr>
            <td>name</td>
            <td>email</td>
             <td>password</td>
        </tr>
        <tr v-for="item in list" v-bind:key="item.id">
            <td>{{item}}</td>
            <td>{{item.email}}</td>
       
        </tr>
    </table>
    </div>
</template>

<script>
import Header from './Header.vue'

export default {
    name:'home',
     components:{
       Header
     },
     data(){
          return {list:undefined}
     },
      mounted() 
   
     {
      let user= localStorage.getItem('user-info');
      this.list=localStorage.getItem('reg-info');
       localStorage.setItem("admin-info",JSON.stringify(this.list))
      // let reg=this.list;
      if(!user)
      {
         this.$router.push({name:'signup'})  
      }
      
      
       //let reg=localStorage.getItem('reg-info')

        //this.list=reg
        }
      
    
    

}


</script>
