import { FormikProvider, useFormik,Form } from 'formik';
import React, { useState } from 'react'
import HomeLayout from "../../containers/Navbar/index.tsx"
import { IStudentUpdate } from './types';
import http from "../../http.common";
import InputComponent from "../../containers/InputComponent/index.tsx";
import { useNavigate } from 'react-router-dom';
import toastr from 'toastr';
import "toastr/build/toastr.css"
import EclipseWidgetContainer from "../Eclipse/index.tsx";
import {useTypedSelector} from "../../hooks/usedTypedSelector.ts"

export const UpdateStudentLayout: React.FC = () =>{
   
    const initValues: IStudentUpdate = {
        id: 0,
        lName: "",
        fName: "",
        mName: "",
        subject: ""
    }
    const navigator = useNavigate();
    const {currentStudent} = useTypedSelector(store=>store.currentStudent) 
    const [isLoad, setLoad] = useState<boolean>(false);
    const onHandleSubmit = async(values: IStudentUpdate)=>{
        setLoad(prev=>!prev)
        console.log(isLoad)
        values.id = currentStudent.id;
        if(values.fName === "")
        {
            values.fName = currentStudent.fName
        }
        if(values.lName ==="")
        {
            values.lName = currentStudent.lName
        }
        if(values.mName ==="")
        {
            values.mName = currentStudent.mName
        }
        if(values.subject === "")
        {
            values.subject = currentStudent.subject
        }
       try{
            const result = await http.put(`api/students/${values.id}`,values);
            console.log("Create user result: ",result.data)
            if(result.data === ""){
                setLoad(prev=>!prev)
                toastr.error("Server dont working!","Error!")
            }
            else{
                setLoad(prev=>!prev)
                toastr.success("Success update!","Success")
                
                    navigator("/students") 
                
            }
        }
        catch(ex){
            setLoad(prev=>!prev)
            console.log("Server problem",ex)
            toastr.error("Server dont working!","Error!")
        }
    }
    const formik = useFormik({
        initialValues: initValues,
        onSubmit: onHandleSubmit
    })
    const {handleChange,handleSubmit,errors, touched} = formik
    
    return(
        <div>
        
           
            <div className="row">
            <HomeLayout/>
                 <div className="offset-md-3 col-md-6">
                 <h1 className="text-center">
                 Update
                 </h1>
                 <FormikProvider value={formik}>
                     <Form onSubmit={handleSubmit}>
                         <InputComponent
                             inputName="fName"
                             title="First Name"
                             touched={touched.fName}
                             errors={errors.fName}
                             handleChange={handleChange}
                             defaultVal = {currentStudent.fName}
                             />
                             <InputComponent
                             inputName="lName"
                             title="Last Name"
                             touched = "true"
                             handleChange={handleChange}
                             defaultVal={currentStudent.lName}
                             errors={errors.lName}
                             />
                             <InputComponent
                             inputName="mName"
                             title="Midle Name"
                             touched={touched.mName}
                             errors={errors.mName}
                             handleChange={handleChange}
                             defaultVal={currentStudent.mName}
                             />
                             <InputComponent
                             inputName="subject"
                             title="Subject"
                             touched={touched.subject}
                             errors={errors.subject}
                             handleChange={handleChange}
                             defaultVal = {currentStudent.subject}
                             />
                             
                         {
                         isLoad?
                         <EclipseWidgetContainer/>
                         :
                         <button type="submit" className="btn btn-primary">
                             Save
                         </button>
                         }
                     </Form>
                 </FormikProvider>
                </div>
                
        </div>
    </div>
    )
}

