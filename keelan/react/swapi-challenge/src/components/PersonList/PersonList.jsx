export const PersonList = ({ people }) => {
    return (
        <section>
            {people.map(person =>
                <p>{`Name: ${person.name}, height: ${person.height}, birth year: ${person.birth_year}, eye colour: ${person.eye_color}`}</p>
            )}
        </section>
    );
};