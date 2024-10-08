import React from 'react'
import './Contact.css'
import msg_icon from '../assets/msg-icon.png'
import mail_icon from '../assets/mail-icon.png'
import phone_icon from '../assets/phone-icon.png'
import location_icon from '../assets/location-icon.png'
import white_arrow from '../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ad555043-ea63-4bc3-837f-30f61cf7f74f");
    

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className ="contact">
        <div className="contact-col">
            <h3>Send us a message <img src ={msg_icon}/></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community. </p>
            <ul>
                <li><img src={mail_icon}/>Contact:ayush.dube48@gmail.com </li>
                <li><img src={phone_icon}/>+91-6393104784</li>
                <li><img src={location_icon}/>24-F Divya Nagar Gorakhpur 273010 ,Uttar Pradesh ,India </li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name ="name" placeholder="Enter your name here" required />
                <label>Phone number</label>
                <input type="tel" name ="phone" placeholder="Enter your mobile number here" required />
                
                <label>Your email</label>
                <input type="email"  name ="email" placeholder="Enter your mail here" required />
                <label>Write your message here</label>
                <textarea name ="message"  rows="6" placeholder="Enter your message here" required></textarea>
                <button type ="submit" className="btn dark-btn">Submit now <img src ={white_arrow}/></button>
            </form>
            <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact
