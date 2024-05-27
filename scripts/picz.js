 
//? // ---------------------
    // global scope (scary)
    var Images = [];
    let CurrentImageIndex = 0;
    let MaxIndex = -1;
    let LoadedIndex = -1;
//?
    const ImageElement = document.getElementById('current_image');
    const PrevButtonElement = document.getElementById('prev_button');
    const NextButtonElement = document.getElementById('next_button');
//? // ---------------------
    // events
    PrevButtonElement.addEventListener('click', () => {
        const isFirstElement = CurrentImageIndex === 0;
        CurrentImageIndex = isFirstElement ? Images.length - 1 : CurrentImageIndex - 1;
        SetImage();
    });

    NextButtonElement.addEventListener('click', () => {
        const isLastElement = CurrentImageIndex === Images.length - 1;
        CurrentImageIndex = isLastElement ? 0 : CurrentImageIndex + 1;
        SetImage();
    });  
//? // ---------------------
    // methods
    function picz(array) {
        Images = array;
        MaxIndex = Images.length;
        LoadedIndex = 0;

        Shuffle(Images);

        Promise.all(Images.map(Preload)).then(() => {
            SetImage();
        }).catch((error) => {/** BLEH :P */});
    }

    function Shuffle(array) {
        let CurrentImageIndex = array.length;

        // While there remain elements to Shuffle...
        while (CurrentImageIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * CurrentImageIndex);
            CurrentImageIndex--;

            // And swap it with the current element.
            [array[CurrentImageIndex], array[randomIndex]] = [
            array[randomIndex], array[CurrentImageIndex]];
        }
    }

    function Preload(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(url);
            img.onerror = reject;
            img.src = url;
        });
    }   

    function SetImage() {
        ImageElement.src = Images[CurrentImageIndex];
    }
//?