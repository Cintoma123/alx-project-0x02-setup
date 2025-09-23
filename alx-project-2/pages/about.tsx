"use client";

import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-50">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            About Our Project
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
            This page is a showcase for our custom, reusable components. Below
            is a demonstration of a versatile `Button` component with various
            styles and properties.
          </p>
        </div>

        <div className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-10">
              Button Component Examples
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              <Button size="small" shape="rounded" className="bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600">
                Small Rounded
              </Button>

              <Button size="medium" shape="square" className="bg-green-600 text-white hover:bg-green-500 focus-visible:outline-green-600">
                Medium Square
              </Button>

              <Button size="large" shape="circle" className="bg-red-600 text-white hover:bg-red-500 focus-visible:outline-red-600 w-28 h-28">
                Large Circle
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
