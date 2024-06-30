// Home.js
import Link from 'next/link';
import PagesMetaHead from '../components/PagesMetaHead';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import Journals from '../components/journals/JournalPreview';
import AppBanner from '../components/shared/AppBanner';
import Conference from '../components/conferences/Conference';
import Carousel from '../components/Carousel'; // corrected import path
import styles from '../components/announcements/AnnouncementCarousel.module.css';
import AnnouncementCarousel from '../components/announcements/AnnouncementCarousel';

const images = [
	'/images/img1.jpg',
	'/images/img2.jpg',
	'/images/img3.jpg',
	'/images/img4.jpg',
	// Add more image paths as needed
];


export default function Home() {
    return (
        <>
            <Carousel images={images} /> {/* Integrated Carousel component */}
            <div className="container mx-auto">

    <div className="flex flex-col md:flex-row items-center md:items-stretch mt-6 pt-6">
      <div className="md:w-1/2 md:mr-8 mb-4 md:mb-0">
        <img src="/images/img1.jpeg" alt="Lab Image" className="w-full h-auto" />
      </div>
      <div className="md:w-1/2">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 mt-4 text-red-800">Welcome To <br></br>Advance Composite Manufacturing and Characterisation Centre
		</h2>
          <p className="text-lg">Plasma spray coating lab at the Indian Institute of Technology Patna (IIT Patna) adds a unique dimension to our campus life, fostering innovation, research, and hands-on learning experiences. Here&apos;s a glimpse into this exciting facet of campus life: Cutting-Edge Technology: Our campus boasts state-of-the-art facilities for plasma spraying, a cutting-edge technology used for surface modification and material enhancement.</p>

        </div>
      </div>
    </div>
	

                <PagesMetaHead title="Home" />
{/* 
                <AppBanner /> */}
                <Conference showMoreConferences={true} />
                <Journals showMoreJournals={true} /> 
                 {/* <ProjectsGrid /> */}
            </div>
			<div className={styles.carousel} style={{paddingTop:"30px",paddingLeft:'10px',paddingRight:'10px',marginTop:"30px",backgroundColor:'rgb(155 28 28)'}}>
        <AnnouncementCarousel />
      </div>
	  <div className="container mx-auto items-center justify-center rounded-lg bg-gray-100 w-5/6 shadow-lg">
    <div className='font-bold text-4xl text-red-800 mt-6 pt-4'>Team Leader</div>
	<div className='grid  grid-cols-3 justify-between mt-3 md:flex-row'>
		<div className='mb-6'>
		<img src= "/images/shal1.jpeg" className='w-3/4 rounded-md'/>
		</div>
		<div className='mt-4'>
         <p>
          <h1 className='font-semibold text-2xl'>Dr. Shailesh Mani Pandey</h1>
		  <h1 className='font-semibold text-xl pt-2'>Assistant Professor</h1>
		  <h1 className='pt-1'>Department of Mechanical Engineering</h1>
		  <h1 className='pt-3'><span className='font-bold'>ph: </span> +91-8750111166</h1>
		  
		  <h1 className='pt-2'><span className='font-bold'>email: </span> smp.me@nitp.ac.in</h1>
		  <div className='flex flex-col md:flex-row gap-x-4 w-full  gap-y-4'>
			<button className='rounded-md bg-red-100 p-4'><a href = "">CV</a></button>
			<button className='rounded-md bg-red-100 p-4'><a href = "">Google Scholar</a></button>
			<button className='rounded-md bg-red-100 p-4'><a href = "">ORCHID</a></button>
			<button className='rounded-md bg-red-100 p-4'><a href = "">Facebook</a></button>
			<button className='rounded-md bg-red-100 p-4'><a href = "">Linkedin</a></button>

		  </div>
		  
		  
		 </p>
		</div>
	</div>

</div>





        </>
    );
}
