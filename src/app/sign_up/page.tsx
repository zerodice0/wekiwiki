"use client";

import { useCallback, useState } from "react";
import type { SignUpData } from "./types";

import "./sign_up.css";
import { getSupabaseClient } from "@/modules/supabase/supabase";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState<SignUpData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  const requestSignUp = async () => {
    const client = await getSupabaseClient();
  
    const {name, email, password, confirmPassword} = signUpData;
    
  };

  return (
    <div className="container">
      <h2>User Registration Form</h2>
      <form action="#" method="post">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={signUpData.name}
            onChange={(event) => setSignUpData({
                ...signUpData,
                name: event.target.value,
              })
            }
            required/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={signUpData.email}
            onChange={(event) => setSignUpData({
                ...signUpData,
                email: event.target.value,
              })
            }
            required/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={signUpData.password}
            onChange={(event) => setSignUpData({
                ...signUpData,
                password: event.target.value,
              })
            }
            required/>
        </div>
        <div className="form-group">
          <label htmlFor="confirm_password">Confirm Password:</label>
          <input 
            type="password"
            id="confirm_password"
            name="confirm_password"
            value={signUpData.confirmPassword}
            onChange={(event) => setSignUpData({
                ...signUpData,
                confirmPassword: event.target.value,
              })
            }
            required/>
        </div>
        <div className="form-group">
          <input type="submit" value="Register"/>
        </div>
      </form>
    </div>
  );
}

export default SignUp;