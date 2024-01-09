import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';
// import zeroone1 from '../../Assets/Gallery/zeroone1.jpg'


import Footer from '../../components/home/Footer/Footer';
import NavBar from './NavBar';
import '../../components/home/HomeNav/HomeNav.css';

const images = [
  {
    src: 'https://picsum.photos/350/250/?image=232',
    title: 'ZeroOne',
    category: 'Architect Design',
  },
  {
    src: 'https://picsum.photos/350/250/?image=232',
    title: 'Night Sky',
    category: 'Cinematic',
  },
  {
    src: 'https://picsum.photos/350/250/?image=431',
    title: 'Tea Talk',
    category: 'Composite',
  },
  {
    src: 'https://picsum.photos/350/250?image=474',
    title: 'Road',
    category: 'Landscape',
  },
  {
    src: 'https://picsum.photos/350/250?image=344',
    title: 'Sea',
    category: 'Cityscape',
  },
  {
    src: 'https://picsum.photos/350/250?image=494',
    title: 'Vintage',
    category: 'Cinematic',
  },
  {
    src: 'https://picsum.photos/350/250?image=494',
    title: 'Vintage',
    category: 'Cinematic',
  },
  {
    src: 'https://picsum.photos/350/250?image=494',
    title: 'Vintage',
    category: 'Cinematic',
  },
  {
    src: 'https://picsum.photos/350/250?image=344',
    title: 'Sea',
    category: 'Cityscape',
  },
  {
    src: 'https://picsum.photos/350/250?image=494',
    title: 'Vintage',
    category: 'Cinematic',
  },
  {
    src: 'https://picsum.photos/350/250?image=494',
    title: 'Vintage',
    category: 'Cinematic',
  },
  {
    src: 'https://picsum.photos/350/250?image=494',
    title: 'Vintage',
    category: 'Cinematic',
  },
  {
    src: 'https://picsum.photos/350/250?image=344',
    title: 'Sea',
    category: 'Cityscape',
  },
  {
    src: 'https://picsum.photos/350/250?image=494',
    title: 'Vintage',
    category: 'Cinematic',
  },
  {
    src: 'https://picsum.photos/350/250?image=494',
    title: 'Vintage',
    category: 'Cinematic',
  },
  {
    src: 'https://picsum.photos/350/250?image=494',
    title: 'Vintage',
    category: 'Cinematic',
  }
];

const Gallery = () => {

  useEffect(() => {
    document.title = 'Gallery | KLU SAC';
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Student Activity Center at KLEF';
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  //   ---------------------------------------------

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
      setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
      window.addEventListener('resize', handleResize);

      return () => {
      window.removeEventListener('resize', handleResize);
      };
  }, []);

//   ---------------------------------------------

  return (
    <div className="Gallery-component">
         <div className="Event-Nav">
            <div className='HomeNavComponent'>
                <div className="HomeNavContainer">
                    <div className="HomeNavLogo">
                        <div className="HomeNavLogo-in">
                            <Link className='HomeNavLogo-in-link' to='/'><h1>Student Activity Center</h1></Link>
                        </div>
                    </div>
                    <div className="HomeNavIndex">
                        <div className="HomeNavIndex-in">
                            <Link className='HomeNavIndex-in-link' to='/'>Back to Home</Link>
                            <Link className='HomeNavIndex-in-link' to='/'>Explore Clubs</Link>
                            <Link className='HomeNavIndex-in-link' to='/blogs'>Read Blogs</Link>
                            <Link className='HomeNavIndex-in-link' to='/events'>Events</Link>
                        </div>
                    </div>
                </div>
            </div>
                {screenWidth < 768 ?  <NavBar/> : '' }
        </div>
            <div className="Gallery-header">
              <h1>Journey Through Time: <span>Unveiling Unforgettable Memories in Our Gallery</span> </h1>
            </div>
            <div className="Gallery-one">
            {images.map((image, index) => (
              <div className="img-box" key={index}>
                <img src={image.src} alt="" />
                <div className="transparent-box">
                  <div className="caption">
                    <p>{image.title}</p>
                    <p className="opacity-low">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
            </div>
            <div className="Gallery-footer">
              <Footer />
            </div>
         </div>
  );
};

export default Gallery;
