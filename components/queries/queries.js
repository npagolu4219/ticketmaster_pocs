import { gql } from 'apollo-boost';

const getHashtagCountQuery = gql`
{
    getHashtagCount{
    eventName
    noOfPeopleTalking
    country
    eventUrl
    city
    }
}    
`;

export { getHashtagCountQuery };