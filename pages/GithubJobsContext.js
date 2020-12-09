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
            case  "fulltime": {
                return {
                    ...state,
                    fulltime: action.value
                }
            }
            case  "location": {
                return {
                    ...state,
                    location: action.value
                }
            }
            case "description": {
                return {
                    ...state,
                    description: action.value
                }
            }
            case "city": {
                return {
                    ...state,
                    githubJobs: action.value
                }
            }
        }
        return state;
    }, {
        isLoading: true,
        githubJobs: [],
        location: 'New York',
        description: '',
        fulltime: false,
    })

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GithubJobsContext, GlobalContext }
