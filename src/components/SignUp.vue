import { Button } from 'bootstrap';
<template>
    <img class="logo" src="../assets/soa.jpg" />
    <h1>Sign Up</h1>
    <div class="register">
        

<input type="text" v-model="name" placeholder="Ingrese su nombre" />
        <input type="text" v-model="email" placeholder="Ingrese su Email" />
        <input type="password" v-model="password" placeholder="Ingrese su Password" />
        <Button v-on:click="signUp" >Sign Up</Button>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data(){
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods:{
        async signUp(){
            let result = await axios.post("http://worker.local.com:3000/user",{
                name: this.name,
                email: this.email,
                password: this.password

            });
                console.log(result)

                
        }
    }
}
</script>

<style>

.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid skyblue;

}
.register button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;

}

</style>