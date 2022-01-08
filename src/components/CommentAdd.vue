<template>
    <div class="comment" v-if="showComment">
        <textarea
            autofocus
            v-model.trim="comment.content"
            rows="10"
            style="width: 100%"
        ></textarea>
        <button @click="addComment">add comment</button>
    </div>
</template>

<script>
export default {
    name: "CommentAdd",
    data() {
        return {
            showComment: true,
            comment: {
                id: Math.random(),//TODO：复用子组件导致重复id，先以输入不同内容拼接
                sup: null,
                name: "fur2",
                time: "1641627103",
                content: "",
                subComment: [],
            },
        };
    },
    props: {
        closedComment: {
            type: Boolean,
            default: false,
        },
        supId:{
            type:String,
            default:''
        }
    },
    watch:{
        supId:function(newVal){
            console.log(newVal)
        }
    },
    methods: {
        addComment() {
            console.log('supId',this.supId)
            if (this.comment.content.length <= 0) {
                alert("请输入内容");
                return;
            }
            if(this.supId){
                this.comment.sup = this.supId
            }
            this.comment.id = this.comment.id+this.comment.content //TODO:随机性不随机
            let comment = JSON.parse(JSON.stringify(this.comment));
            console.log(comment)
            this.$store.commit("addComment", comment);
            this.comment.content = "";
            this.$emit('handleCommentAdd')
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.comment {
    margin: 20px;
}
</style>
