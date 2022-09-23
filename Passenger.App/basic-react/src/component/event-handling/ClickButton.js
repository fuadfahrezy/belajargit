import React, {useState} from 'react';
import swal from 'sweetalert2'

const ClickButton = () => {

    const [number, setnumber] = useState(0)

    // const klikhandler = () => {
    //     // console.log("sudah di klik")
    //     // alert("Halo boy")
    //     swal.fire(
    //         'Cakep',
    //         `Halo salam no ${number}`,
    //         'success'
    //     );
    // }

    const tambahHandler = () => {
        console.log("Tambah Handler")
    };

    const kurangHandler = () => {
        console.log("Kurang Handler")
    };

  return (
    <>
    <div className='container'>
        <h1>{number}</h1>
        <button onClick={tambahHandler} className='btn btn-sm btn-dark'>Tambah</button>
        <button onClick={kurangHandler} className='btn btn-sm btn-light'>Kurang</button>
        {/* <button
        onClick={klikhandler} 
        className='btn btn-sm btn-dark'>ClickMe</button> */}
    </div>
    </>

  );

};

export default ClickButton