import React, { createContext, useReducer } from 'react';

const GlobalContext = createContext();

function GithubJobsContext({ children }) {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case "FETCH_JOBS": {
                return {
                    isLoading: false,
                    githubJobs: action.githubJob
                }
            }
        }
        return state;
    }, {
        isLoading: true,
        githubJobs: [],
    })
    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GithubJobsContext, GlobalContext }
