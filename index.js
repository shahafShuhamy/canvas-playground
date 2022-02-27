addEventListener('load', () => {
    // const canvas = document.getElementById("canvas");
    // const ctx = canvas.getContext("2d");

    const width = window.innerWidth;
    const height = window.innerHeight;

    let stage = new Konva.Stage({
      container: 'canvas',
      width: width,
      height: height,
    });

    let layer = new Konva.Layer();

    const circle = new Konva.Circle({
      x: stage.width() / 2,
      y: stage.height() / 2,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4,
      draggable: true
    });

    circle.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
      });

    circle.on('mouseout', function () {
        document.body.style.cursor = 'default';
      });


    // add the shape to the layer
    layer.add(circle);

    // add the layer to the stage
    stage.add(layer);
});