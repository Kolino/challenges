import { useState } from "react";

const SearchBar = ({ handleSubmit }) => {
    const [searchNum, setSearchNum] = useState(0);

    const handleOnChange = e => {
        setSearchNum(e.target.value);
    };

    const handleOnSubmit = e => {
        e.preventDefault();

        handleSubmit(searchNum);

        setSearchNum(0);
    };

    return (
        <section>
            <form onSubmit={handleOnSubmit}>
                <input
                    type='number'
                    value={searchNum}
                    onChange={handleOnChange}
                />
                <button>Search</button>
            </form>
        </section>
    );
};

export default SearchBar;