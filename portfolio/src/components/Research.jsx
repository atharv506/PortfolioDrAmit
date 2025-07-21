import React from 'react';

const researchAreas = [
  {
    icon: 'fa-solid fa-brain',
    title: 'Artificial Intelligence',
    description:
      'Work includes the application of AI and ML techniques in diverse domains such as medical imaging (e.g., lung cancer detection using CNNs), intelligent voice recognition systems leveraging attention mechanisms, and AI-powered drones for agricultural automation. Emphasis is placed on real-world implementation and efficiency of learning models.',
  },
  {
    icon: 'fa-solid fa-network-wired',
    title: 'Network Security & Protocols',
    description:
      'Research focuses on enhancing the security and efficiency of Vehicular Ad Hoc Networks (VANETs), particularly through improved handover mechanisms and authentication protocols in PMIPv6. Contributions include cost analysis, defense against network attacks, and survey-based studies identifying key challenges and solutions in vehicular communication networks.',
  },
  {
    icon: 'fa-solid fa-wifi',
    title: ' Internet of Things (IoT) and Smart Systems',
    description:
      'Explores energy-efficient data broadcasting, smart healthcare applications, and security-enhanced IoT frameworks. Solutions address critical issues in smart highways, emergency roadside assistance, and secure device authentication, integrating IoT with real-time responsiveness and automation.',
  },
  {
    icon: 'fa-solid fa-link',
    title: ' Blockchain and Secure Frameworks',
    description:
      'Develops blockchain-based frameworks using smart contracts to ensure transparency and security, particularly in digital domains like online advertising. Emphasis is on decentralized trust models and tamper-proof data handling.',
  },
    {
    icon: 'fa-solid fa-database',
    title: ' Data Management & Warehousing',
    description:
      'Contributions involve the comparative analysis of methodologies for data warehouse design and efficient XML indexing techniques for real-time data environments. Focus is on optimizing storage, retrieval, and broadcasting in high-demand systems.',
  },
     {
    icon: 'fa-solid fa-book',
    title: 'Advanced Technologies for Society 5.0',
    description:
      'Research addresses the role of emerging technologies in shaping Society 5.0, including scalable innovations for security, communication, and digital transformation. Work bridges technical advancement with societal impact.',
  },
];

const Research = () => (
  <section id='research' className="bg-gray-100 min-h-screen flex flex-col py-12"> {/* Added py-12 for vertical padding */}
    <div className="flex-1 flex flex-col justify-center items-center px-4">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-gray-800">Research Areas</h2> {/* Adjusted mb and added text color */}
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-12 w-full max-w-7xl mx-auto"> {/* Adjusted gap, added justify-center and mx-auto */}
        {researchAreas.map(({ icon, title, description }) => (
          <div
            key={title}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)] transition hover:shadow-lg" /* Adjusted width for responsiveness */
          >
            <div className="bg-green-100 p-3 rounded mb-4">
              <i className={`${icon} text-green-400 text-2xl`} aria-hidden="true"></i>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-700">{title}</h3> {/* Added text color */}
            <p className="text-gray-600 flex-grow">{description}</p> {/* Added flex-grow to description */}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Research;