import React from 'react';
import Link from 'next/link'

const Branding = () => {
  return (
    <Link href="/">
        <a className="nav-logo__container">
            <div className="nav-logo">
                <strong>P</strong>amel <strong>J</strong>oel <strong>B</strong>eltrè{' '}
                <small> | Personal Portfolio site</small>
            </div>
        </a>
    </Link>
  );
};

export default Branding;
