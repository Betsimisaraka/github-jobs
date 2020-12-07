import styled from 'styled-components';

const UlStyle = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const GithubJobsStyle = styled.li`
    dispaly: grid;
    grid-tempate-columns: auto 1fr 1fr;
    column-gap: 20px;
    img {
        width: 100%;
        border-radius: 4px;
    }
`;

export { UlStyle, GithubJobsStyle };