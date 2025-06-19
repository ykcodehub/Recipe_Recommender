import React, { useState } from 'react'
import "./styles.css"
function Contact() {
    let [name , setName] = useState("")
    let [mail , setMail] = useState("")
    let [msg , setMsg] = useState("")

    function handleContactForm(){
        // get data blank or existing  
        // create a element
        // create new list
        // save the list

        // STEP 1 - Fetch data
        let contact = []
        let tempContact = localStorage.getItem("contact")
        if(tempContact === null) {
            console.log("if")
            tempContact = []
        }else{
            console.log("else")
            console.log("tempContact",tempContact)
            contact = JSON.parse(tempContact)
        }

        // STEP 2 - create and new contact
        let tempname = name          
        let tempmail = mail         
        let tempmsg = msg 
        let contactEle = [tempname,tempmail,tempmsg]
        setMail("")
        setMsg("")
        setName("")
        contact.push(contactEle)
        console.log(contact)

        // STEP 3 - Save to LocalStorage
        let contactStr = JSON.stringify(contact)
        localStorage.setItem("contact",contactStr)
    }
  return (
    <div className='contactContainer'>
        <form id="contactForm" >
            <h2 style={{color:"rgb(127 4 4)"}}>Contact Us</h2>
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input type="text" id="fullname" placeholder="Enter your full name" required value={name} onChange={e=>setName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="signupEmail">Email</label>
              <input type="email" id="signupEmail" placeholder="Enter your email" required value={mail} onChange={e=>setMail(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="contactMessege">Messege</label>
              <textarea type="Messege" id="signupMessege" placeholder="Enter your messege"  value={msg} onChange={e=>setMsg(e.target.value)} required style={{minHeight:"160px"}}/>
            </div>
            <button type="button" style={{backgroundColor:"rgb(127 4 4)"}} onClick={handleContactForm}>Submit Form</button>
          </form>
    </div>
  )
}

export default Contact