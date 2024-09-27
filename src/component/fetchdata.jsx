import React, { useEffect, useState } from 'react'

function FetchData() {
  const [user, SetUser] = useState([])
  useEffect(() => {
    Data();
  }, [])
  async function Data() {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts")
    let response = await data.json()
    SetUser(response)
  }

  return (
    <div>
      {
        user.map((item) => {
          return (
            <div>
              {
                item.title
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default FetchData




























// import React, { useEffect, useState } from 'react'

// function FetchData() {
//   const [user, SetUser] = useState([])
//   useEffect(() => {
//     Data()
//   }, [])
//   async function Data() {
//     const data =await fetch("https://jsonplaceholder.typicode.com/posts")
//     const response = await data.json()
//     SetUser(response)
//   }
//   return (
//     <div>
//       {
//         user.map((item)=>{
//           return(
//             <div>
//               {item.title}     ||     {item.body}
//             </div>
//           )
//         })
//       }
//     </div>

//   )
// }

// export default FetchData