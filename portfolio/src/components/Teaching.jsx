import React from 'react'
const publicationsData = [
  {
  title: 'Professor',
  department: 'Department of Computer Science and Engineering, UIE, Chandigarh University, Mohali',
  field: 'Duration: March 2024 – Present',
  description:
    'Supervising three Ph.D. scholars and guiding UG/PG projects. Holds key academic roles including Deputy Centre Superintendent for examinations, Ph.D. RDC member and expert panelist, external thesis examiner, and reviewer for international publications. Also contributes to university governance through DQAC, recruitment panels, and as Coordinator of FSC. Serves as SPOC for NeoColab and CoE in Data Science & Cognitive Science.',
},
{
  title: 'Associate Professor',
  department: 'Department of Computer Applications, KIET Group of Institutions, Ghaziabad',
  field: 'Duration: August 2005 – March 2024',
  description:
    'Held multiple academic and administrative roles including Associate Professor (2008–2024), ISO In-Charge, NIRF/NAAC Coordinator, BoS Member, and Associate Dean Student Welfare. Managed key functions like university evaluation coordination, paper moderation, UPSEE exam administration, and hostel management. Played an active role in NBA visits, anti-ragging, admissions, and disciplinary committees, contributing significantly to institutional quality and student welfare.',
},
{
  title: 'Lecturer',
  department: 'Shobhit Institute of Engineering & Technology, Saharanpur',
  field: 'Duration: August 2001 – August 2005',
  description:
    'Taught core computer science subjects and contributed to academic delivery during early teaching career. Built foundational experience in curriculum implementation and student mentoring.',
}

,
];
const Teaching = () => {
  return (
 <section id='teaching' className="bg-gray-100 min-h-screen flex flex-col py-12"> 
    <div className="flex-1 flex flex-col justify-center items-center px-4">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-gray-800"> Professional Experience</h2> 
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-12 w-full max-w-7xl mx-auto"> 
        {publicationsData.map(({title,department,field,description }) => (
          <div
            key={title}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)] transition hover:shadow-lg" 
          >
           
            <h3 className="text-xl font-bold mb-2 text-gray-700">{title}</h3> 
            <span className='text-green-600 font-bold mb-1'>{department}</span>
            <span className='font-medium mb-1'>{field}</span>
            <p className="text-gray-600 flex-grow">{description}</p> 
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Teaching