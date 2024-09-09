import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";





const SignUp = () => {
  const [info, setInfo] = useState({ firstname: "", lastname: "", email: "", phone: "" });
  
  
  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const  data = await fetch(
        "http://localhost:5011/api/registration",
  
        {

          method:"post",
          headers: {
     
            "Content-Type": "application/json",
          },
      body:JSON.stringify({

        firstname:  info.firstname,
        lastname:info.lastname,
        email:  info.email,
        phone:info.phone
      })
        }
      );

      
const response   =   await  data.json()
console.log(response)
if (response.success){
  
toast.success("user created")

setInfo({firstname: "", lastname: "", email: "", phone: "" })

}
  
     
    } catch (error) {
    console.log(error)
    }
  };

  const onChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }
  return (
    <section className="order" id="order">
      <div className="container">
        <div className="banner">
         <h1>REGISTER TO GET YOUR GAMES HERE!</h1>
         <button className="react-arrow "> LEARN MORE </button>
        </div>
        <div className="banner ">
          <div className="order_form_box">
            <h1>Order your Games </h1>
        
            <form   onSubmit={handleBooking}>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={info.firstname}
                  onChange={ onChange}
                name = "firstname"/>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={info.lastname}
                  onChange={onChange}
                name = "lastname"/>
              </div>
             
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="email_tag"
                  value={info.email}
                  onChange={ onChange}
                name = "email"/>
                <input
                  type="text"
                  placeholder="Phone"
                  value={info.phone}
                  onChange={ onChange}
               name = "phone" />
              </div>
              <button type="submit" >
                Create Account{" "}
                <span>
              
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
