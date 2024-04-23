// components/AnnouncementCarousel.js
import React from 'react';
import styles from './AnnouncementCarousel.module.css';
import announcements from './announcements.json'; // Import the default export

const AnnouncementCarousel = () => {
  return (
    <div className={styles['carousel-container']} >
        <div className='text-3xl p-4 m-4 font-bold text-white'> Announcements
	  </div>  
    <div className={styles.carousel} >

      {announcements.map((announcement, index) => (
        <div key={index} className={styles.announcement}>
          <div className={styles.imageContainer}>
            <img src={announcement.image} alt={announcement.alt} />
          </div>
          <div className={styles.descriptionContainer}>
            <h2 className='font-semibold text-xl'>{announcement.title}</h2>
            <p className='text-lg'>{announcement.description}</p>
            <a href={announcement.link}>Read more</a>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default AnnouncementCarousel;
