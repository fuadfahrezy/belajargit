import React from 'react'

const Profile = (props) => {
    // console.log(props)
    const{nomor, name, hobby} = props
  return (
    //React Fragment
    <>
        <h2>Nomor {nomor} </h2>
        <h3>Halo, nama gw {name}</h3>
        <p>Hobby saya {hobby}</p>
    </>
  )
}

export default Profile