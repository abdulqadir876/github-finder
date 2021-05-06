import React from 'react'

const Users = ({data}) => {
    return (
        <div>
           
            <div className="card" style={card}>
                <img className="card-img-top" src={data.avatar_url} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>

                    <p className=" card-text">{data.bio}</p>
                    <div className="d-flex">
                        <p className=" card-text mr-4 "> Followers {data.followers}</p>
                        <p className=" card-text"> Following {data.following}</p>
                    </div>
                    <a href="#" className="btn btn-primary">
        
                        {data.location} </a>
                </div>
                
        </div>
        </div>
    )
}
const card = {
    width: '18rem',
    margin: 'auto',
}

export default Users
