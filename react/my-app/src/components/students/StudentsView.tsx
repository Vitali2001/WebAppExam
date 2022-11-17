import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeLayout from "../../containers/Navbar/index.tsx"
import {useTypedSelector} from "../../hooks/usedTypedSelector.ts"
import {IStudentItem} from "./types.ts"
import axios from "axios"
import EclipseWidgetContainer from "../../components/Eclipse/index.tsx"
import { useNavigate } from 'react-router-dom';


const StudentView: React.FC = () =>{
   
    const navigator = useNavigate()
    const {list, loading} = useTypedSelector(store=>store.students); 
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch({
        type: "CLEAR_CURRENT_STUDENT"
      })
        dispatch({
          type: "CLEAR_TABLE"
        })
        dispatch({
            type: "GET_LIST_STUDENT",
          });
          axios.get<Array<IStudentItem>>("http://localhost:8081/api/students").then((resp) => {
            dispatch({
              type: "GET_LIST_STUDENT_SUCCESS",
              payload: resp.data,
            });
           
          });
        
      },[dispatch]);
      function OnAddStudent()
      {
        navigator("/add_student")
      }
      function OnClickStudent(item : any){
        dispatch({
          type: "SET_CURRENT_STUDENT",
          payload: item
        })
        navigator("/current_student")
      }
      const listStudents = list.map((item) => (
        <tr key={item.id} onClick={(e)=>OnClickStudent(item)}>
          <th>{item.lName}</th>
          <th>{item.fName}</th>
          <th>{item.mName}</th>
          <th>{item.subject}</th>
        </tr>));

   return(
        <div>
        <HomeLayout/>
        <h1  style={{textAlign:"center"}}>Students</h1>
        <div style={{margin:"10px",textAlign:"right"}}> 
              <button type="button" className="btn btn-primary" onClick={OnAddStudent}>Add Student</button>
        </div>
        {
          loading?
          <EclipseWidgetContainer/>
          :
          (

              <table className="table table-dark table-hover" >
          <thead>
          <tr>
            <th scope="col">Last Name</th>
            <th scope="col">First Name</th>
            <th scope="col">Midle Name</th>
            <th scope="col">Subject</th>
          </tr>
        </thead>
            <tbody>
          {listStudents}
          </tbody>
          </table>
            )
          }
          </div>
          )
        }


export default StudentView