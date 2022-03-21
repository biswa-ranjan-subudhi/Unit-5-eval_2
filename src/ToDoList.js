import React from "react";
const ToDoList = (props) => {
    console.log(props);
    return (
        <>
            <li>{props.text.name}</li>
            <li>{props.text.department}</li>
            <li>{props.text.gender}</li>
            <li>{props.text.role}</li>
            <li>{props.text.salary}</li>
        </>
    )
}
export default ToDoList