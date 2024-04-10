"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { BestSellingProducts, categoryAssets } from "@/lib/constant";
import Card from "@/components/shared/Card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const autoplayPlugin = Autoplay({ delay: 2000, stopOnInteraction: true });

  return (
    <main className="">
      <div className="w-full">
        <Carousel
          plugins={[autoplayPlugin]}
          onMouseEnter={autoplayPlugin.stop}
          onMouseLeave={autoplayPlugin.play}
        >
          <CarouselContent>
            <CarouselItem className="relative">
              <img
                className="w-dvw h-[60vh] object-cover"
                src="https://images.unsplash.com/photo-1688217170693-e821c6e18d72?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="cl"
              />
              <div className="absolute bottom-0 py-8 px-16 bg-gradient-to-t from-black to-transparent opacity-65 text-white flex w-full h-2/4 "></div>
            </CarouselItem>
            <CarouselItem className="relative">
              <img
                className="w-dvw h-[60vh] object-cover"
                src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="cl"
              />
              <div className="absolute bottom-0 py-8 px-16 bg-gradient-to-t from-black to-transparent opacity-65 text-white flex w-full h-2/4 "></div>
            </CarouselItem>
            <CarouselItem className="relative">
              <img
                className="w-dvw h-[60vh] object-cover"
                src="https://images.unsplash.com/photo-1608502669656-a24fa8036853?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="cl"
              />
              <div className="absolute bottom-0 py-8 px-16 bg-gradient-to-t from-black to-transparent opacity-65 text-white flex w-full h-2/4 "></div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-10" />
          <CarouselNext className="right-8" />
        </Carousel>
      </div>

      {/* category container  */}
      <section className="flex flex-wrap gap-4 w-full h-full my-8 items-center justify-center">
        {categoryAssets.map((item, index) => (
          <div className="flex flex-col jutify-center items-center gap-2 hover:scale-110 cursor-pointer transition-all duration-100">
            <img src={item.imgUrl} alt="category" className="w-28" />
            <p className="text-[.8rem]">{item.name}</p>
          </div>
        ))}
      </section>
      {/* best selling section */}
      <section className="flex lg:w-3/4 pl-4 flex-col mx-auto">
        <div className="flex justify-between items-start mb-8">
          <h6 className="px-2 font-bold text-2xl border-l-8 border-green-600">
            Best Selling
          </h6>
          <a href="/" className="text-green-600 underline">
            See more
          </a>
        </div>
        <div className="flex p-4 gap-4 w-full overflow-x-auto overflow-y-hidden scrollbar-hide">
          {BestSellingProducts.map((product, index) => (
            <Card
              id={index.toString()}
              title={product.name}
              image={product.imgUrl}
              price={product.priceUSD}
            />
          ))}
        </div>
      </section>

      {/* Banner section */}
      <div className="flex flex-col sm:flex-row lg:w-3/4 pl-4 pt-20 mx-auto gap-2 text-white ">
        <div className="relative md:w-full p-8 bg-yellow-400 h-64  rounded-2xl overflow-hidden">
          <p className="font-bold text-2xl lg:text-4xl capitalize mb-4">
            Special Deals on <br /> herbs & Spices
          </p>
          <Button className="transition-all hover:scale-105 ">Check Now</Button>
          <div className="absolute top-4 right-5 bg-red-600 px-8 py-3 rounded-full">
            <p className="text-xl font-extrabold uppercase">50% off</p>
          </div>
          <img
            src="/images/banner-img.png"
            alt="banner-img"
            className="absolute bottom-0 -right-8 h-[15vh] sm:h-[20vh]"
          />
        </div>
        <div className="relative h-64 bg-[#4A90C3] p-8 rounded-2xl overflow-hidden">
          <p className="font-bold text-2xl lg:text-4xl capitalize mb-4 z-50">
            Check other <br /> exciting deals on snacks
          </p>
          <img
            src="/images/snack.png"
            alt="banner-img"
            className="absolute bottom-0 right-0 h-[20vh]  "
          />
          <Button className="transition-all hover:scale-105 z-50">Check Now</Button>
        </div>
      </div>

      {/* best grocery section */}
      <section className="flex flex-col lg:w-3/4 pl-4 mx-auto mt-20">
        <div className="flex justify-between items-start mb-8">
          <h6 className="px-2 font-bold text-2xl border-l-8 border-green-600">
            Grocery
          </h6>
          <a href="/" className="text-green-600 underline">
            See more
          </a>
        </div>
        <div className="flex gap-4 p-4 w-full h-full overflow-x-auto overflow-y-hidden scrollbar-hide">
          {BestSellingProducts.map((product, index) => (
            <Card
              id={index.toString()}
              title={product.name}
              image={product.imgUrl}
              price={product.priceUSD}
            />
          ))}
        </div>
      </section>
      {/* best grocery section */}
      <section className="flex flex-col lg:w-3/4 pl-4 mx-auto mt-20">
        <div className="flex justify-between items-start mb-8">
          <h6 className="px-2 font-bold text-2xl border-l-8 border-green-600">
            Herbs & Spices
          </h6>
          <a href="/" className="text-green-600 underline">
            See more
          </a>
        </div>
        <div className="flex gap-4 h-full p-4 w-full overflow-x-auto overflow-y-hidden scrollbar-hide">
          {BestSellingProducts.map((product, index) => (
            <Card
              id={index.toString()}
              title={product.name}
              image={product.imgUrl}
              price={product.priceUSD}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
