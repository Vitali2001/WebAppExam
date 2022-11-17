import { FormikProvider, useFormik,Form } from 'formik';
import React, { useState } from 'react'
import { IStudentCreate } from './types';
import http from "../../http.common";
import InputComponent from "../../containers/InputComponent/index.tsx";

import { useNavigate } from 'react-router-dom';
import HomeLayout from "../../containers/Navbar/index.tsx";
import toastr from 'toastr';
import "toastr/build/toastr.css"
import EclipseWidgetContainer from "../Eclipse/index.tsx";


export const CreateStudentLayout: React.FC = () => {
    const initValues: IStudentCreate = {
        lName: "",
        fName: "",
        mName: "",
        subject: ""
    }
    const [isLoad, setLoad] = useState<boolean>(false);
    const navigator = useNavigate();
    const onHandleSubmit = async(values: IStudentCreate)=>{
        setLoad(prev=>!prev)
        try{

            const result = await http.post("/api/students",values);

            if(result.data === "Some error occurred while retrieving students."){
                setLoad(prev=>!prev)
                toastr.error("Some error occurred while retrieving students.!","Error!")
            }
            else{
                setLoad(prev=>!prev)
                toastr.success("Add successfuly!","Success")
            navigator("/students")
            }
        }
        catch(ex){
            setLoad(prev=>!prev)
            console.log("Server problem",ex)
            toastr.error("Some error occurred while retrieving students.!","Error!")
        }
    }
    const formik = useFormik({
        initialValues: initValues,
        onSubmit: onHandleSubmit,
    })
    const {handleChange,handleSubmit,errors, touched} = formik
    return (
        
        <div className="row">
            <HomeLayout/>
           
               <div className="offset-md-3 col-md-6">
                <h1 className="text-center">
                Add
                </h1>
                <FormikProvider value={formik}>
                     <Form onSubmit={handleSubmit}>
                         <InputComponent
                             inputName="fName"
                             title="First Name"
                             touched={touched.fName}
                             errors={errors.fName}
                             handleChange={handleChange}
                             />
                             <InputComponent
                             inputName="lName"
                             title="Last Name"
                             touched = "true"
                             handleChange={handleChange}
                             errors={errors.lName}
                             />
                             <InputComponent
                             inputName="mName"
                             title="Midle Name"
                             touched={touched.mName}
                             errors={errors.mName}
                             handleChange={handleChange}
                             />
                             <InputComponent
                             inputName="subject"
                             title="Subject"
                             touched={touched.subject}
                             errors={errors.subject}
                             handleChange={handleChange}
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
        
    );
};
