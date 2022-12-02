import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../../redux tookit/api'
import "./Form.css"

export default function Form() {
    const [name ,setname ] = useState("")
    const [email ,setemail ] = useState("")

    const { loading , error } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const handel = (e) => {
        e.preventDefault();
       // addUser({name,email},dispatch) ; //without creatAsyncThunc
        dispatch(addUser({name,email})) ;  //with creatAsyncThunc
    }
    return (
    <form onSubmit={handel}>
        <div className='form-group'>
            <input type="text" placeholder='name' onChange={(e)=> setname(e.target.value)}></input>
        </div>
        <div className='form-group'>
            <input type="text" placeholder='email' onChange={(e)=> setemail(e.target.value)}></input>
        </div>
        <div className='form-group'>
            { loading ? '...loading' : <input type="submit" placeholder='submit'></input>}
        </div>
        {error && loading === false && <span>error</span>}
    </form>
    )
}
