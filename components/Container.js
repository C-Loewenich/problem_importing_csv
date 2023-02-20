import React, {Component, useEffect} from "react"
import {Link, Route, Routes} from "react-router-dom"
import Home from "./Home"
import Dashboard from "./Dashboard"
import StudentChart from './StudentChart'
import NotFound from "./NotFound"
import {StudentNav} from './StudentNav';
import GetStudentData from "./GetStudentData"

//import {csv} from "https://cdn.skypack.dev/d3-dsv@3";
//import {studentData} from '../Student-test-data.json';



class Container extends Component{
    constructor(props){
        super(props)
        this.state = {
            studentData: [
                {name: "Evelyn", assignment: "SCRUM", dificulty: 3, fun: 4},
                {name: "Evelyn", assignment: "W1D2-1", dificulty: 5, fun: 2},
                {name: "Evelyn", assignment: "W1D2-2", dificulty: 2, fun: 3},
                {name: "Bob", assignment: "SCRUM", dificulty: 2, fun: 1},
                {name: "Bob", assignment: "W1D2-1", dificulty: 4, fun: 1},
                {name: "Bob", assignment: "W1D2-2", dificulty: 2, fun: 5},
                {name: "Anna", assignment: "SCRUM", dificulty: 3, fun: 2},
                {name: "Anna", assignment: "W1D2-1", dificulty: 5, fun: 1},
                {name: "Anna", assignment: "W1D2-2", dificulty: 4, fun: 4},
            ]
        };
    }

    filterStudentData() {
        let studentArr = []
        let assignmentArr = []
        this.state.studentData.filter((item) => {
            if(!studentArr.includes(item.name)) {studentArr.push(item.name)}
            if(!assignmentArr.includes(item.assignment)) {assignmentArr.push(item.assignment)} 
        })
        console.log(studentArr)
        return {studentArr: studentArr, assignmentArr: assignmentArr} 
    }

    findAverages() {
        let averageByAssignment = [] 
        this.filterStudentData().assignmentArr.forEach(item => {
            let dificultyArr = []
            let funArr = []
            this.state.studentData.filter((data) => {
                if(data.assignment === item) {
                    dificultyArr.push(data.dificulty)
                    funArr.push(data.fun)
                }
            })
            const averageDificulty = dificultyArr.reduce((currentTotal, item) => currentTotal + item)/dificultyArr.length
            const averageFun = funArr.reduce((currentTotal, item) => currentTotal + item)/funArr.length
            averageByAssignment.push({assignment: item, avgDifficulty: averageDificulty, avgFun: averageFun})
        });
        return averageByAssignment
    }

    sortByStudent() {
        console.log(this.filterStudentData.studentArr)
        /* this.filterStudentData.studentArr.forEach(student => {
            this.state.studentData.filter(data => {
                if(data.name === student)
                console.log(data)
            })
        }) */
    }

    componentDidMount() {
        //console.log("Page Mounted")

       /*  console.log("Effect funtion ran")
        csv("./test.csv").then(studentData => {
            console.log(studentData)
        }) */

        /* const data = fetch("./test.csv")
        .then((response) => response.text())
        .then((studenData) => { 
            console.log(studenData)
            return studenData
        }) 
        console.log(data) */
        
        /* const CSVToJSON = require("csvtojson");
        const FileSystem = require("fs");
        CSVToJSON().fromFile("./test.csv").then(sourse => {
            console.log(sourse)
        })  */

    } 
  
  render() {
    //{console.log(this.findAverages())}
    this.sortByStudent()
    this.filterStudentData()
    return (
        <div>
        <header className="App-header">
            <h1>This is the header</h1>
            <nav>
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
            </nav>
        </header>
        <main>
            <h2>This is the main part</h2>
            <Routes>
            <Route path="/Home" element={<Home />} />
            <Route  element={<StudentNav />}>  
                <Route index element={<Dashboard />} />
                <Route path=":student" element={<StudentChart />} />
            </Route>
            <Route path="*" element={<NotFound />}/>
            </Routes>
        </main>
        </div>
    );
  }
  
}

export default Container;
