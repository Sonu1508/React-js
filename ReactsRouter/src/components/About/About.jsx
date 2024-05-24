import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                         React is a javaScript library for building interactive UI.
                      </h2>
                      <p className="mt-6 text-gray-600">
                          React is javaScript library using react we can make single page application.React is 
                          a library not a framework.
                      </p>
                      <p className="mt-4 text-gray-600">
                      Welcome to the React documentation! This page will give you an introduction to the 80% of React 
                      concepts that you will use on a daily basis.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}