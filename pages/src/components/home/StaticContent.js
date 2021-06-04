import ErrorBoundary from '../status/ErrorBoundary';
import TextLoop from 'react-text-loop';
import Link from 'next/link'
import Fade from 'react-reveal/Fade';
import { arrowDownSVG, facebookSVG, linkedInSVG, skypeSVG } from '../utils/svg';
import { openCrisp } from '../crisp/Crisp';
import React from 'react';

const greetings = ['Hello,', 'Hola,', 'Ciao,', 'Guten tag,'];

const jobTitles = [
  'Front end engineer',
  'Full stack Designer',
  'Front-end Developer',
  'Graphic Designer',
  'UX Designer',
];

const StaticContent = () => {
  return (
    <ErrorBoundary>
      <header className="big-header home" data-test="static">
        <div className="big-header-content">
          <TextLoop
            interval={10000}
            springConfig={{ stiffness: 180, damping: 12 }}
          >
            {greetings.map((greeting) => (
              <h2 key={greeting}>{greeting}</h2>
            ))}
          </TextLoop>

          <Fade big cascade>
            <div className="subtitle">
              My name is
              <strong className="name">
                Joel
                <div className="presentation-tooltip">
                  <div className="image" />
                  <div className="description">
                    <Link href="/curriculum">
                      <a className="name">Pamel Joel Beltrè</a>
                    </Link>
                    <Link  href="/curriculum">
                      <a className="text">I am a young web developer, you can find me here:</a>
                    </Link>
                    <div className="social">
                      <a
                        name="My Linkedin Profile"
                        className="linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/pameljoel/"
                      >
                        {linkedInSVG}
                      </a>
                      <a
                        name="My Facebook Profile"
                        className="facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/pamel.joel"
                      >
                        {facebookSVG}
                      </a>
                      <a
                        name="My Skype Profile"
                        className="skype"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="skype:pjjjjk?chat"
                      >
                        {skypeSVG}
                      </a>
                    </div>
                  </div>
                </div>
              </strong>
            </div>
          </Fade>

          <Fade big cascade>
            <div className="job">
              <div className="job-suffix">
                <span>I'am a</span>
              </div>
              <div className="job-title">
                <TextLoop
                  interval={700}
                  adjustingSpeed={2000}
                  springConfig={{ stiffness: 180, damping: 15 }}
                >
                  {jobTitles.map((title) => (
                    <h1 key={title}>{title}</h1>
                  ))}
                </TextLoop>
              </div>
            </div>
          </Fade>

          <Fade big cascade>
            <div className="company">
              <div className="company-suffix">
                Right now, I am working here:
              </div>

              <div className="company-description">
                <span className="company-field">
                  <span className="field-suffix">at </span>
                  <a
                    href="https://www.lastminute.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="field-name"
                  >
                    lastminute.com
                  </a>
                </span>

                <span className="company-field">
                  <span className="field-suffix">in</span>
                  <a
                    href="https://goo.gl/maps/YmmGRnJzik7yERsp7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="field-name"
                  >
                    Chiasso <small>(Switzerland)</small>
                  </a>
                </span>
              </div>

              <div className="company-description">
                <div className="company-suffix">as</div>
                <Link href="/curriculum">
                  <a className="company-job-title">
                  <span>Front-end Engineer</span>
                  <div>
                    <small style={{ fontSize: '12px', fontWeight: '300' }}>
                      View my Curriculum Vitae
                    </small>
                  </div>
                  </a>
                </Link>
              </div>
            </div>
          </Fade>

          <Fade big cascade>
            <button className="big-button-secondary">
              <Link href="/projects">
                <a>See my projects</a>
              </Link>
            </button>
          </Fade>

          <Fade big cascade>
            <button className="big-button-primary" onClick={openCrisp}>
              <div>Contact me</div>
            </button>
          </Fade>
        </div>

        {arrowDownSVG}
        <div className="big-header-background" />
      </header>
    </ErrorBoundary>
  );
};

export default StaticContent;
