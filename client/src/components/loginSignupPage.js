import React, { useState } from 'react';
import Login from './login';
import Signup from './signup';
import '../css/loginSignup.css'

function LoginSignupPage() {
    const [hasAccount, setHasAccount] = useState(true)

    return (
        <div>
            <Login 
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
            />
            <Signup 
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
            />
        </div>
    )
}

export default LoginSignupPage;