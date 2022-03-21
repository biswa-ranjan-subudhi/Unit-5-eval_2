import React from 'react'
import './ToDo.css'
import ToDoList from './ToDoList';


function ToDo() {
    const [name, setName] = React.useState("");
    const [department, setDepartment] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [role, setRole] = React.useState("");
    const [salary, setSalary] = React.useState("");
    const [Data, setData] = React.useState([])

    const getToDos = () => {
        return fetch('https://json-server-mocker-masai.herokuapp.com/tasks')
            .then(res => res.json())
            .then((res) => {
            setData(res)
            })
    }
    const addToDos = (name, department, gender, role, salary) => {
        const payload = {
            name: name,
            department: department,
            gender: gender,
            role: role,
            salary: salary,
            status:false
        }
        return fetch('https://json-server-mocker-masai.herokuapp.com/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(payload)
        })
            .then(res => res.json())
            .then((res) => {
                return getToDos()
            })
    }

    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <br />
                    <h1>Employee Add List</h1>
                    <br />
                    
                <button onClick={() => {
                        setName('')
                        setDepartment('')
                        setGender('')
                        setRole('')
                        setSalary('')
                    addToDos(name, department, gender, role, salary)}
                }>Add</button><br/>
                    
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Add Employee Name' /><br />
                    <input value={department} onChange={(e) => setDepartment(e.target.value)} placeholder='Add Employee Department' /><br/>
                    <input value={gender} onChange={(e) => setGender(e.target.value)} placeholder='Add Employee Gender' /><br/>
                    <input value={role} onChange={(e) => setRole(e.target.value)} placeholder='Add Employee Role' /><br/>
                    <input value={salary} onChange={(e) => setSalary(e.target.value)} placeholder='Add Employee salary' /><br/>

           <div className='list'>
            <ul>
                    {Data.map((item,index) => {
                        return <ToDoList text={item} 
                            id={index}
                            key={index}
                        />
                    })}
                   
            </ul>
            </div> 


                </div>
            </div>
        </>
    )

}
export { ToDo}