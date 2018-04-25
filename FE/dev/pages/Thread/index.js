import React from 'react';
import {connect} from 'react-redux';

//actions
import {loadComments } from './actions';

import Comments from './containers/Comments';
import Content from './components/Content';
import LoaderHoc from '~/commons/components/LoaderHoc';
const CommentsHoc = LoaderHoc(Comments);

import * as styles from './styles/Thread';


class Thread extends React.Component {
    componentDidMount(){
        this.props.loadComments();
    }
    render() {
        return (
            <styles.ThreadWrapper>
                <Content />
                <CommentsHoc loading = {this.props.comments.data.length === 0} />
            </styles.ThreadWrapper>
        );
    }
}


const mapStateToProps = state =>( {
    comments: state.CommentsReducer
});
const mapDispatchToProps = dispatch => ({
    loadComments:() =>
        dispatch(()=> loadComments()(dispatch))

});

export default connect(mapStateToProps, mapDispatchToProps)(Thread);
