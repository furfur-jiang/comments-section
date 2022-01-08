<template>
    <div class="comment">
        <div v-for="item in commentsList" :key="item.id">
            <ComponentItem :comment="item"/>
        </div>
    </div>
</template>

<script>
import ComponentItem from "./CommentItem.vue";
export default {
    name: "CommentList",
    components: {
        ComponentItem,
    },
    data() {
        return {
            commentsList:[]
        };
    },
    props: {
        comments: {
            type: Array,
            props: () => [],
        },
    },
    mounted() {
        if (!this.comments) {
            this.commentsList = this.$store.state.comments;
        }else{
             this.commentsList = this.comments
        }
    },
};
</script>

<style scoped lang="scss">
.comment {
    margin: 20px;
}
.head {
    color: #aca9a9;
    span {
        cursor: pointer;
    }
}
.reply {
    text-decoration: underline;
    color: #aca9a9;
    cursor: pointer;
}
</style>
