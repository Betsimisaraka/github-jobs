import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './GithubJobsContext';
import DisplayGithubJobs from '../components/DisplayGithubJobs';
import { UlStyle } from './style';
import GithubJobsHeader from '../components/GithubJobsHeader';
import Options from '../components/Options';
import ReactPaginate from 'react-paginate';

export const CORS = "https://cors-anywhere.herokuapp.com/";

function GithubJobs() {
    const { state, dispatch } = useContext(GlobalContext);
    const { githubJobs, isLoading, location, description, fullTime } = state;

    const [offset, setOffeset] = useState(0);
    const [perPage] = useState(5);
    const [countPage, setCountPage] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            async function fetchData() {
                const CORS = "https://cors-anywhere.herokuapp.com/";
                const URL_API = `https://jobs.github.com/positions.json?description=${description}&location=${location}&full_time=${fullTime}&markdown=true`;
                const response = await fetch(CORS + URL_API);
                const data = await response.json();
                setCountPage(Math.ceil(data.length / perPage));
                dispatch({ type: "FETCH_JOBS", githubJob: data });
            }
            fetchData();
        }, 500);
    }, [ description, fullTime, location, offset ]);

    function handleClick(e) {
        const selectedPage = e.selected
        setOffeset(selectedPage + 1);
    }

    const sliceGithubJobs = githubJobs.slice(offset, offset + perPage);

    return (
        <div>
            <GithubJobsHeader />
            <div className="main_container">    
                <Options />
                {isLoading && 'Loading...'}
                <UlStyle className="githubjob_lists">
                    {!isLoading && githubJobs.length > 0 &&
                    sliceGithubJobs.map(githubJob => (
                        <DisplayGithubJobs key={githubJob.id} githubJob={githubJob} />
                    ))}
                    {!isLoading && githubJobs.length === 0 && 
                     <p className="no_results">No results found</p> }
                </UlStyle>
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={countPage}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handleClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>
        </div>
    )
}

export default GithubJobs
