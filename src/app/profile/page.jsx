"use client"
import Link from 'next/link'
import './profile.css'
import { useSelector } from 'react-redux'

const page = () => {
    const url = "http://localhost:4000"
    const {user} = useSelector(store=>store.auth)
    console.log(user)

   const formattedDate = (dateStr) =>{
    const date = new Date(dateStr);  // Date object mein convert karein
    const day = date.getDate().toString().padStart(2, '0');  // 2-digit day
    const month = date.toLocaleString("en-GB", { month: "short" });  // Short month name
    const year = date.getFullYear();  // Year

    return `${day}, ${month}, ${year}`;
   }
   
  return (
    <div className='profileCont'>
        <div className='imgCont'>
           <img src={`${url}/images/${user?.profilePhoto}`} alt="" />
           <h1>{user?.username}</h1>
        </div>
        <div className='userCont'>
        <div className='userInfo'>
              <h3>CONTACT INFORMATION</h3>
              <div className='emailCont'>
                <h4>Email id:</h4>
                <p>{user?.email}</p>
              </div>
              <div className='phoneCont'>
                <h4>Phone:</h4>
                <p>{user?.phone}</p>
              </div>
              <div className='addressCont'>
                <h4>Address:</h4>
                <p>{user?.address?.addressLine1} <br />
                {user?.address?.addressLine2}</p>
              </div>
        </div>
        <div className='userInfo'>
              <h3>BASIC INFORMATION</h3>
              {user?.gender && 
              <div className='genderCont'>
                <h4>Gender:</h4>
                <p>{user?.gender}</p>
              </div>
            }
              <div className='ageCont'>
                <h4>Age:</h4>
                <p>{user?.age}</p>
              </div>
              <div className='birthdayCont'>
                <h4>Birthday:</h4>
                <p>{user?.dob ? formattedDate(user.dob) : "N/A"}</p>
              </div>
        </div>
        <button><Link href="/editProfile">Edit</Link></button>
        </div>
        


    </div>
  )
}

export default page