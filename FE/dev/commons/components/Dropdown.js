import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../styles/Dropdown';


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
        var preventClose = this.props.preventClose;

        while(target.parentNode !== null){
            target = target.parentNode;
            if(target === dropDownParentNode){
                clickedInside = true; break;
            }
        }
        if(!clickedInside && !preventClose){
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
        let {showDropdown, preventClose} = this.props;
        if(preventClose){ showDropdown = true; }
        return(
            <div ref = {this.dropdownRef}>
                {showDropdown &&
                <styles.Dropdown>
                    {this.props.children}
                </styles.Dropdown>}
            </div>
        );
    }
}

Dropdown.propTypes = {
    showDropdown: PropTypes.bool.isRequired,
    onDropdownBlur: PropTypes.func,
    preventClose: PropTypes.bool

}
Dropdown.defaultProps = {
    preventClose: false
};

export default Dropdown;