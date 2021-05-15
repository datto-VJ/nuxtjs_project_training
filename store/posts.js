import initial_state from './initial_data.json'
//import Vue from 'vue'
export function fetchPostsAPI(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(initial_state.posts)
        },0)
    })
}
export function fetchMyPostsAPI(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(initial_state.myposts)
        },0)
    })
}
export const state = ()=>{
    return {
        posts:[],
        myposts:[]
    }
}

export const getters={
    hasEmptyItems(state){
        return state.posts.length === 0
    }
}

export const actions = {
    fetchPosts({commit}){
        console.log(`Calling Fetch Posts`)
        return fetchPostsAPI()
        .then(posts=>{commit('setPosts',posts)})
    },
    fetchMyPosts({commit}){
        console.log(`Calling Fetch My Posts`)
        return fetchMyPostsAPI()
        .then(myposts=>{commit('setMyPosts',myposts)})
    },
    fetchCreatePosts({commit},postsData){
        postsData._id=Math.random()
        return this.$axios.$post("/api/posts",postsData)
            .then(res=>{
                console.log(res)
                commit('addPosts',postsData)
            })
    },
    fetchUpdatePosts({commit,state},updateData){
        // console.log('data in fetchUpdatePosts',updateData)
        // console.log('data in state',state.myposts)
        const index = state.myposts.findIndex(mypost=>{
             return mypost._id == updateData.id
         })
        // console.log(index)
        commit('replaceMyPosts',{mypost:updateData,index})
        // console.log('data in state updated',state.myposts)
    },
    fetchDeletePosts({commit,state},id){
        const index = state.myposts.findIndex(mypost=>{
            return mypost._id == id
        })
        console.log(index)
        commit('deleteMyPosts',index)
    }
}
//Mutations are simple functions that have access to a state
//Muations are used assign value to a state 
export const mutations = {
    setPosts(state,posts){
        state.posts = posts
    },
    setMyPosts(state,myposts){
        state.myposts = myposts
    },
    addPosts(state,postsData){
        state.myposts.push(postsData)
    },
    replaceMyPosts(state,{mypost,index}){
        // console.log({mypost,index})
        // console.log(mypost.title)
        state.myposts[index].title = mypost.title
        state.myposts[index].content = mypost.content
        // console.log(state.myposts[index].title)
        // Vue.set(state.myposts,index,mypost)
    },
    deleteMyPosts(state,index){
        state.myposts.splice(index,1)
    }
}