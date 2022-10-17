/**
 * Define the place which including
 * the array of vertex3D
 */
class Plane {
    constructor(vertex3Ds) {
        this.vertex3D = vertex3Ds;
    }

    // calculate the normal of the plane
    normalVec(){
        const vertexA = this.vertex3D[0];
        const vertexB = this.vertex3D[1];
        const vertexC = this.vertex3D[2];
        const Ax = vertexA.x;
        const Ay = vertexA.y;
        const Az = vertexA.z;
        const Bx = vertexB.x;
        const By = vertexB.y;
        const Bz = vertexB.z;
        const Cx = vertexC.x;
        const Cy = vertexC.y;
        const Cz = vertexC.z;

        const a = (By - Ay) * (Cz - Az) - (Cy - Ay) * (Bz - Az);
        const b = (Bz - Az) * (Cx - Ax) - (Cz - Az) * (Bx - Ax);
        const c = (Bx - Ax) * (Cy - Ay) - (Cx - Ax) * (By - Ay);
        return new Vector(a, b, c);
    }
}
