import React, {createContext, useContext, useState} from 'react';

const AppContext = createContext(null);

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
        <AppContext.Provider value={sharedState}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}