    // ------------------------------------------
    // in
    function picz(array) {
        images = array
        shuffle(images)
        preload(images)
        showImage();
    }

    // ------------------------------------------
    // shuffle
    function shuffle(array) {
        let currentIndex = array.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
    }

    // ------------------------------------------
    // preload
    function preload(array) {
        for (let i = 0; i < images.length; i++) {
            const img = new Image();
            img.src = images[i];
        }
    }

    // ------------------------------------------
    // display image logic
    var images = [];
    let currentIndex = 0;

    const imageElement = document.getElementById('myImage');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    function showImage() {
        imageElement.src = images[currentIndex];
    }

    prevButton.addEventListener('click', () => {
        const isFirstElement = currentIndex === 0;
        currentIndex = isFirstElement ? images.length - 1 : currentIndex - 1;
        showImage();

        console.log(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        const isLastElement = currentIndex === images.length - 1;
        currentIndex = isLastElement ? 0 : currentIndex + 1;
        showImage();

        console.log(currentIndex);
    });

    // ------------------------------------------
    // jqery (?) zoom
    // pastey paste paste ( ͡° ͜ʖ ͡°)
    // $(".img_producto_container")
    // // tile mouse actions
    // .on("mouseover", function() {
    //     $(this)
    //     .children(".img_producto")
    //     .css({ transform: "scale(" + $(this).attr("data-scale") + ")" });
    // })
    // .on("mouseout", function() {
    //     $(this)
    //     .children(".img_producto")
    //     .css({ transform: "scale(1)" });
    // })
    // .on("mousemove", function(e) {
    //     $(this)
    //     .children(".img_producto")
    //     .css({
    //         "transform-origin":
    //         ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
    //         "% " +
    //         ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
    //         "%"
    //     });
    // });