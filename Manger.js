/**
 * Canvas manger
 */
class Manger {
    // Define Singleton Class
    constructor() {
        if (Manger._instance) {
            return Manger._instance
        }
        Manger._instance = this;
    }

    /**
     * Read file from the browser and draw to canvas
     */
     read2Draw(){
        document.getElementById('inputfile')

            // Create an EventListener to listen the file input
            .addEventListener('change', function() {

                const fr = new FileReader();

                // FileReader read the text
                fr.readAsText(this.files[0]);

                fr.onload = function(){

                    // Use TextParser to parse the txt file
                    const textParser = new TextParser(fr.result);
                    const {vertexes, planes} = textParser.parse();

                    // Create a new 3D object with reading data
                    const object = new Object3D(vertexes, planes);

                    // Create a canvas object to plot
                    const canvas = new Canvas("Grey", "rgba(255, 255, 255, 0.5)");

                    // Render the object in the first frame with top view
                    object.rotate(0, Math.PI/2);
                    canvas.renderFrame(object);

                    // Static method of EventManger to listen the event
                    EventManger.listen(canvas,document,object);
                }

            })

    }


}