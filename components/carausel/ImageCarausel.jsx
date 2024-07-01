
import { certificates } from '../../data/certificates';
import { 
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,    
  } from '../../components/ui/carousel';

  import Image from 'next/image';

  import { Card, CardContent } from '../ui/card';

import { useEffect, useState } from 'react';

export default function ImageCarausel({ src }) {

    const [source, setSources] = useState(src);


    
    return (
        <>
            <div className="mx-3 justify-center align-middle px-2 lg:flex">
        <Carousel className="w-[32rem] self-center h-full">
          <CarouselContent className="-ml-1">
            {certificates.map((announcement, index) => (
              <CarouselItem
                key={index}
                className="basis-full w-full h-full "
              >
                <div className="w-full h-full">
                  <Card className="h-full w-full">
                    <CardContent className="flex aspect-square items-center justify-center  w-full h-96 flex-col">
                    <div className="w-full h-full overflow-hidden">
                          <Image
                            src={announcement.image}
                            alt={announcement.alt}
                            width={800}
                            height={800}
                          />
                      </div>
                     
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
        </>
    );
}