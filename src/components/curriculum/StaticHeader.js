import React from "react";

const StaticHeader = () => {
    return (
        <header
            className="big-header"
            style={{ marginBottom: '0', paddingBottom: '100px' }}
        >
            <div className="big-header-content">
                <h1 className="">CV</h1>
                <div className="subtitle">My Curriculum Vitae</div>
            </div>
            <div className="big-header-background" />
        </header>
    );
};

export default StaticHeader;