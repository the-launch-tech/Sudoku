import React from 'react'

export default () => {
  return (
    <section className="p-3 flex flex-wrap justify-between items-center">
      <h3 className="font-head text-center w-full cursor-default">Hire The Launch Today</h3>
      <ul className="flex justify-center items-center w-full p-1">
        <li className="ml-2 mr-2">
          <a
            href="https://twitter.com"
            target="_blank"
            className="text-2xl text-blue-4 transition-all transition-200 hover:text-blue-8 cursor-pointer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="ml-2 mr-2">
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-2xl text-blue-4 transition-all transition-200 hover:text-blue-8 cursor-pointer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="ml-2 mr-2">
          <a
            href="mailto:daniel@thelaunch.tech"
            target="_blank"
            className="text-2xl text-blue-4 transition-all transition-200 hover:text-blue-8 cursor-pointer"
          >
            <i className="fal fa-envelope"></i>
          </a>
        </li>
      </ul>
      <div className="text-center w-full">
        <span className="font-body text-tiny cursor-default">
          Copyright ©2019 | Designed and Developed by{' '}
          <a className="" href="https://thelaunch.tech" target="_blank">
            The Launch
          </a>
        </span>
      </div>
    </section>
  )
}
