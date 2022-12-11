class NlHelper {

    /**
     * @description Extract parameter value from list of links
     * @param  {Array} links - String list of links
     * @param  {string} parameterName - For example 'wpset'
     * @return {Array} - List of link and parameter value
     * */
    extractParameterValues = (links, parameterName) => {
        /** @type {URL} */
        let linkUrl;
        /** @type {*[]} */
        const result = [];
        for (const element of links) {
            linkUrl = new URL(element.toString());
            result.push({link: linkUrl.href, parameterValue: linkUrl.searchParams.get(parameterName)});
        }
        return result;
    };

    /**
     * @description Returns a data object from a given fixture
     * @param  {string} fixture - fixture name
     * @return {JSON}
     * */
    getTestData = fixture => require('../../fixtures/' + fixture);

}

export default NlHelper;
