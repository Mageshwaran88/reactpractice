import React, { useState } from 'react';
import "./Reacthook.css";
import icon from "../../src/assets/3177440.png"
import { useForm } from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { ReactHooKSubmit } from './ReactHooKSubmit';

const Schema = yup.
object().
shape({
  name: yup.string().required('*username is required'),
  password: yup.string().required('*password is required'),
  confirmpassword: yup.string().required('*confirmpassword is required').oneOf([yup.ref("password")],"incorect password")
})

export const ReactHookForm = () => {
    const {register,
        handleSubmit,
        formState:{errors}
    } = useForm({resolver: yupResolver(Schema)});

  
    const [data, setdata] =useState(true)

    const onsubmit =()=>{
      setdata(false)
    }
    

  return (

    <div>
      {data ?
         <div className='mypage'>
        <div className='container'>
        <form>
            <img src={icon} alt="" />
            <h1>Login</h1>
           <label htmlFor="">Username </label>
           <br />
           <input type="text" {...register("name")} />
           <br />
           <p>{errors?.name?.message}</p>
           <label htmlFor="">Password </label>
           <br />
           <input type="password" {...register("password")} />
           <br />
           <p>{errors?.password?.message}</p>
           <label htmlFor=""> ConfirmPassword </label>
           <br />
           <input type="password" {...register("confirmpassword")} />
           <br />
           <p>{errors?.confirmpassword?.message}</p>
           <p>Forget password?</p>
           {console.log(errors)}
           <button onClick={handleSubmit(onsubmit)}>Login</button>
        </form>
        </div>
        </div> : <ReactHooKSubmit/>
        }
    </div>
  )
}
