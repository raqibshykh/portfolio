import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import PropTypes from 'prop-types';
import Header from './Header';
import Social from './Social';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import RevealOnScroll from './RevealOnScroll';
import '../css/contact.css';

function Contact({ header }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.contact, { method: 'GET' })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />
      {data ? (
        <RevealOnScroll className="section-content-container contact-page">
          <Fade triggerOnce>
            <div className="bento">
              <section className="tile tile--accent span-4">
                <span className="tile-label">Let&apos;s connect</span>
                <h2>{data.availability}</h2>
                <p>{data.intro}</p>
                <span>{data['contact-number']}</span> 
                <span style={{gap: '1rem'}}>{data.Email}</span>
              </section>
              <section className="tile span-2">
                <span className="tile-label">Based in</span>
                <h3>{data.location}</h3>
                <Social />
              </section>
            </div>
          </Fade>
        </RevealOnScroll>
      ) : <FallbackSpinner />}
    </>
  );
}

Contact.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Contact;
