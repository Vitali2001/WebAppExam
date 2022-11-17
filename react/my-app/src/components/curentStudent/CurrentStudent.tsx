import * as React from "react";
import http from "../../http.common"
import HomeLayout from "../../containers/Navbar/index.tsx";
import {useTypedSelector} from "../../hooks/usedTypedSelector.ts"
import { useNavigate } from 'react-router-dom';
import toastr from 'toastr';
import "toastr/build/toastr.css"
import { useDispatch } from "react-redux";




const CurrentStudentView: React.FC = () =>{

    const dispatch = useDispatch();
    const {currentStudent} = useTypedSelector(store=>store.currentStudent)
    const {selected} = useTypedSelector(store=>store.currentStudent) 
    const navigator = useNavigate()
    React.useEffect(()=>{
        if(!selected)
        navigator("/students")
    })
    function OnUpdateClick()
    {
        navigator("/update_student")
    }
    async function OnDeleteClick()
    {      
            try{
                const result = await http.delete(`api/students/${currentStudent.id}`);
                if(result.data === ""){
                    toastr.error("Servers error!","Error!")
                }
                else{
                    toastr.success("Delete successfuly!","Delete")
                    dispatch({
                        type: "CLEAR_CURRENT_STUDENT"
                      })
                    window.history.back();
                    
                }
            }
            catch(ex){
                console.log("Server problem",ex)
                toastr.error("Servers error!","Error!")
            }
        
    }

    return(
        <div>
            {
                selected
                ?
                (

                    <div className="row">
                        <HomeLayout/>
                        <div style={{textAlign:"center",margin:"10px"}}>
                                <button type="button" className="btn btn-warning" onClick={OnUpdateClick}>Update</button>
                                &nbsp;
                                <button type="button" className="btn btn-danger" onClick={OnDeleteClick}>Delete</button>
                            </div> 
                    <div style={{textAlign:"center"}}>
                    <h1>{currentStudent.lName}</h1>
                    <h2>{currentStudent.fName}</h2>
                    <h2>{currentStudent.mName}</h2>
                    <h3>{currentStudent.subject}</h3>
                    </div>
                    </div>
                    
                )
                :
                <div className="row">
                <HomeLayout/>
                <h1>Сталася помилка</h1>
                </div>
            }
        </div>
    )
}

export default CurrentStudentView
