// components/AnnouncementCarousel.js
import React from "react";
import styles from "./AnnouncementCarousel.module.css";
import announcements from "./announcements.json"; // Import the default export
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { Card, CardContent } from "../../components/ui/card";

const AnnouncementCarousel = () => {
  return (
    <div className={styles["carousel-container"]}>
      <div className="text-3xl p-4 m-4 font-bold text-white  flex justify-center align-middle">
        {" "}
        Announcements
      </div>
      <div className="mx-3 justify-center align-middle px-2 hidden lg:flex">
        <Carousel className="w-4/5 sm:w-5/6 self-center h-full">
          <CarouselContent className="-ml-1">
            {announcements.map((announcement, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/4 lg:basis-1/4 w-full h-full "
              >
                <div className="w-full h-full">
                  <Card className="h-full w-full">
                    <CardContent className="flex aspect-square items-center justify-center md:w-full w-full h-96 flex-col">
                    <div className="w-full sm:h-1/2 md:h-1/3 lg:h-1/2 h-[29%] overflow-hidden ">
                          <img
                            src={announcement.image}
                            alt={announcement.alt}
                          />
                      </div>
                      <div
                        className=" border-white  border-solid border-b justify-between flex flex-col border-x h-1/2 w-full pl-2 pt-3"
                        style={{ zIndex: "10" }}
                      >
                          <h2 className="font-semibold text-xl">
                            {announcement.title}
                          </h2>
                          <p className="text-lg">{announcement.description}</p>
                          <a href={announcement.link}>Read more</a>
                      </div>
                      {/* <div key={index} className={styles.announcement}>
                        <div className={styles.imageContainer}>
                          <img
                            src={announcement.image}
                            alt={announcement.alt}
                          />
                        </div>
                        <div className={styles.descriptionContainer}>
                          <h2 className="font-semibold text-xl">
                            {announcement.title}
                          </h2>
                          <p className="text-lg">{announcement.description}</p>
                          <a href={announcement.link}>Read more</a>
                        </div>
                      </div> */}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* {announcements.map((announcement, index) => (
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
      ))} */}
      </div>
      <div className="mx-3 justify-center align-middle px-2 flex lg:hidden">
        <Carousel className="w-4/5 sm:w-5/6 self-center " orientation="vertical">
          <CarouselContent className="-ml-0 h-96 -pt-64">
            {announcements.map((announcement, index) => (
              <CarouselItem
                key={index}
                className="basis-1/4 md:basis-1/4 lg:basis-1/4 w-full h-full "
              >
                <div className="w-full h-full">
                  <Card className="h-full w-full">
                    <CardContent className="flex flex-col md:flex-row lg:flex-col aspect-square items-center justify-center md:w-full w-full h-96 ">
                    <div className="w-full sm:h-1/2 md:h-1/2 lg:h-1/2 h-[29%] overflow-hidden ">
                          <img
                            src={announcement.image}
                            alt={announcement.alt}
                          />
                      </div>
                      <div
                        className=" border-white  border-solid border-b justify-between flex flex-col border-x h-1/2 w-full pl-2 pt-3"
                        style={{ zIndex: "10" }}
                      >
                          <h2 className="font-semibold text-xl">
                            {announcement.title}
                          </h2>
                          <p className="text-lg">{announcement.description}</p>
                          <a href={announcement.link}>Read more</a>
                      </div>
                      {/* <div key={index} className={styles.announcement}>
                        <div className={styles.imageContainer}>
                          <img
                            src={announcement.image}
                            alt={announcement.alt}
                          />
                        </div>
                        <div className={styles.descriptionContainer}>
                          <h2 className="font-semibold text-xl">
                            {announcement.title}
                          </h2>
                          <p className="text-lg">{announcement.description}</p>
                          <a href={announcement.link}>Read more</a>
                        </div>
                      </div> */}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* {announcements.map((announcement, index) => (
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
      ))} */}
      </div>
    </div>
  );
};

export default AnnouncementCarousel;
