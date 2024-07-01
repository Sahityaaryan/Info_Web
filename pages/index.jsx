// Home.js
import Link from 'next/link';
import PagesMetaHead from '../components/PagesMetaHead';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import Journals from '../components/journals/JournalPreview';
import AppBanner from '../components/shared/AppBanner';
import Conference from '../components/conferences/Conference';
import Carousel from '../components/Carousel';
import styles from '../components/announcements/AnnouncementCarousel.module.css';
import AnnouncementCarousel from '../components/announcements/AnnouncementCarousel';
import Image from 'next/image';
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiYoutube,
} from 'react-icons/fi';
import { SiGooglescholar, SiOrcid } from "react-icons/si";
import AboutCounter from '../components/about/AboutCounter';
import Gallery from '../components/gallery/Gallery';

const images = [
  '/images/img1.jpg',
  '/images/img2.jpg',
  '/images/img3.jpg',
  '/images/img4.jpg',
];

const socialLinks = [
  {
    id: 1,
    icon: <FiLinkedin />,
    url: 'https://www.linkedin.com/in/dr-shailesh-m-pandey-34961820/?originalSubdomain=in',
  },
  {
    id: 2,
    icon: <SiGooglescholar />,
    url: 'https://scholar.google.co.in/citations?user=NquFNIsAAAAJ&hl=en',
  },
  {
    id: 3,
    icon: <SiOrcid />,
    url: 'https://orcid.org/0000-0002-9942-4238',
  },
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
              <p className="text-lg">Plasma spray coating lab at the Indian Institute of Technology Patn a (IIT Patna) adds a unique dimension to our campus life, fostering innovation, research, and hands-on learning experiences. Here&apos;s a glimpse into this exciting facet of campus life: Cutting-Edge Technology: Our campus boasts state-of-the-art facilities for plasma spraying, a cutting-edge technology used for surface modification and material enhancement.</p>

            </div>
          </div>
        </div>


        <PagesMetaHead title="Home" />

        <Conference showMoreConferences={true} />
        <Journals showMoreJournals={true} />


      </div>

      {/* Announcement Carausel */}
      <div className={styles.carousel} style={{ paddingTop: "30px", paddingLeft: '10px', paddingRight: '10px', marginTop: "30px", backgroundColor: 'rgb(155 28 28)' }}>
        <AnnouncementCarousel />
      </div>


      {/* Team Leader */}
      <div className="container mx-auto  items-center justify-center rounded-lg bg-gray-100 w-5/6 shadow-lg m-10">

        <div
          className='flex flex-wrap'
        >
          {/* Left section */}

          <div className='flex flex-col w-full  md:w-[40%]  items-center'>
            <div className=' font-bold text-4xl  m-6 p-4'>Team Leader</div>
            <Image
              src="/images/shal1.jpeg"
              className='w-1/2 rounded-md mx-auto'
              width={200}
              height={200}
            />

            <div className='mt-4  text-center'>
              <p>
                <h1 className='font-semibold text-2xl'>Dr. Shailesh Mani Pandey</h1>
                <h1 className='font-semibold text-xl pt-2'>Assistant Professor</h1>
                <h1 className='pt-1'>Department of Mechanical Engineering</h1>
                <h1 className='pt-3'><span className='font-bold'>ph: </span> +91-8750111166</h1>

                <h1 className='pt-2'><span className='font-bold'>email: </span> smp.me@nitp.ac.in</h1>
                <div className='flex flex-col md:flex-row gap-x-4 w-full  gap-y-4'>

                    {/* Social Links */}
                  <div className="p-7">

                    <ul className="flex gap-4 sm:gap-8">
                      {socialLinks.map((link) => (
                        <a
                          href={link.url}
                          target="__blank"
                          key={link.id}
                          className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-2 lg:p-3 duration-300"
                        >
                          <i className="text-xl sm:text-2xl md:text-3xl">
                            {link.icon}
                          </i>
                        </a>
                      ))}
                    </ul>
                  </div>
                </div>


              </p>
            </div>

          </div>

          {/* Right Section */}

          <div
            className='w-full  md:w-[60%]  p-8 my-auto'
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate mollitia ratione praesentium unde placeat reiciendis excepturi laborum! Vero nisi doloremque distinctio doloribus odit a, facere aliquam debitis consequuntur repudiandae excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eius voluptate voluptatibus animi? Placeat, sit esse. Aut ipsam maxime, pariatur vel iusto dolores possimus reprehenderit voluptate ratione debitis eveniet perspiciatis veritatis sequi cumque neque. Laboriosam dolorum quod, maxime in non neque officia? Tenetur tempora voluptates, alias dolore nemo ullam soluta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, necessitatibus voluptate quam deleniti, iure recusandae adipisci fugit sit cumque aut laborum qui, nemo ea sed suscipit labore asperiores fugiat officia sapiente. Dicta, a. Id iure culpa aspernatur beatae aut temporibus modi, quos aliquam ducimus pariatur, accusantium porro laudantium vel incidunt corrupti, debitis tempora? Tempora, animi accusamus velit voluptatum, ab fugiat, deserunt sunt dignissimos soluta laboriosam dolore iure? Eligendi, possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione mollitia dignissimos deserunt iusto! Blanditiis non, mollitia excepturi tempora, repellat alias magnam nam, maxime modi perferendis vero impedit distinctio. Dolores sed, incidunt suscipit in explicabo hic, a maiores ipsam cupiditate enim facilis ut repudiandae temporibus corporis consequuntur, nemo excepturi nulla blanditiis! Perspiciatis, nulla distinctio voluptate fuga id laborum perferendis dolores alias vitae mollitia asperiores, sint esse laboriosam excepturi veritatis labore.
          </div>

        </div>

      </div>

        {/* Project Counter */}

        <div>
        <AboutCounter 
				firstTitle = {{desc:"Total Snactioned Projects",value:12}}
				secondTitle = {{desc:"Ongoing Projects",value:20}}
				thirdTitle = {{desc:"Total Fund Recieved",value:92}}
				fourthTitle = {{desc:"Projects Staff",value:77}}
				/>
        </div>


        {/* Gallery */}

        {/* id based mapping */}
        {/* should be a reusable component */}

        <Gallery/>

    </>
  );
}
