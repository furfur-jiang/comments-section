import Vue from 'vue'
import Vuex from 'vuex'
import {
    deepFind
} from '../utils/index'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        comments: [{
                id: '1',
                name: 'fur',
                time: '1641645103',
                content: '111',
                sup: null,
                subComment: [{
                        id: '4',
                        name: 'furSub',
                        time: '1641652303',
                        content: '444',
                        subComment: [{
                            id: '7',
                            name: 'furSub',
                            time: '1641652303',
                            content: '777',
                            subComment: [],
                            sup: '4'
                        }, ],
                        sup: '1'
                    },
                    {
                        id: '6',
                        name: 'furSub',
                        time: '1641652303',
                        content: '666',
                        subComment: [],
                        sup: '1'
                    }
                ]
            },
            {
                id: '2',
                sup: null,
                name: 'fur2',
                time: '1641627103',
                content: '222',
                subComment: [{
                    id: '5',
                    name: 'fur1Sub',
                    time: '1641652303',
                    content: '555',
                    subComment: [],
                    sup: '2'
                }]
            },
            {
                id: '3',
                sup: null,
                name: 'fur3',
                time: '1641616303',
                content: '333',
                subComment: []
            }
        ]
    },
    mutations: {
        addComment(state, data) {
            console.log(data)
            if (data.sup) {
                let commentSup = deepFind(state.comments, data.sup)
                console.log('commentSup', commentSup)
                commentSup.subComment.unshift(data)
            } else {
                state.comments.unshift(data)
            }

        }
    },
    actions: {},
    modules: {}
})