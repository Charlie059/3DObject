/**
 * EventManger control all event of mouse click
 * which includes: click leftMouseDown and drag then release
 */
class EventManger {
    static leftMouseDown = false;
    static x = 0;
    static y = 0;
    static canvas;
    static object;

    static listen(canvas, document, object){
        EventManger.canvas = canvas;
        EventManger.object = object;
        // Init EventListener
        EventManger.canvas.canvas.addEventListener('mousedown', EventManger.initMove);
        document.addEventListener('mousemove', EventManger.move);
        document.addEventListener('mouseup', EventManger.stopMove);
        document.addEventListener("wheel", EventManger.zoomIn);
    }
    // When user move the pointer, init the x and y
    static initMove(event) {
        EventManger.leftMouseDown = true;
        EventManger.update(event);
    }

    // Update the postion
    static update(event) {
        EventManger.x = event.clientX;
        EventManger.y = event.clientY;
    }

    // When user drag the mouse, rotate the object and update frame
    static move(event) {
        if (EventManger.leftMouseDown) {
            const theta = (event.clientX - EventManger.x) * Math.PI / 360;
            const phi = (event.clientY - EventManger.y) * Math.PI / 180;

            // rotate the object
            EventManger.object.rotate(theta, phi);

            // update the curr x and y
            EventManger.update(event);

            // update the frame
            EventManger.canvas.renderFrame(EventManger.object, EventManger.canvas.context, EventManger.canvas.middleWidth, EventManger.canvas.middleHeight);
        }
    }

    // When user wheel to zoom in
    static zoomIn(event) {
        EventManger.object.zoom(event.deltaY);
        EventManger.canvas.renderFrame(EventManger.object, EventManger.canvas.context, EventManger.canvas.middleWidth, EventManger.canvas.middleHeight);
    }

    // Stop update
    static stopMove(){
        EventManger.leftMouseDown = false;
    }
}
