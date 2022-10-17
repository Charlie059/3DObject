
class Canvas {
    // Define Singleton Class
    constructor(strokeStyle, fillStyle) {
        // Init canvas
        this.canvas = document.getElementById('cnv');
        this.width = this.canvas.offsetWidth;
        this.height = this.canvas.offsetHeight;
        this.middleWidth = this.canvas.offsetWidth / 2;
        this.middleHeight = this.canvas.offsetHeight / 2;

        // Prepare the canvas to plot
        this.context = this.canvas.getContext('2d');

        // Init plot style
        this.context.strokeStyle = strokeStyle;
        this.context.fillStyle = fillStyle;
    }

    // Draw each plane
    #drawPlane(context, currPlane){
        const n_vertices = currPlane.vertex3D.length;
        // Draw the other vertices
        for (let i = 0 ; i < n_vertices; i++) {
            // calculate the projection of shifted x and y with center of window for origin
            const x_ = currPlane.vertex3D[i].x + this.middleWidth;
            const y_ = -currPlane.vertex3D[i].z + this.middleHeight;
            // starting point
            if(i === 0){
                context.beginPath();
                context.moveTo(x_, y_);
            }else{
                // Connect to the line
                context.lineTo(x_, y_);
            }
        }
        // Close the path and draw the face
        context.closePath();
        context.stroke();
        context.fill();

    }

    renderFrame(object3D){
        // Clear the previous frame
        this.context.clearRect(0, 0, this.width, this.height);

        // Traverse the object3D's plane
        const planeNum = object3D.planes.length;
        for(let i = 0; i < planeNum; i++){
            // Get curr plane
            var currPlane = object3D.planes.at(i);
            this.#drawPlane(this.context, currPlane);
        }
    }




}