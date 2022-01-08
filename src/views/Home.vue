<template>
  <div>
    <CommentAdd />
    <CommentList />
  </div>
</template>

<script>
// @ is an alias to /src
import CommentAdd from '@/components/CommentAdd.vue'
import CommentList from '@/components/CommentList.vue'

export default {
  name: 'Home',
  components: {
    CommentAdd,
    CommentList
  }
}
</script>
