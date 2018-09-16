<template>
    <div>
        <h1>Posts</h1>
        <div v-for="post in postList" :key="post._id">
        <b-card>
        <b-media>
          <b-img slot="aside" blank blank-color="#ccc" width="64" alt="placeholder" />
          <h5 class="mt-0" v-text="post.user"></h5>
          <p v-text="post.content"></p>
        </b-media>
        <div class="btn-card">
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Remover</b-button>
        </div>
      </b-card>
      </div>
    </div>

</template>
<script>
/* eslint-disable */
import { mapGetters, mapActions } from 'vuex' 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
    name: 'posts',

    computed: {
        ...mapGetters(['getPostList']),

        postList() {
            let list = this.getPostList
            return list.reverse()
        }
    }
}
</script>