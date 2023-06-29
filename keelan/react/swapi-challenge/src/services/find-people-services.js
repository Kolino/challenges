export const getTarPeoplePageByNum = async (pageNum = 0) => {
    // TODO: is the object with the headers object required?
    const response = await fetch(
        `https://swapi.dev/api/people/?page=${pageNum}`
    );
    if (!response.ok)
        throw new Error('Failed to fetch SWAPI people page');

    const responseData = await response.json();
    if (responseData.results.length === 0)
        throw new Error(`No people for ${pageNum} found`);
    
    return responseData.results;
};