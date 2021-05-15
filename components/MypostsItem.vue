<template>
    <div style="padding:3px">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;margin:auto">
            <b-row no-gutters>
            <b-col md="6">
                <b-card-img src="../assets/images/img_mypost_01.jpg" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
                <b-card-body :title="title" :id="id">
                <b-card-text>
                    {{content}}
                </b-card-text>
                <div style="text-align:center" >
                    <button type="button" class="btn btn-primary"
                    @click="editMyPosts(title,content,id)">Edit</button>
                    <button type="button" class="btn btn-primary"
                    @click="deleteMyPosts(id)">Delete</button>
                </div>
                </b-card-body>
            </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
export default {
    props:{
        id:{
            type:Number,
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
        // image:{
        //     type:String,
        //     required:false
        // }
    },
    data(){
        return{
            editPostsData:{
                id:"",
                title:"",
                content:"",
                // flag:true
            }
        }
    },
    methods:{
        editMyPosts(title,content,id){
            this.editPostsData.title = title
            this.editPostsData.content = content
            this.editPostsData.id = id
            console.log(id)
            this.$emit('emitEditPosts',this.editPostsData)
        },
        deleteMyPosts(id){
            
             this.$emit('emitDeletePosts',id)
        }
    }
}
</script>