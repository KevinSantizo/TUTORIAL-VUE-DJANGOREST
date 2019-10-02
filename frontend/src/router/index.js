import Vue from 'vue'
import Router from 'vue-router'
import listBook from '@/components/Book/listBook'
import EditBook from '@/components/Book/EditBook'
import DeleteBook from '@/components/Book/DeleteBook'
import NewBook from '@/components/Book/NewBook'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/books',
      name: 'listBook',
      component: listBook
    },
    {
      path:'/books/:bookId/edit',
      name: 'EditBook',
      component: EditBook
    },
    {
      path:'/books/:bookId/delete',
      name: 'DeleteBook',
      component: DeleteBook
    },
    {
      path:'/books/new',
      name: 'NewBook',
      component: NewBook
    },
  ],
  mode: 'history'
})
