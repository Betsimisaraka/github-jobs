import { formatDistance } from 'date-fns';

//Foramting the date into past date with days
const dateFormated = (date) => {
    return formatDistance(new Date(date), new Date());
}

export default dateFormated;