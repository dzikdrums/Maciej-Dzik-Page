import React, { useState } from 'react';

import { ReactComponent as CasesNext } from '../assets/arrow-right.svg';
import { ReactComponent as CasesPrev } from '../assets/arrow-left.svg';

const caseStudies = [
  {
    id: 1,
    subtitle: 'Drumstore',
    title: 'Online shop build in MERN stack',
    img: 'projects',
  },
  {
    id: 2,
    subtitle: 'New-wave Festival',
    title: 'Festival page, with back-end',
    img: 'projects-4',
  },
  {
    id: 3,

    subtitle: 'Bulletin Board',
    title: 'Bulletin board with MongoDB',
    img: 'projects-2',
  },
  {
    id: 4,
    subtitle: 'Portfolio page',
    title: 'Portfolio page in React',
    img: 'projects-5',
  },
  {
    id: 5,
    subtitle: 'Administrator panel',
    title: 'Administrator panel in pure HTML CSS',
    img: 'projects-3',
  },
];

const Cases = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div
            className={`cases-arrow prev ${currentPage === 0 && 'disabled'}`}
          >
            <button disabled={currentPage === 0} onClick={handlePrevPage}>
              <CasesPrev />
            </button>
          </div>
          <div
            className={`cases-arrow next ${currentPage === 2 && 'disabled'}`}
          >
            <button disabled={currentPage === 2} onClick={handleNextPage}>
              <CasesNext />
            </button>
          </div>
        </div>
        <div className={`row case-${currentPage}`}>
          {caseStudies.map((caseItem) => (
            <div className="case" key={caseItem.id}>
              <div className="case-details">
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className="case-image">
                <img
                  src={require(`../assets/${caseItem.img}.jpg`)}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
