import './Latihan1.css'
// import { useState } from 'react';

function Profile({nama,pekerjaan}){

    return(
        <div className="profile-card">
            <h2>{nama}</h2>
            <p>{pekerjaan}</p>
        </div>
    );
}

function Latihan1(){

    return(
        <div className="container">
            <h1>Team Members</h1>
            <Profile nama="Andrian" pekerjaan="Muslimin Developer"/>
            <Profile nama="purwa" pekerjaan="Musafir Designer"/>
        </div>
    );
}

export default Latihan1