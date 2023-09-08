import React, { useState } from 'react';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.css';
import Modale from './modale';

export default function Form() {
    const [forms, setForms] = useState({ name: "", phone: "", age: "", isEmployee: false, salary: "" });
    const [showModale, setShowModale]=useState(false)
    // Validation Functions
    const checkName = () => {
        const containsNumberRegex = /\d/;
        const containsSpecialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
        const containsSpaceRegex = /\s/; // Regular expression to check for spaces

        const containsNumber = containsNumberRegex.test(forms.name);//true
        const containsSpecialCharacter = containsSpecialCharacterRegex.test(forms.name);//true
        const containsSpace = containsSpaceRegex.test(forms.name);//true

        return !containsNumber && !containsSpecialCharacter && !containsSpace;
    };

    const checkPhone = () => {
        return forms.phone.length >= 10 && forms.phone.length <= 12;
    };

    const checkAge = () => {
        return forms.age >= 18 && forms.age <= 100;
    };



    const emtyInput = () => {
        if (forms.name !== "" && forms.phone !== "" && forms.age !== "") {
            return true;
        }
    }
    let [messsage, setMesssage] = useState({state :"bad",messageBody:""})
    const handleButtonClick = () => {

        const nameValid = checkName();
        const phoneValid = checkPhone();
        const ageValid = checkAge();

        if (!nameValid && !phoneValid && !ageValid) {
            setMesssage({ state: "bad", messageBody: "Name,Phone And Age Are Incorrect" })
        } else if (!nameValid && !phoneValid) {
            setMesssage({ state: "bad", messageBody: "Name And Phone fals" })
        } else if (!nameValid && !ageValid) {
            setMesssage({ state: "bad", messageBody: "Name And Age Incorrect" })
        } else if (!phoneValid && !ageValid) {
            setMesssage({ state: "bad", messageBody: "Phone And Age Incorrect" })
        } else if (!nameValid) {
            setMesssage({ state: "bad", messageBody: "Name Incorrect" })
        } else if (!phoneValid) {
            setMesssage({ state: "bad", messageBody: "Phone Incorrect" })
        } else if (!ageValid) {
            setMesssage({ state: "bad", messageBody: "Age Incorrect" })
        } else {
            setMesssage({ state: "good", messageBody: "The Forme Has Been Submitted Successfly" })
        }
        setShowModale(true)
    };
    function handlDivClick(){
        if (showModale){
            setShowModale(false)
        }
    }
    return (
        <div onClick={handlDivClick} className='mainContainer'>
            <div className='container bg-primary rounded mt-5 text-light'>
                <form onSubmit={(event) => { event.preventDefault() }} className='flex-column' action="">
                    <h1>Requesting a Loan</h1>
                    <hr />
                    <div id='inputSection' className='d-flex flex-column'>
                        <label className='mt-2'>Name:</label>
                        <input placeholder='your name...' value={forms.name} onChange={(event) => { setForms({ ...forms, name: event.target.value }) }} type="text" />

                        <label className='mt-2'>Phone Number:</label>
                        <input placeholder='phone number XXXX-XXX' value={forms.phone} onChange={(event) => { setForms({ ...forms, phone: event.target.value }) }} type="text" />

                        <label className='mt-2'> Age:</label>
                        <input placeholder='your age...' value={forms.age} onChange={(event) => { setForms({ ...forms, age: event.target.value }) }} type="text" />

                        <label className='mt-2'>Are you an employee?</label>
                        <input checked={forms.isEmployee} onChange={() => { setForms({ ...forms, isEmployee: !forms.isEmployee }) }} className='ckeckboxInput' type="checkbox" />

                        <label className='mt-2'>Salary:</label>
                        <select style={{ color: '#736969' }} value={forms.salary} onChange={(event) => { setForms({ ...forms, salary: event.target.value }) }}>
                            <option value="" >shose the salary...</option>
                            <option value="2999">less than 3000$</option>
                            <option value="3000">more than 3000$</option>
                            <option value="4000">about 4000$</option>
                        </select>
                    </div>
                    <button disabled={!emtyInput()} onClick={handleButtonClick} className={emtyInput() ? "active w-auto text-light rounded border-0 mb-3 mt-3 p-2" : "inActive w-auto text-light rounded border-0 mb-3 mt-3 p-2"}>Submit</button>
                </form>
            </div>
            <Modale isVesible={showModale} mesageState={messsage.state} messageInfo={messsage.messageBody} />
        </div>

    );
}
