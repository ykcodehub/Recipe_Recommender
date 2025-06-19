import React from 'react'
import "./ContactQuery.css"
function ContactQuery() {
    let data = localStorage.getItem("contact")
    console.log(JSON.parse(data))
    
    let testData = JSON.parse(data)
    
  return (
    <div className='contactResult'>
        <div className='ResultContainer'>
            <table>
                <tr>
                    <th>S No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Messege</th>
                </tr>
                {
                    testData && testData.map((ContactElement,i)=>{
                        return <tr key={i} className='c-row'>
                            <td className='c-no'>{i+1}</td>
                            <td className='c-name'>{ContactElement[0]}</td>
                            <td className='c-mail'>{ContactElement[1]}</td>
                            <td className='c-msg'>{ContactElement[2]}</td>
                        </tr>
                    })
                }{
                    !testData && <>No Data Found</>
                }
            </table>
        </div>
    </div>
  )
}

export default ContactQuery

