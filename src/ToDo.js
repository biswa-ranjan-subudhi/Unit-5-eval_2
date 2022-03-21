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
    const filterHr=()=>{
        let d1 = Data.filter((emp) => emp.department == "Hr");
        setData(d1)
    }
    const filterIt=()=>{
        let d2 = Data.filter((emp) => emp.department == "IT");
        setData(d2)
    }
    const filterFinance=()=>{
        let d3 = Data.filter((emp) => emp.department == "Finance");
        setData(d3)
    }
    const filtermarketing=()=>{
        let d4 = Data.filter((emp) => emp.department == "Marketing");
        setData(d4)
    }
    const filternone=()=>{
        let d5 = Data.filter((emp) => (emp.department == "Hr" || emp.department=='IT'|| emp.department=='Finance'|| emp.department=='Marketing'));
        setData(d5)
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
            <div className='filter'>       
                        <button onClick={filternone}>Show All Departments</button>
                        <button onClick={filtermarketing} >Show Marketing</button>
                        <button onClick={filterHr}>Show Hr</button>
                        <button onClick={filterIt}>Show IT</button>
                        <button onClick={filterFinance}>Show Finance</button>
                        
</div> 
                </div>
            </div>
        </>
    )

}
export { ToDo }