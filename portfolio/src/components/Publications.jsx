import React from 'react'
const publicationsData = [
  {
  title: 'Secure and Efficient Multicast-Enabled Handover Scheme in VANET (Applied Sciences, 2023)',
  journal: 'Journal Type: SCIE Indexed | IF: 2.838 | Publisher: MDPI',
  field: 'Field: Wireless Communication, Vehicular Networks',
  description:
    'Core contribution to secure mobility in vehicular ad hoc networks using PMIPv6, with multicast optimization — highly relevant in smart transportation research.',
},
{
  title: 'A Comprehensive Cost Analysis of Handoff in PMIPv6 for VANET (Electronics, 2022)',
  journal: 'Journal Type: SCIE Indexed | IF: 2.690 | Publisher: MDPI',
  field: 'Field: Computer Networks, Protocol Optimization',
  description:
    'Focuses on cost-efficient secure handovers in VANETs, enhancing the performance of vehicular communications through authentication cost analysis — essential in mobile networking research.',
},
{
  title: 'Lung Cancer Detection using CNN (IEEE ICCCNT, 2024)',
  journal: 'Conference Type: IEEE | Scopus Indexed',
  field: 'Field: Medical AI, Deep Learning',
  description:
    'Applies convolutional neural networks for early-stage lung cancer detection from medical images — a critical intersection of AI and healthcare with significant diagnostic impact.',
},
{
  title: 'TalkifyPy: The Pythonic Voice Assistant (IEEE ACET, 2024)',
  journal: 'Conference Type: IEEE | Scopus Indexed',
  field: 'Field: AI, NLP, Voice Systems',
  description:
    'Presents a voice-controlled AI assistant built in Python, demonstrating practical integration of NLP, speech recognition, and automation — aligning with modern HCI trends.',
},
{
  title: 'An Improved Analysis of Secured Permutation and Substitution-Based Image Encryption (Cybersecurity & Info Mgmt, 2023)',
  journal: 'Journal Type: Scopus Indexed',
  field: 'Field: Cybersecurity, Cryptography',
  description:
    'Proposes an enhanced image encryption technique based on permutation and substitution operations — addressing data confidentiality and secure multimedia communication.',
},
{
  title: 'Biomimetic Intelligent Drone for Weed Removal (German Patent, 2021)',
  journal: 'Patent Type: International Patent | Published in Germany',
  field: 'Field: Robotics, AI in Agriculture',
  description:
    'Designs a deep learning-enabled drone that mimics biological behavior to autonomously detect and remove weeds — contributing to precision farming and agricultural automation.',
}
,
];
const Publications = () => {
  return (
  <section id='publications' className="bg-gray-100 min-h-screen flex flex-col py-12"> 
    <div className="flex-1 flex flex-col justify-center items-center px-4">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-gray-800"> Few Publications</h2> {/* Adjusted mb and added text color */}
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-12 w-full max-w-7xl mx-auto"> {/* Adjusted gap, added justify-center and mx-auto */}
        {publicationsData.map(({title,journal,field,description }) => (
          <div
            key={title}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)] transition hover:shadow-lg" 
          >
           
            <h3 className="text-xl font-bold mb-2 text-gray-700">{title}</h3> 
            <span className='text-green-600 font-bold mb-1'>{journal}</span>
            <span className='font-medium mb-1'>{field}</span>
            <p className="text-gray-600 flex-grow">{description}</p> {/* Added flex-grow to description */}
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Publications