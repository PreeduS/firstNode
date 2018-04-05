import React from 'react';

import styles from '../styles/Dropdown.scss';


class Dropdown extends React.Component {
    constructor(){
        super();
        this.dropdownRef = React.createRef(); 
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        var dropDownParentNode = this.dropdownRef.current.parentNode
        var target = e.target;
        var clickedInside = false;

        while(target.parentNode !== null){
            target = target.parentNode;       
            if(target === dropDownParentNode){
                clickedInside = true; break;
            }       
        }
        if(!clickedInside){ 
            this.props.onDropdownBlur(e);
        }

    }
    
    componentDidMount(){
        window.addEventListener('click',this.handleClick)
    }
    componentWillUnmount(){
        window.removeEventListener('click',this.handleClick)
    }

    render(){
        const {showDropdown} = this.props;
       


        return(
            <div ref = {this.dropdownRef}>
                {showDropdown && <div className = {styles.dropDown} >
                    dropdown
                    <div>test</div>
                    <div>test<div>test2</div></div>
                    <div>test2<div>test2<div>test2</div></div></div>
                </div>}
            </div>
        );
    }
}

export default Dropdown;