<template>
    <div  style="width:50%;margin:auto;padding:3px">
        <b-card
      :header="name"
      header-tag="header"
      :footer="`Email: ${email}`"
      footer-tag="footer"
      :title="title"
    >
      <b-card-text>{{content}}</b-card-text>
      <div style="display:inline">
        <b-row>
          <b-col>
            <b-button @click="toggleComments" variant="primary">
            <b-icon icon="chat-left-dots"></b-icon>
            Comment</b-button>
          </b-col>
          <b-col>
            <div class="h3 mb-0">
              <b-icon icon="emoji-heart-eyes" variant="danger"></b-icon>
              <b-icon icon="emoji-laughing" variant="success"></b-icon>
              <b-icon icon="emoji-sunglasses" variant="warning"></b-icon>
              <b-icon icon="emoji-frown" variant="secondary"></b-icon>
            </div>
          </b-col>
        </b-row>
      </div>
      <b-form-input v-model="text" 
      v-if="commentStatus"
      placeholder="Enter your comments" class="mt-2"></b-form-input>
    </b-card>
    </div>
</template>
<script>
export default {
  props:{
    name:{
      type:String,
      required:true
    },
    title:{
      type:String,
      required:false
    },
    content:{
      type:String,
      required:false
    },
    // date:{
    //   type: date,
    //   required:false
    // },
    email:{
      type:String,
      required:false
    }
  },
  data(){
    return{
      commentStatus:false
    }
  },
  methods:{
    toggleComments(){
      this.commentStatus = !this.commentStatus
      console.log(this.commentStatus)
    }
  }
}
</script>