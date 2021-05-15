<template>
  <div class="container-fluid">
    <Navbar/>
    <!--<div style="width:50%;margin:auto;padding:3px">
        <form action="#">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" placeholder="Enter name" id="name">
            </div>
            <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" placeholder="Enter email" id="email">
            </div>
            <div class="form-group">
                <label for="textarea">Content:</label>
                 <b-form-textarea
                    id="textarea"
                    v-model="text"
                    placeholder="Enter something..."
                    rows="3"
                    max-rows="6"
                 ></b-form-textarea>
            </div>
            <div class="form-group form-check">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox"> Remember me
                </label>
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
        </form>
    </div>-->
    <form @submit.prevent="submit">
      <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
        <label class="form__label">Name</label>
        <input class="form__input" @input="check"/>
      </div>
      <div class="error" v-if="!$v.name.required">Name is required</div>
      <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
      <button class="button" type="submit" :disabled="submitStatus === 'PENDING'">Submit!</button>
      <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
      <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
      <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
    </form>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import { required, minLength, between } from 'vuelidate/lib/validators'
export default {
  components:{
    Navbar
  },
  // data(){
  //   return {
  //     form:{
  //       name:"",
  //       email:"",
  //       content:""
  //     }
  //   }
  // },
  // validations: {
  //   form:{
  //     name:{
  //       required,
  //       minLength: minLength(4)
  //     },
  //     email:{
  //       required,
  //       minLength: minLength(4)
  //     },
  //     content:{
  //       required,
  //       minLength: minLength(4)
  //     }
  //   }
  // },
  // methods:{

  // }
  data() {
    return {
      name: '',
      age: 0,
      submitStatus: null
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    }
  },
  created:{
    check(e){
      console.log("check",e.target.value)
      return this.name = e.target.value
    }
   },
  methods: {
    submit() {
      console.log('submit!',name)
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    },
    // check(e){
    //   console.log("check",e.target.value)
    //   this.name = e.target.value
    //   this.$v.$touch()
    // }
  }
}
</script>

