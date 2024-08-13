import React from 'react'
import styles from './contactSytle.module.css'
function Contact() {
  return (
    <section id='contact' className= {styles.container}>
        <h1 className='sectionTitile'> <a href="/src/sections/Contact/contact.html">Contact Me</a></h1>
        <form action="mailto:sharankumarp02@gmail.com">
            <div className='formGroup'>
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input type="text" 
                name='name'
                id='name'
                placeholder='Name'
                required/>
            </div>
            <div className='formGroup'>
                <label htmlFor="name" hidden>
                    Email
                </label>
                <input type="text" 
                name='email'
                id='email'
                placeholder='Email'
                required/>
            </div>
            <div className='formGroup'>
                <label htmlFor="name" hidden>
                    Message
                </label>

                <textarea 
                name='message'
                id='message'
                placeholder='message'
                required/>
            </div>
            <input className='hover btn' type="submit" value="submit" />
        </form>
    </section>
  )
}

export default Contact
