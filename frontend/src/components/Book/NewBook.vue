<template>
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <div>
                <h2>New Book</h2>
                <b-button type="submit" class="btn-large-space" :to="{ name: 'listBook' }">Books</b-button>
                </div><br>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <form @submit="onSubmit">
                            <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label">Title:</label>
                                <div class="col-sm-6">
                                    <input type="text" required placeholder="Title" name="title" class="form-control" v-model.trim="form.title">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="title" required class="col-sm-2 col-form-label">Description:</label>
                                <div class="col-sm-6">
                                    <textarea name="description" class="form-control" placeholder="Description" rows="3" v-model.trim="form.description"></textarea>
                                </div>
                            </div>
                            <div class="rows">
                                <div class="col text-left">
                                    <b-button type="submit" variant="primary">Create Book</b-button>
                                    <b-button type="submit" class="btn-large-space" :to="{ name: 'listBook' }">Cancelar</b-button>
                                </div>
                            </div>  
                        </form>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
export default {
    data(){
        return {
            form: {
                title: '',
                description: ''
            }
        }
    },
    methods: {
        onSubmit(evt){
            event.preventDefault()
            const path = 'http://127.0.0.1:8000/api/v1.0/books/'
            axios.post(path, this.form).then((response) => {
                this.form.title = response.data.title
                this.form.description = response.data.description

                swal("Book Created Successfully", "", "success")
            })
            .catch((error) =>{
                swal("Book don't created!", "", "error")
            })  
        },
    },
    created(){
        
    }   
}
</script>