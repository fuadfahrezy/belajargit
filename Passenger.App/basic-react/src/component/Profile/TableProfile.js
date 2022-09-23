import React from 'react'

const TableProfile = () => {
    const profiles = [
        {
          id: 1,
          name: "Fuad",
          hobby: "Coding"
        },
        {
          id: 2,
          name: "Yoel",
          hobby: "Editng"
        },
        {
          id: 3,
          name: "Surya",
          hobby: "Membaca"
        },
        {
          id: 21,
          name: "Udin",
          hobby: "Menulis"
        },
        {
          id: 22,
          name: "Beni",
          hobby: "Main Game"
        },
        {
          id: 23,
          name: "Budi",
          hobby: "Nonton"
        }
      ];

  return (
    <>
        <table className='table table-bordered table-dark table-hover'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Hobby</th>
                </tr>
            </thead>
            <tbody>
                {profiles.map((profile) => {
                    const { id, name, hobby } = profile;
                    return(
                <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{hobby}</td>
                </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    </>
  )
}

export default TableProfile