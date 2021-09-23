import React from 'react';

const Contact = () => {
    return (
        <form action="" onSubmit="">
            <div className="formWord">
                <h2>Say Hello!</h2>
                <span>Full Name</span>
                <br/>
                <input className="input100" type="text" name="fullName" required />
                <br/>
                <span>Phone Number</span>
                <br/>
                <input className="input100" type="text" name="phone" required />
                <br/>
                <span>Enter Email</span>
                <br/>
                <input className="input100" type="text" name="email" required />
                <br/>
            </div>
            <div className="formWord">
                <span>Message</span>
                <br/>
                
            </div>
        </form>
    )
}

export default Contact
