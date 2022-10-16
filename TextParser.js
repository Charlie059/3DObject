/**
 * Define the TextParser class
 * which can parse the string input
 * from the Reader
 */
class TextParser {
    constructor(input) {
        this.input = input;
    }

    // Read string lines
    #readLines(){
        const lines = this.input.split('\n');
        return lines;
    }

    // Read first line of param
    #readParam(lines) {
        // Read first line: get vertex and plane Num
        const param = lines[0].split(',');
        var vertexNum = parseInt(param[0]);
        var planeNum = parseInt(param[1]);

        // Remove the first line
        lines.shift();
        return {vertexNum, planeNum};
    }

    /**
     * Parse Vertex line
     * @param vertexNum the number of vertex
     * @param lines string of lines
     * @param vertexMap hashmap of vertex of idx number
     * @param vertexes array of vertex
     */
    #readVertex(vertexNum, lines, vertexMap, vertexes) {
        for (let i = 0; i < vertexNum; i++) {
            // Split the vertexLine by ','
            const vertexLine = lines.at(0).split(',');

            // Define the vertex idx and currVertex3DPram
            const idx = parseInt(vertexLine[0]);
            const currVertex3DPram = [];

            // Record 3D points
            for (let j = 1; j <= 3; j++) currVertex3DPram.push(parseFloat(vertexLine[j]));

            // Create Vertex3D and add to the hashmap and vertexs list
            let currVertex3D = new Vertex3D(currVertex3DPram[0], currVertex3DPram[1], currVertex3DPram[2]);
            vertexMap.set(idx, currVertex3D);
            vertexes.push(currVertex3D);

            lines.shift(); // Remove the first line
        }
    }

    /**
     * Parse the plane info and add to the planes array
     * @param planeNum Num of plane
     * @param lines string of lines
     * @param vertexMap hashmap of vertex of idx number
     * @param planes Planes array
     */
    #readPlane(planeNum, lines, vertexMap, planes) {
        for (let i = 0; i < planeNum; i++) {
            // Split the vertexLine by ','
            const planeLine = lines.at(0).split(',');

            const currVertexArr = [];

            // Record plane info and push to the currVertexArr
            for (let j = 0; j < 3; j++) {
                currVertexArr.push(vertexMap.get(parseInt(planeLine[j])));
            }

            // Create Plane and add to the plane array
            let currPlane = new Plane(currVertexArr);
            planes.push(currPlane);

            lines.shift(); // Remove the first line
        }
    }

    // Parse the input
    parse(){
        // Define vertex map, vertex array, and plane array
        const vertexMap = new Map();
        const vertexes = [];
        const planes = [];

        // Read lines
        const lines = this.#readLines();
        if(lines.length === 0) return; // Error handling

        // Read first line of param
        const {vertexNum, planeNum} = this.#readParam(lines);

        // Read vertex lines
        this.#readVertex(vertexNum, lines, vertexMap, vertexes);

        // Read planes lines
        this.#readPlane(planeNum, lines, vertexMap, planes);

        return {vertexes, planes};

    }



}