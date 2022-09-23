import React, {useState} from 'react';
import './ListProduk.css'

// import gambar secara mudah
// import {
//     logo, logo1, logo2 .....(seterusnya)
// } from '../../assets/images'
const ListProduk = () => {

    const [profiles, setprofiles] = useState([
        {
            id: 1,
            name: "9mm",
            image: "https://image.shutterstock.com/image-photo/9mm-pistol-bullets-handgun-on-260nw-745848868.jpg",
            details: 'Handgun',
            type: "modern"
        },
        {
            id: 2,
            name: "Desert Eagle",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Desert-Eagle-chrome-p1030142.jpg/640px-Desert-Eagle-chrome-p1030142.jpg",
            details: 'Handgun',
            type: "modern"
        },
        {
            id: 3,
            name: "Revolver",
            image: "https://cdn.britannica.com/95/176195-050-D0FA0BC1/Smith-Wesson-revolver.jpg",
            details: 'Handgun',
            type: "old"
        }
    ])

  return (
    <>
        <div className='container'>
            <div className='row'>
            {/* <div className='col-md-2'>
                <div className='card'>
                    <div className='card-img-top'>
                        <img className='img-fluid' src={'https://image.shutterstock.com/image-photo/9mm-pistol-bullets-handgun-on-260nw-745848868.jpg'} alt="image"/>
                    </div>
                    <div className='card-body'>
                        <h5>Handgun</h5>
                        <p>9mm</p>
                    </div>
                    <small className='badge rounded-pill bg-primary'>caravel</small>
                </div>
            </div>
            <div className='col-md-2'>
                <div className='card'>
                    <div className='card-img-top'>
                        <img className='img-fluid' src={'https://image.shutterstock.com/image-photo/9mm-pistol-bullets-handgun-on-260nw-745848868.jpg'} alt="image"/>
                    </div>
                    <div className='card-body'>
                        <h5>Handgun</h5>
                        <p>9mm</p>
                    </div>
                    <small className='badge rounded-pill bg-primary'>caravel</small>
                </div>
            </div>
            <div className='col-md-2'>
                <div className='card'>
                    <div className='card-img-top'>
                        <img className='img-fluid' src={'https://image.shutterstock.com/image-photo/9mm-pistol-bullets-handgun-on-260nw-745848868.jpg'} alt="image"/>
                    </div>
                    <div className='card-body'>
                        <h5>Handgun</h5>
                        <p>9mm</p>
                    </div>
                    <small className='badge rounded-pill bg-primary'>caravel</small>
                </div>
            </div>
            <div className='col-md-2'>
                <div className='card'>
                    <div className='card-img-top'>
                        <img className='img-fluid' src={'https://image.shutterstock.com/image-photo/9mm-pistol-bullets-handgun-on-260nw-745848868.jpg'} alt="image"/>
                    </div>
                    <div className='card-body'>
                        <h5>Handgun</h5>
                        <p>9mm</p>
                    </div>
                    <small className='badge rounded-pill bg-primary'>caravel</small>
                </div>
            </div>
            <div className='col-md-2'>
                <div className='card'>
                    <div className='card-img-top'>
                        <img className='img-fluid' src={'https://image.shutterstock.com/image-photo/9mm-pistol-bullets-handgun-on-260nw-745848868.jpg'} alt="image"/>
                    </div>
                    <div className='card-body'>
                        <h5>Handgun</h5>
                        <p>9mm</p>
                    </div>
                    <small className='badge rounded-pill bg-primary'>caravel</small>
                </div>
            </div>
            <div className='col-md-2'>
                <div className='card'>
                    <div className='card-img-top'>
                        <img className='img-fluid' src={'https://image.shutterstock.com/image-photo/9mm-pistol-bullets-handgun-on-260nw-745848868.jpg'} alt="image"/>
                    </div>
                    <div className='card-body'>
                        <h5>Handgun</h5>
                        <p>9mm</p>
                    </div>
                    <small className='badge rounded-pill bg-primary'>caravel</small>
                </div>
            </div> */}
            {
                profiles.map(profile => {
                    const { id, name, image, details, type} = profile
                    return (
                        <div key={id} className='col-md-2'>
                            <div className='card'>
                                <div className='card-img-top'>
                                    <img className='img-fluid' src={image} alt=""/>
                                </div>
                            <div className='card-body'>
                                <h5>{name}</h5>
                                <p>{details}</p>
                                <small className='badge bg-dark'>{type}</small>
                            </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    </>
  ) 
}

export default ListProduk