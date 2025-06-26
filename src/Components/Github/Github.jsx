import  { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData();

  // const [data, setData] = useState([])
  //   useEffect(() => {
  //    fetch('https://api.github.com/users/hiteshchoudhary')
  //    .then(response => response.json())
  //    .then(data => {
  //       console.log(data);
  //       setData(data)
  //    })
  //   }, [])
  return (
    <div className='text-center bg-gray-500 p-4 flex items-center gap-2'>

      <img className='w-25 rounded-[50%]' src={data.avatar_url} alt="" />
      <div className='font-semibold'>
      Name : {data.login}
      <br />
      Github Followers:{data.followers}
      <br />
      Following : {data.following}
      </div>
  
    </div>
  )
}

export default Github


export const gihubinfoloader = async ()=>{
  const response = await fetch('https://api.github.com/users/A-jabbar-tech');
  return response.json();
}