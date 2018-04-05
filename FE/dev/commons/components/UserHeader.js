import React from 'react';

import styles from '../styles/UserHeader.scss';

import Dropdown from './Dropdown';

class UserHeader extends React.Component {
    constructor(){
        super();
        this.state = {
            showDropdown:false
        }
        this.dropdownButtonContainerRef = React.createRef(); 

        this.toogleDropdown = this.toogleDropdown.bind(this);
        this.dropdownBlur = this.dropdownBlur.bind(this);
    }
    toogleDropdown(){
        this.setState({showDropdown: !this.state.showDropdown});
    }
    dropdownBlur(e){
        if( [...this.dropdownButtonContainerRef.current.children].indexOf(e.target) === -1  ){
            this.setState({showDropdown: false});
        }

    }

    render(){
        const {showDropdown} = this.state;
    
        return(
            <div className ={styles.userHeader}>
                <div className = {styles.leftContent}>l</div>
                <div className = {styles.rightContent} ref = {this.dropdownButtonContainerRef}>
                    <div onClick = {this.toogleDropdown}>username</div>
                    <div onClick = {this.toogleDropdown}>&#9662;</div>            
                </div>
                <div className = {styles.dropDownContainer}>
                    <Dropdown showDropdown = {showDropdown} onDropdownBlur = {this.dropdownBlur}/>
                </div>
            </div>
        );
    }

}

export default UserHeader;