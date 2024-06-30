"use-client";

import React, { useState } from "react";
import Publications from "../../components/publications/Publications";
import Link from "next/link";
import AboutCounter from "../../components/about/AboutCounter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { Card, CardContent } from "../../components/ui/card";

export default function index() {
  return (
    <div>
      <div>
        {/* new carausel */}
        <div className="mx-9 flex justify-center align-middle px-2">
          <Carousel className="w-4/5 sm:w-5/6 self-center h-full">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 md:basis-1/4 lg:basis-1/4 w-full h-full p-6 "
                >
                  <div className="w-full h-full">
                    <Card className="h-full w-full">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-2xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        {/* <Outlet/> */}
        {/* false useState */}
        <div className="mt-3">
          <Publications />
        </div>

        <div>
          <AboutCounter
            firstTitle={{ desc: "Total Snactioned Projects", value: 12 }}
            secondTitle={{ desc: "Ongoing Projects", value: 20 }}
            thirdTitle={{ desc: "Total Fund Recieved", value: 92 }}
            fourthTitle={{ desc: "Projects Staff", value: 77 }}
          />
        </div>
      </div>
    </div>
  );
}
