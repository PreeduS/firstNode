import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import styles from './styles/Threads.scss';

import Thread from './components/Thread';

class Threads extends React.Component {
    constructor(){
        super();
        this.state = {
            threads:[]
        }
    }
    componentDidMount(){


        axios.get('/api/threads/getThreads')
        .then( response => {
          console.log(response.data);
 
            this.setState({
                threads: response.data
            });

        })
        .catch( err => {
          console.log(err);
        });
      

    }

    render(){
        let {threads} = this.state
        return(
            <div>
                {threads.length > 0 && threads.map(t => 
                    <Thread key = {t.id} {...t}/>
                )}

            </div>
        );
    }
}

export default Threads;