import React from "react"
import "./contact.css"
import Back from './../../common/Back';

export const Contact = () => {
  const map = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8167.671073847748!2d31.520490072026032!3d30.603433536340948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1725826935726!5m2!1sar!2seg"
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='flexSB shadow'>
          <div className='left row'>
            <iframe src={map} width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>000 West 21th Street, aaa 721 New York NY 10016</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p>info@yoursite.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p>+ 1222 222 2222</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}
