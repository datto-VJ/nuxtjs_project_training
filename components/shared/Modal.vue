<template>
    <div class="mt-3">
        <button v-b-modal.modal-1 class="btn btn-primary">Create new posts</button>
        <b-modal id="modal-1" title="What do you feel today"
        @ok="emitSave">
           <slot></slot>
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
        emitSave(){
            console.log("Emit save")
            this.$emit("modalSubmitted")
        }
    }
}
</script>