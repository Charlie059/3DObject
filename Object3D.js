/**
 * Define the Object in 3D space which
 * have an array of vertex3D and planes
 */
class Object3D {
    constructor(vertex3D, planes) {
        this.vertex3D = vertex3D;
        this.planes = planes;
    }

    // Rotate an object
    rotate(theta, phi) {
        const n = this.vertex3D.length;
        const center = new Vertex3D(0, 0, 0);
        for (let i = 0; i < n; ++i){
            // Current vertex
            const currVertx = this.vertex3D[i];

            // Rotation
            const x = currVertx.x - center.x;
            const y = currVertx.y - center.y;
            const z = currVertx.z - center.z;

            currVertx.x = Math.cos(theta) * x - Math.sin(theta) * Math.cos(phi) * y + Math.sin(theta) * Math.sin(phi) * z + center.x;
            currVertx.y = Math.sin(theta) * x + Math.cos(theta) * Math.cos(phi) * y - Math.cos(theta) * Math.sin(phi) * z + center.y;
            currVertx.z = Math.sin(phi) * y + Math.cos(phi) * z + center.z;
        }
    }

    // Zoom the object
    zoom(factor){
        const n = this.vertex3D.length;
        for (let i = 0; i < n; ++i){
            // Current vertex
            const currVertx = this.vertex3D[i];

            if(factor >= 0){
                // Zoom in
                currVertx.x *= 1.1;
                currVertx.y *= 1.1;
                currVertx.z *= 1.1;
            }else{
                // Zoom  out
                currVertx.x *= 0.9;
                currVertx.y *= 0.9;
                currVertx.z *= 0.9;
            }

        }
    }
}
