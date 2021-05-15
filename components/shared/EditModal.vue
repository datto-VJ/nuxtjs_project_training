<template>
    <div class="mt-3">
        <slot></slot>
        <b-modal id="modal-2" title="What do you feel today">
           <form>
                <label for="formGroupExampleInput">Title 2</label>
                <input type="text" class="form-control mb-2" 
                id="formGroupExampleInput" 
                placeholder="Enter your title">
                <label for="exampleFormControlTextarea1">Content</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" 
                placeholder="Enter your posts"></textarea>
            </form>
        </b-modal>
    </div>
</template>

<script>
export default {
    data(){
        return {
           
        }
    },
    methods:{
        
    }
}
</script>