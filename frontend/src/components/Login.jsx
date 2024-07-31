import React from 'react'
import { ClerkProvider, SignInButton } from '@clerk/clerk-react';


const Login = () => {
    return (
        <div>
            <ClerkProvider>
                <SignInButton/>
            </ClerkProvider>
        </div>
    )
}

export default Login