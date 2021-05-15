<template>
  <div class="container-fluid">
    <navbar/>
    <post-item v-for="post in posts"
    :key="post._id"
    :name="post.name"
    :title="post.title"
    :content="post.content"

    :email="post.email"
    />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import PostItem from '../components/PostItem'
// import {fetchPostsAPI} from '../store/posts'
export default {
  components:{
    Navbar,
    PostItem
  },
  // async asyncData() {
  //   const posts = await fetchPostsAPI()
  //   return {posts}
  // },
  // mounted(){
  //   console.log('mounted')
  //   this.$store.dispatch('posts/fetchPosts')
  // },
  // // sử dụng computed để có thể update được state video No.72
  fetch({store}){
    if(store.getters['posts/hasEmptyItems']){
         return store.dispatch('posts/fetchPosts')
    }
  }
  ,
  computed:{
    posts(){
      console.log('computed-posts')
      return this.$store.state.posts.posts
    }
  }
  ,
  data(){
    console.log('data()')
    return {
     
      // posts:[]
      // posts: this.$store.state.posts
    }
  }
}
//


</script>

