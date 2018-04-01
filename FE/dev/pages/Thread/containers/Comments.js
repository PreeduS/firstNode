import React from 'react';
import {connect} from 'react-redux';
import axios from 'Axios';

import Comment from '../components/CommentGroup';
import CommentTextArea from '../components/CommentTextArea';

import styles from '../styles/Comments.scss';


class Comments extends React.Component {
    constructor(){
        super();
        this.state = {
            comments:[]
        }
    }
    componentDidMount(){
        let that = this;

        axios.get('/api/thread/getall')
        .then(function (response) {
          console.log(response.data);
 
            that.setState({
                comments:response.data
            })

        })
        .catch(function (error) {
          console.log(error);
        });
      

    }

    render() {
        const {comments} = this.state;
        return <div className = {styles.commentsWrapper}> 
            On Comments...
            <br /><br />
            <CommentTextArea /><br />

            {comments.map( c => 
                <Comment key = {c.id} {...c}> </Comment> 
            )}


            
        </div>

    }
}

export default Comments;
//export default connect(null, null)(Comments);