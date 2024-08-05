import Link from 'next/link';
import React from 'react'
import { Calendar, Download, Facebook, Instagram, Linkedin, Mail, MapPin, Smartphone, Twitter } from 'react-feather'

function Sidebar() {
  return (
      <aside className="w-full md:w-1/2 lg:w-1/4 bg-slate-50 p-6 rounded-3xl">
          <img src="/images/profile-pic2.png" />
          <div className="mt-7">
              <p className="text-center text-2xl font-semibold">Fii Maarif</p>
              <p className="text-center mt-2 text-lg text-gray-500">Frontend Developer</p>
              <div className="flex justify-between mt-5">
                  <Link
                      href={"https://www.instagram.com/fimaarif/"}
                      target='_blank'
                      className="bg-gray-100 hover:bg-gray-200 p-2 rounded-xl"
                  >
                      <Instagram color="#f43f5e" />
                  </Link>
                  <Link
                      href={"https://www.linkedin.com/in/fiimaarif"}
                      target='_blank'
                      className="bg-gray-100 hover:bg-gray-200 p-2 rounded-xl"
                  >
                      <Linkedin color="#075985" />
                  </Link>
                  <Link
                      href={"https://www.facebook.com/fiimaarif.fiimaarif"}
                      target='_blank'
                      className="bg-gray-100 hover:bg-gray-200 p-2 rounded-xl"
                  >
                      <Facebook color="#22d3ee" />
                  </Link>
                  <Link
                      href={"#"}
                      className="bg-gray-100 hover:bg-gray-200 p-2 rounded-xl"
                  >
                      <Twitter color="#1d4ed8" />
                  </Link>
              </div>
          </div>
          <div className="mt-5 bg-gray-100 p-3 rounded-xl">
              <div className="flex items-center">
                  <div className="bg-neutral-50 shadow p-2 rounded">
                      <Smartphone color="#1d4ed8" />
                  </div>
                  <div className="ml-2">
                      <p className='text-xs text-gray-500'>Phone</p>
                      <p>+62 812 1435 7617</p>
                  </div>
              </div>
              <hr className="my-2" />
              <div className="flex items-center">
                  <div className="bg-neutral-50 shadow p-2 rounded">
                      <Mail color="#22d3ee" />
                  </div>
                  <div className="ml-2">
                      <p className='text-xs text-gray-500'>Email</p>
                      <p>fiimaarif44@gmail.com</p>
                  </div>
              </div>
              <hr className="my-2" />
              <div className="flex items-center">
                  <div className="bg-neutral-50 shadow p-2 rounded">
                      <MapPin color="#075985" />
                  </div>
                  <div className="ml-2">
                      <p className='text-xs text-gray-500'>Location</p>
                      <p>South Jakarta, Indonesia</p>
                  </div>
              </div>
              <hr className="my-2" />
              <div className="flex items-center">
                  <div className="bg-neutral-50 shadow p-2 rounded">
                      <Calendar color="#f43f5e" />
                  </div>
                  <div className="ml-2">
                      <p className='text-xs text-gray-500'>Birthday</p>
                      <p>May 10, 1998</p>
                  </div>
              </div>
          </div>
          <div className="mt-5 bg-teal-500 hover:bg-teal-700 p-3 rounded-xl">
              <Link href={'https://drive.google.com/file/d/1CMbOQsV5vsH4eLc-0z5cFPUADzHOUDwY/view'} target='_blank' className="flex justify-center text-slate-50">
                  <Download className='mr-2'/>
                  Download CV
              </Link>
          </div>
      </aside>
  );
}

export default Sidebar