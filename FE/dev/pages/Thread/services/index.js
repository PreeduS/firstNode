import axios from 'axios';

const services = {
    loadComments: threadId =>
        axios.get('/api/thread/getall',{threadId})
    ,
    loadMoreComments: (threadId, lastId) =>
        axios.get('/api/thread/loadMoreComments',{
            params: {threadId, lastId}
        })
    ,
    loadMoreReplies: (threadId, commentGroupId, lastReplyId) =>
        axios.get('/api/thread/loadMoreReplies',{
            params: {threadId, commentGroupId, lastReplyId}
        })
    ,
    addComment: (threadId, content) =>
        axios.post('/api/Thread/addComment',{threadId, content})
    ,
    addReply: (threadId, content, replyTo) =>
        axios.post('/api/Thread/addReply',{threadId, content, replyTo})
    ,

}

export default services;