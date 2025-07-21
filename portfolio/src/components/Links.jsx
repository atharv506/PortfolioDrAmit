import React from 'react';

const professionalLinks = [
  {
    name: 'Web of Science',
    url: 'https://www.webofscience.com/wos/author/record/AAQ-8214-2020',
    icon: "fa-solid fa-globe",
  },
  {
    name: 'Scopus',
    url: 'https://www.scopus.com/authid/detail.uri?authorId=57217223147',
    icon: "fa-solid fa-microscope",
  },
  {
    name: 'Vidwan',
    url: 'https://vidwan.inflibnet.ac.in/profile/326836',
    icon: "fa-solid fa-id-card",
  },
  {
    name: 'ORCID',
    url: 'https://orcid.org/0000-0002-5552-0957',
    icon: "fa-brands fa-orcid",
  },
  {
    name: 'Google Scholar',
    url: 'https://scholar.google.com/citations?user=RVr3eRMAAAAJ&hl=en',
    icon: "fa-brands fa-google",
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dr-amit-kumar-goyal-b21100161/',
    icon: "fa-brands fa-linkedin",
  },
];

const Links = () => (
  <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
    <div className="w-full max-w-2xl bg-white shadow-md rounded-xl py-10 px-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Professional Links
      </h2>
      <ul className="w-full space-y-5">
        {professionalLinks.map(({ name, url, icon }) => (
          <li key={name}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-gray-50 hover:bg-green-50 transition p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                <i className={`${icon} text-green-500 text-2xl`} aria-hidden="true"></i>
              </span>
              <span className="font-semibold text-gray-700 text-lg">{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Links;
