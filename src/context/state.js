import React, {createContext, useContext, useState} from 'react';

const State = createContext(null);

export function AppWrapper({ children }) {
    const [selectedProject, setSelectedProject] = useState(null);

    const removeSelectedProject = () => {
        setSelectedProject(null);
    };

    const sharedState = {
        selectedProject,
        setSelectedProject,
        removeSelectedProject,
    };

    return (
        <State.Provider value={sharedState}>
            {children}
        </State.Provider>
    );
}

export function useAppContext() {
    return useContext(State);
}