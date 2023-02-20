import {Link, Outlet } from "react-router-dom"

export function StudentNav() {
    const students = [
        {name: "Valentin", id: 1},
        {name: "Jonathan", id: 2},
        {name: "Andrea", id: 3},
        {name: "Casper", id: 4},
        {name: "Alina", id: 5},
        {name: "Moritz", id: 6}
        ]

        

    return(
        <div className="dashboard">
           <div className="student-nav">
                <h3>Student charts</h3>
                
                {students.map((student)=>(
                    <Link to={student.name} key={student.id} >{student.name}</Link>
                ))}
                
            </div>
            <div className="student-chart">
               <Outlet /> 
            </div>
             
        </div>
    )
    
}