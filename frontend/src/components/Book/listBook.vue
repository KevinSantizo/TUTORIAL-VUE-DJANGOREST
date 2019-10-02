<template>
   <div class="container">
        <div class="row">
            <div class="col text-left">
                <h1>All Blogs Articles published</h1>
                <div>
                    <b-button :to="{name: 'NewBook'}" variant="primary">New Book</b-button>
                </div>
                <br>
                <table class="table">
                    <thead  class="thead-dark">
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="book in books">
                            <td>{{ book.title }}</td>
                            <td>{{ book.description }}</td>
                            <td>
                            <router-link v-bind:to="'books/'+book.id+'/edit' "><b-button  variant="warning">Editar</b-button></router-link>
                            <router-link v-bind:to="'books/'+book.id+'/delete' "><b-button  variant="danger">Eliminar</b-button></router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
</template>

<script>

import axios from 'axios';
import editBook from '@/components/Book/EditBook.vue';

export default {
    data(){
        return {
            fields: [
                { key: 'title', label: 'Title' },
                { key: 'description', label: 'Description' },
                { key: 'action', label: 'Action' }
            ], 
            books: []
        }
    },
    methods: {
        getBooks(){
            const path = 'http://127.0.0.1:8000/api/v1.0/books/'
            axios.get(path).then((response) =>{
                this.books = response.data
            })
            .catch((error) => {
                console.log(error);
            })
        }
    },
    created(){
        this.getBooks()
    }
}
</script>