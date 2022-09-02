import React from 'react';
import Link from 'next/link'

const Branding = () => {
  return (
    <Link href="/">
        <a className="nav-logo__container">
            <div className="nav-logo">
                Pamel Joel Beltrè
                <strong> | Personal Portfolio site</strong>
            </div>
        </a>
    </Link>
  );
};

export default Branding;
