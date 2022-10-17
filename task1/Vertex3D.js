/**
 * Define the vertex which contains
 * x, y and z in 3D space, transform
 * the point to the float point
 */
class Vertex3D {
    constructor(x, y, z) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
        this.z = parseFloat(z);
    }
}