<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col">
                <h3>Are You sure?</h3>
                <p>Title:{{ this.element.title }}</p>
                <p>Description:{{ this.element.description }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <b-button v-on:click="deleteBook" variant="danger">Eliminar</b-button>
            </div>    
        </div>  
    </div>
    
</template>


<script>
import axios from 'axios';
export default {
    data(){
        return {
            bookId: this.$route.params.bookId,
            element: {
                title: '',
                description: ''
            }
        }
    },
    methods : {
        getBook(){
            const path = `http://127.0.0.1:8000/api/v1.0/books/${this.bookId}/`
            axios.get(path).then((response)=>{
                this.element.title = response.data.title;
                this.element.description = response.data.description;
            })
            .catch((error) =>{
                console.log(error);
            })
        },
        deleteBook(){
            const path = `http://127.0.0.1:8000/api/v1.0/books/${this.bookId}/`
            axios.delete(path).then((response)=>{
                swal("Book deleted!", "", "success")
            })
            .catch((error) => {
                swal("Impossible to delete the book", "", "error")
            })
        }
    },
    created(){
        this.getBook()
    }
}
</script>