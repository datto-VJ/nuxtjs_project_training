<template>
  <div class="container-fluid">
    <navbar/>
    <b-row>
        <b-col cols="3" style="text-align:center">
            <Modal @modalSubmitted="createNewPosts">
              <form>
                <label for="formGroupExampleInput">Title</label>
                <input type="text" class="form-control mb-2" 
                id="formGroupExampleInput" 
                placeholder="Enter your title"
                v-model="form.title"/>
                <label for="exampleFormControlTextarea1">Content</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" 
                placeholder="Enter your posts"
                v-model="form.content"></textarea>
              </form>
            </Modal>
            <button type="button" class="btn btn-primary mt-3">Sort by date</button>
            <form class="border border-dark m-2 p-2 rounded" 
            v-if="triggerForm" @submit.prevent="updateMyPosts">
              <div class="form-group">
                <label for="updateTitle">Title</label>
                <input type="text" class="form-control" id="updateTitle" v-model="editPostsData.title"
                 />
              </div>
              <div class="form-group">
                <label for="updateContent">Content</label>
                <textarea class="form-control" id="updateContent" rows="5" v-model="editPostsData.content"
                ></textarea>
              </div>
              <button 
              
              type="submit" class="btn btn-primary">Update</button>
            </form>
        </b-col>
        <b-col cols="6">
            <myposts-item v-for="mypost in myposts"
            :key="mypost._id"
            :id="mypost._id"
            :title="mypost.title"
            :content="mypost.content"
            :image="mypost.image"
            @emitEditPosts="editPosts"
            @emitDeletePosts="deletePosts"
            />
        </b-col>
        <b-col cols="3" style="text-align:center">
             <b-calendar locale="en-US"></b-calendar>
        </b-col>
    </b-row>
  </div>
</template> 

<script>
import Navbar from '../components/Navbar'
import MypostsItem from '../components/MypostsItem'
import Modal from '../components/shared/Modal'
// import EditModal from '../components/shared/EditModal'
export default {
  components:{
    Navbar,
    MypostsItem,
    Modal
  },
  fetch({store}){
    if(store.getters['posts/hasEmptyItems']){
         return store.dispatch('posts/fetchMyPosts')
    }
  },
  computed:{
    myposts(){
      return this.$store.state.posts.myposts
    }
  },
  data(){
    return {
      // myposts: this.$store.state.myposts
       form:{
                title:"",
                content:""
            },
        editPostsData:{},
        triggerForm:false
    }
  },
  methods:{
    createNewPosts(){
      console.log(this.form.title)
      console.log(this.form.content)
      this.$store.dispatch('posts/fetchCreatePosts',{...this.form})
      this.resetForm()
    },
    updateMyPosts(){
      this.$store.dispatch('posts/fetchUpdatePosts',{...this.editPostsData})
      this.triggerForm = false
    },
    resetForm(){
      this.form.title=""
      this.form.content=""
    },
    editPosts(data){
      this.triggerForm=true
      this.editPostsData = data
    },
    deletePosts(id){
      this.$store.dispatch('posts/fetchDeletePosts',id)
    }
  }
}
</script>

