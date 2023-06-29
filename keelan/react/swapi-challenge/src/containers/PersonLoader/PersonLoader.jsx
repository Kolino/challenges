import { getTarPeoplePageByNum } from "../../services/find-people-services";
import { PersonList } from "../../components/PersonList/PersonList";
import { useEffect, useState } from "react";

const PersonLoader = ({ searchNum }) => {
    const [tarPeople, setTarPeople] = useState([]);
    const [searchErr, setSearchErr] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setTarPeople([]);
        setSearchErr(null);
        setIsLoading(true);

        // Retrieving the people for the given 
        getTarPeoplePageByNum(searchNum)
            .then(people => setTarPeople(people))
            .catch(err => {
                setSearchErr(err);
            })
            .finally(() => setIsLoading(false));
    }, [searchNum]);

    return (
        <section>
            {isLoading && <p>Loading...</p>}
            {!isLoading && searchErr && <p>{searchErr.message}</p>}
            {!isLoading && tarPeople.length > 0 && <PersonList people={tarPeople} />}
        </section>
    );
};

export default PersonLoader;