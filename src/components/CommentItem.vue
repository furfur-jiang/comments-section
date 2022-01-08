<template>
    <div class="comment">
        <p class="head">
            {{ comment.name}}
            <span
                v-if="comment.subComment && comment.subComment.length"
                @click="showCommentDetail = !showCommentDetail"
            >
                [-]
            </span>
        </p>
        <p>{{ comment.content }}</p>
        <p class="reply" @click="showCommentAdd = !showCommentAdd">reply</p>
        <CommentAdd
            v-if="showCommentAdd"
            :supId="comment.id"
            @handleCommentAdd="closeCommentAdd"
        />
        <CommentList
            v-show="showCommentDetail"
            v-if="comment.subComment && comment.subComment.length"
            :comments="comment.subComment"
        />
    </div>
</template>

<script>
import CommentAdd from "./CommentAdd.vue";
const CommentList = () => import("./CommentList.vue"); //异步加载组件引入解决循环引用问题
export default {
    name: "CommentItem",
    components: {
        CommentAdd,
        CommentList,
    },
    data() {
        return {
            showCommentAdd: false,
            showCommentDetail: true,
        };
    },
    props: {
        comment: {
            type: Object,
            default: () => {},
        },
    },
    methods: {
        showCommentAddFun() {
            this.showCommentAdd = true;
        },
        closeCommentAdd() {
            this.showCommentAdd = false;
        },
    },
    mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
