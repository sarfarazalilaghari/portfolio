import React from 'react'
import { projects } from '@/app/data'
import Image from 'next/image'
import Link from 'next/link'

const page = ({params:{id}}) => {
  
    const p=projects.filter((v,i)=>{
        return v.id==id
        })
        console.log(p)
  return (
    <div>
    {
p.map((v,i)=>{
  return<div key={v.id} className="bg-white dark:bg-gray-800 h-screen h-full py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
      <div className="flex items-center gap-12">
        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
          {v.title}
        </h2>
        <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
       {v.description}
        </p>
      </div>
      <a
        href={v.link}
        className="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
      >
        More
      </a>
    </div>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
      {/* image - start */}
      <Link
        href={v.image}
        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
      >
        <Image
          src={v.image}
          width={700}
          height={0}
          loading="lazy"
          alt="Photo by Minh Pham"
          className="absolute inset-0 h-full object-center transition duration-200 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
        SignUp
        </span>
      </Link>
      {/* image - end */}
      {/* image - start */}
      <Link
          href={v.image2}
        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
      >
        <Image
          src={v.image2}
          width={1000}
          height={0}
          loading="lazy"
          alt="Photo by Magicle"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
        Student Module Home Page
        </span>
      </Link>
      {/* image - end */}
      {/* image - start */}
      <Link
        href={v.image3}
        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
      >
        <Image
          src={v.image3}
          height={1000}
          width={1000}
          loading="lazy"
          alt="Photo by Martin Sanchez"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
          Teacher module landing page
        </span>
      </Link>
      {/* image - end */}
      {/* image - start */}
      <Link
        href={v.image4}
        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
      >
        <Image
          src={v.image4}
          width={1000}
          height={0}
          loading="lazy"
          alt="Photo by Lorenzo Herrera"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
          Message box
        </span>
      </Link>
      {/* image - end */}
    </div>
  </div>
</div>

  
})
    }
    </div>
  )
}

export default page
