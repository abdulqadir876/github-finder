import React, { useState } from 'react'
import Users from './Users';

const Profile = () => {
const [data, setData] = useState([]);
const [username, setUsername] = useState ("");
const [repo, setRepo] = useState([]);

// Searching 
const onChangeHandler = e => {
    setUsername(e.target.value);
}
//searching button
const submitHandler = async (e) =>{
    e.preventDefault();
    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    console.log(profileJson);
    
    if(profileJson){
        setData(profileJson);
    }
    
}

    return (
        <div>
             <nav class="navbar navbar-light bg-primary d-flex justfiy-content-between">
            
                <div className="d-flex">
                <img style={imgSize} src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg"/>
                    
                </div>
                   
                </nav>
            <div className="input-group mt-40" style={body}>
                <div className="form-outline">
                    <input type="search" id="form1" className="form-control" placeholder="Search..." 
                    onChange={onChangeHandler}
                    />
                </div>
                <button type="button" className="btn btn-primary ml-10" value="Search" 
                style={btn}
                onClick={submitHandler}
                >
                    Search
                </button>
            </div>
            <Users data={data}/>
        </div>
    )
}
const btn = {
    marginLeft: 10,
    
}
const body = {
    marginTop: 40,
    marginBottom: 40,
}

const imgSize = {
  width: 100,
}

export default Profile





