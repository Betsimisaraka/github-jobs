import React, { createContext, useReducer } from 'react';

const GlobalContext = createContext();

function GithubJobsContext({ children }) {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case "FETCH_JOBS": {
                return {
                    ...state,
                    isLoading: false,
                    githubJobs: action.githubJob
                }
            }
            case "SEARCH_GITHUB_JOBS": {
                return {
                    ...state,
                    githubJobs: action.filteredGithubJobs
                }
            }
            case  "FULL_TIME": {
                return {
                    ...state,
                    githubJobs: action.filteredTheFullTimeJob
                }
            }
            case  "CITY": {
                return {
                    ...state,
                    githubJobs: action.filteredTheCityJob
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
