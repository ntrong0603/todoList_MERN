// khoi tao component
// import react
// component co the nhan vao nhieu props
import React, { Component } from 'react';

// them thu vien classnames de xu ly su kioen len quan den class css
import classnames from 'classnames';
//import PropTypes from 'prop-types'; 

import './TodoItem.css';
import checkImg from "./images/check.svg";
import checkImg_done from "./images/check-complete.svg";
import deleteItem from "./images/delete.svg";

//khai bao class
// trong react props la read only
class TodoItem extends Component{
    // method render reuturn ra element muon su dung
    // // demo su ly su kien trong react
    // constructor(props){
    //     super(props);

    //     this.onItemClick = this.onItemClick.bind(this);
    // }

    // onItemClick(){
        
    // }

    render() {
        const {item, onClick, onDelete} = this.props;
        // /*
        // hoac dung const {item} = this.props;
        // */
        // let className = "to-Do-Item";
        // if(item.isComplete){
        //     className += " to-Do-Item-Done";
        // }
        let url = checkImg;
        if(item.isComplete){
            url = checkImg_done;
        }
        return (
            // cach sua loi truyen vao mot ham goi ham onItemClick
            // neu truyen this.onItemClick() vao thay vi this.onItemClick thi ham se thuc thi ngay
            <div  className = {classnames( 'to-Do-Item', {'to-Do-Item-Done': item.isComplete})}>
                <img onClick = {onClick} src = {url} alt = {item.title} />
                <p> {item.title}</p>
                <img className = "btnDelete" onClick = {onDelete} src = {deleteItem} alt = {`delete ` + item.title}/>
            </div>
        );
    }
}

// ghi lai cac thuoc tinh du dinh cho props, canh bao neu khong trung khop
// add prop-types de su dung
// TodoItem.prototype = {
//     item: PropTypes.shape({
//         isComplete: PropTypes.bool.isRequired,
//         title: PropTypes.string.isRequired// thuoc tinh bat buoc phai co thi them isRequired
//     }),
//     onClick: PropTypes.func,
//     onDelete: PropTypes.func
// }
export default TodoItem;