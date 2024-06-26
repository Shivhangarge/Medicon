import React from "react";
import { Routes, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import {ToastContainer} from 'react-toastify';
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import DHome from "./component/Doctor/DHome";
import Register from './component/Doctor/Register';
import Login from './component/Doctor/Login';
import DoctorList from './component/Doctor/DoctorList';
import PHome from "./component/Patient/PHome"
import PLogin from "./component/Patient/Login"
import PRegister from "./component/Patient/Register"
import PatientList from './component/Patient/PatientList';
import PAppointment from './component/Patient/PAppointment';
import BookAppointment from './component/Appointment/BookAppointment';
import PatHistory from './component/Appointment/PatHistory';
import DAppointment from './component/Doctor/DAppointment';
import ShowAppointment from './component/Appointment/ShowAppointment';
import PatientDetails from './component/Appointment/PatientDetails';
import ShowSpecialDoctor from './component/Appointment/ShowSpecialDoctor';
import AHome from './component/Admin/AHome';
import AddAdmin from './component/Admin/AddAdmin';
import ALogin from './component/Admin/ALogin';
import ALogineHome from './component/Admin/ALogineHome';
import ShowAllApp from './component/Appointment/ShowAllApp';
import DEdit from './component/Doctor/DEdit';
import PEdit from './component/Patient/PEdit';
import DHeader from './component/Doctor/DHeader';
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";
import ResetPassDoctor from "./component/FrgtPass/ResetPassDoctor";
import ResetPassPatient from "./component/FrgtPass/ResetPassPatient";
import ForgetPasswordDoctor from "./component/FrgtPass/ForgetPasswordDoctor";
import ForgetPasswordPatient from "./component/FrgtPass/ForgetPasswordPatient";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/> } />
        <Route  path="/about" element={<About />} />
        <Route  path="/service" element={<Service />} />
        <Route  path="/contact" element={<Contact />} />

        /*<Route  path="/DHome" element={<DHome />} />
        <Route  path="/PHome" element={<PHome />} />

        <Route path="/DLogin" element={<Login />} />
        <Route path="/Doctor/registration" element={<Register />} />
        <Route path="/Doctor/showDoctors/show" element={<DoctorList />} />
        <Route path="/DAppointment" element={<DAppointment />} />
        <Route path="/Doctor/Edit/:id" element={<DEdit />} />

        <Route path="/PLogin" element={<PLogin />} />
        <Route path="/Patient/register" element={<PRegister />} />
        <Route path="/Patient/view" element ={<PatientList/>} />
        
        <Route path="/PAppointment" element={<PAppointment />} />
        <Route path="/BookApp" element={<BookAppointment />} />
        <Route path="/PatHistory" element={<PatHistory />} />
        <Route path="/Patient/Edit/:id" element={<PEdit />} />

        <Route path="/ShowApp" element={<ShowAppointment/>} />
        
        <Route path="/PatientDetails/:id/:id1" element={<PatientDetails  />} />
        <Route path="/ShowSpecial/:id" element={<ShowSpecialDoctor  />} />
        <Route path="/Appointment/view" element={<ShowAllApp  />} />

        <Route path="/DHeader" element={<DHeader  />} />
        
        <Route path="/AHome" element={<AHome  />} />
        <Route path="/ALogin" element={<ALogin  />} />
        <Route path="/ALoginHome" element={<ALogineHome  />} />
        <Route path="/AddAdmin" element={<AddAdmin  />}/>
       
        <Route path="/resetPassDoctor" element={<ResetPassDoctor  />} />
        <Route path="/resetPassPatient" element={<ResetPassPatient  />} />
        <Route path="/forgetPasswordDoctor" element={<ForgetPasswordDoctor  />} />
        <Route path="/forgetPasswordPatient" element={<ForgetPasswordPatient  />} />
      
      </Routes>
      <ToastContainer/>
    </>
  );
}

export default App;
