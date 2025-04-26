const picz_arr = [
    "photographs/2024-07-09-0001.jpg",
    "photographs/2024-07-09-0002.jpg",
    "photographs/2024-07-09-0003.jpg",
    "photographs/2024-07-09-0004.jpg",
    "photographs/2024-07-09-0005.jpg",
    "photographs/2024-07-09-0007.jpg",
    "photographs/2024-07-09-0013.jpg",
    "photographs/2024-07-10-0004.jpg",
    "photographs/2024-07-10-0006.jpg",
    "photographs/2024-07-10-0011.jpg",
    "photographs/2024-07-10-0013.jpg",
    "photographs/2024-07-11-0003.jpg",
    "photographs/2024-07-26-0008.jpg",
    "photographs/2024-07-26-0009.jpg",
    "photographs/2024-07-27-0001.jpg",
    "photographs/2024-07-27-0002.jpg",
    "photographs/2024-07-27-0004.jpg",
    "photographs/2024-07-27-0005.jpg",
    "photographs/2024-07-27-0011.jpg",
    "photographs/2024-07-27-0013-3.jpg",
    "photographs/2024-07-29-0001.jpg",
    "photographs/2024-07-29-0003.jpg",
    "photographs/2024-08-01-0003.jpg",
    "photographs/2024-08-05-0001.jpg",
    "photographs/2024-08-05-0006.jpg",
    "photographs/2024-08-06-0001.jpg",
    "photographs/2024-08-06-0006.jpg",
    "photographs/2024-08-06-0009.jpg",
    "photographs/2024-08-06-0010.jpg",
    "photographs/2024-08-06-0011.jpg",
    "photographs/2024-08-08-0003.jpg",
    "photographs/2024-08-08-0012.jpg",
    "photographs/2024-09-06-0005.jpg",
    "photographs/2024-09-06-0007.jpg",
    "photographs/2024-09-06-0012.jpg",
    "photographs/2024-09-06-0017-2.jpg",
    "photographs/2024-09-07-0001.jpg",
    "photographs/2024-09-07-0002.jpg",
    "photographs/2024-09-07-0003.jpg",
    "photographs/2024-09-07-0005.jpg",
    "photographs/2024-09-07-0007.jpg",
    "photographs/2024-09-07-0009.jpg",
    "photographs/2024-09-07-0013.jpg",
    "photographs/2024-09-07-0014.jpg",
    "photographs/2024-09-07-0019.jpg",
    "photographs/2024-09-07-0021.jpg",
    "photographs/2024-09-07-0027.jpg",
    "photographs/2024-09-07-0030.jpg",
    "photographs/2024-09-07-0035.jpg",
    "photographs/2024-09-08-0003.jpg",
    "photographs/2024-09-08-0009.jpg",
    "photographs/2024-09-08-0016.jpg",
    "photographs/2024-09-08-0018.jpg",
    "photographs/2024-09-08-0021.jpg",
    "photographs/2024-09-08-0022.jpg",
    "photographs/2024-09-08-0023.jpg",
    "photographs/2024-09-08-0024.jpg",
    "photographs/2024-09-08-0027.jpg",
    "photographs/2024-09-08-0041.jpg",
    "photographs/2024-09-08-0043.jpg",
    "photographs/2024-09-10-0007.jpg",
    "photographs/2024-09-11-0004.jpg",
    "photographs/2024-09-15-0001.jpg",
    "photographs/2024-09-15-0002-2.jpg",
    "photographs/2024-09-20-0001.jpg",
    "photographs/2024-09-20-0002.jpg",
    "photographs/2024-09-20-0003.jpg",
    "photographs/2024-09-28-0001.jpg",
    "photographs/2024-09-29-0008.jpg",
    "photographs/2024-10-11-0001.jpg",
    "photographs/2024-10-11-0005.jpg",
    "photographs/2024-10-11-0008.jpg",
    "photographs/2024-10-11-0010.jpg",
    "photographs/2024-10-11-0015.jpg",
    "photographs/2024-10-12-0001.jpg",
    "photographs/2024-10-12-0002.jpg",
    "photographs/2024-10-12-0006.jpg",
    "photographs/2024-10-12-0008.jpg",
    "photographs/2024-10-12-0009.jpg",
    "photographs/2024-10-12-0011.jpg",
    "photographs/2024-10-12-0012.jpg",
    "photographs/2024-10-12-0014.jpg",
    "photographs/2024-10-12-0027.jpg",
    "photographs/2024-10-12-0032.jpg",
    "photographs/2024-10-13-0028.jpg",
    "photographs/2024-10-14-0011.jpg",
    "photographs/2024-10-14-0012.jpg",
    "photographs/2024-10-17-0002.jpg",
    "photographs/2024-10-17-0010.jpg",
    "photographs/2024-10-18-0001.jpg",
    "photographs/2024-10-25-0003.jpg",
    "photographs/2024-10-25-0010.jpg",
    "photographs/2024-10-25-0012.jpg",
    "photographs/2024-10-25-0015.jpg",
    "photographs/2024-10-25-0021.jpg",
    "photographs/2024-10-30-0001-2.jpg",
    "photographs/2024-10-30-0002-3.jpg",
    "photographs/2024-10-30-0003.jpg",
    "photographs/2024-11-01-0002.jpg",
    "photographs/2024-11-01-0003.jpg",
    "photographs/2024-11-01-0005.jpg",
    "photographs/2024-11-01-0013.jpg",
    "photographs/2024-11-01-0016.jpg",
    "photographs/2024-11-01-0017.jpg",
    "photographs/2024-11-02-0009.jpg",
    "photographs/2024-11-02-0011.jpg",
    "photographs/2024-11-02-0012.jpg",
    "photographs/2024-11-02-0024.jpg",
    "photographs/2024-11-02-0026.jpg",
    "photographs/2024-11-02-0030.jpg",
    "photographs/2024-11-03-0004.jpg",
    "photographs/2024-11-03-0007.jpg",
    "photographs/2024-11-03-0015.jpg",
    "photographs/2024-11-09-0002-3.jpg",
    "photographs/2024-11-09-0003-2.jpg",
    "photographs/2024-11-09-0005.jpg",
    "photographs/2024-11-09-0006.jpg",
    "photographs/2024-11-09-0012.jpg",
    "photographs/2024-11-09-0015.jpg",
    "photographs/2024-11-10-0002.jpg",
    "photographs/2024-11-20-0003.jpg",
    "photographs/2024-11-20-0007.jpg",
    "photographs/2024-11-22-0001.jpg",
    "photographs/2024-11-22-0008.jpg",
    "photographs/2024-11-22-0012.jpg",
    "photographs/2024-11-22-0016.jpg",
    "photographs/2024-11-22-0018.jpg",
    "photographs/2024-11-23-0001.jpg",
    "photographs/2024-11-23-0007.jpg",
    "photographs/2024-11-23-0013.jpg",
    "photographs/2024-11-23-0018-2.jpg",
    "photographs/2024-11-23-0032.jpg",
    "photographs/2024-11-23-0035.jpg",
    "photographs/2024-11-23-0037-2.jpg",
    "photographs/2024-11-24-0002.jpg",
    "photographs/2024-11-24-0011.jpg",
    "photographs/2024-11-24-0013.jpg",
    "photographs/2024-11-24-0029.jpg",
    "photographs/2024-12-01-0001.jpg",
    "photographs/2024-12-01-0002.jpg",
    "photographs/2024-12-01-0005.jpg",
    "photographs/2024-12-01-0014.jpg",
    "photographs/2024-12-01-0015.jpg",
    "photographs/2024-12-01-0016.jpg",
    "photographs/2024-12-01-0017.jpg",
    "photographs/2024-12-01-0019.jpg",
    "photographs/2024-12-01-0020.jpg",
    "photographs/2024-12-01-0022.jpg",
    "photographs/2024-12-01-0023.jpg",
    "photographs/2024-12-01-0029.jpg",
    "photographs/2024-12-01-0030.jpg",
    "photographs/2024-12-02-0016.jpg",
    "photographs/2024-12-03-0004.jpg",
    "photographs/2024-12-07-0003.jpg",
    "photographs/2024-12-19-0005.jpg",
    "photographs/2024-12-19-0009-2.jpg",
    "photographs/2024-12-19-0010.jpg",
    "photographs/2024-12-19-0012.jpg",
    "photographs/2024-12-19-0017.jpg",
    "photographs/2024-12-19-0019.jpg",
    "photographs/2024-12-20-0004.jpg",
    "photographs/2024-12-20-0007.jpg",
    "photographs/2024-12-20-0013.jpg",
    "photographs/2024-12-20-0014.jpg",
    "photographs/2025-01-02-0003.jpg",
    "photographs/2025-01-02-0007.jpg",
    "photographs/2025-01-02-0012.jpg",
    "photographs/2025-01-05-0003.jpg",
    "photographs/2025-01-05-0005.jpg",
    "photographs/2025-01-08-0003.jpg",
    "photographs/2025-01-08-0005.jpg",
    "photographs/2025-01-08-0011.jpg",
    "photographs/2025-01-08-0012.jpg",
    "photographs/2025-01-08-0016.jpg",
    "photographs/2025-01-08-0018.jpg",
    "photographs/2025-01-09-0001.jpg",
    "photographs/2025-01-09-0004.jpg",
    "photographs/2025-01-09-0005.jpg",
    "photographs/2025-01-09-0006.jpg",
    "photographs/2025-01-09-0012.jpg",
    "photographs/2025-01-11-0007.jpg",
    "photographs/2025-01-11-0008.jpg",
    "photographs/2025-01-11-0009.jpg",
    "photographs/2025-01-11-0013.jpg",
    "photographs/2025-01-11-0014.jpg",
    "photographs/2025-01-11-0019.jpg",
    "photographs/2025-01-16-0003.jpg",
    "photographs/2025-01-16-0004.jpg",
    "photographs/2025-01-23-0005.jpg",
    "photographs/2025-01-23-0006.jpg",
    "photographs/2025-01-24-0002.jpg",
    "photographs/2025-01-24-0004.jpg",
    "photographs/2025-01-24-0005-2.jpg",
    "photographs/2025-01-24-0006.jpg",
    "photographs/2025-01-25-0004.jpg",
    "photographs/2025-02-01-0005.jpg",
    "photographs/2025-02-01-0007.jpg",
    "photographs/2025-02-01-0008.jpg",
    "photographs/2025-02-01-0013.jpg",
    "photographs/2025-02-01-0014.jpg",
    "photographs/2025-02-01-0016.jpg",
    "photographs/2025-02-01-0017.jpg",
    "photographs/2025-02-01-0018.jpg",
    "photographs/2025-02-01-0020.jpg",
    "photographs/2025-02-01-0022.jpg",
    "photographs/2025-02-01-0027.jpg",
    "photographs/2025-02-01-0028.jpg",
    "photographs/2025-02-02-0004.jpg",
    "photographs/2025-02-02-0006.jpg",
    "photographs/2025-02-02-0010.jpg",
    "photographs/2025-02-02-0011.jpg",
    "photographs/2025-02-02-0013.jpg",
    "photographs/2025-02-02-0018.jpg",
    "photographs/2025-02-02-0020.jpg",
    "photographs/2025-02-05-0003.jpg",
    "photographs/2025-02-05-0006.jpg",
    "photographs/2025-02-08-0001-2.jpg",
    "photographs/2025-02-08-0002.jpg",
    "photographs/2025-03-11-0001.jpg",
    "photographs/2025-03-11-0002.jpg",
    "photographs/2025-03-11-0005.jpg",
    "photographs/2025-03-11-0009.jpg",
    "photographs/2025-03-11-0010.jpg",
    "photographs/2025-03-11-0012.jpg",
    "photographs/2025-03-11-0014.jpg",
    "photographs/2025-03-11-0018.jpg",
    "photographs/2025-03-11-0023.jpg",
    "photographs/2025-03-11-0024.jpg",
    "photographs/2025-03-11-0034.jpg",
    "photographs/2025-03-11-0035.jpg",
    "photographs/2025-03-11-0036.jpg",
    "photographs/2025-03-12-0001.jpg",
    "photographs/2025-03-12-0002.jpg",
    "photographs/2025-03-12-0003.jpg",
    "photographs/2025-03-12-0005.jpg",
    "photographs/2025-03-12-0006.jpg",
    "photographs/2025-03-12-0008.jpg",
    "photographs/2025-03-12-0011.jpg",
    "photographs/2025-03-12-0012.jpg",
    "photographs/2025-03-12-0013.jpg",
    "photographs/2025-03-12-0022.jpg",
    "photographs/2025-03-14-0006.jpg",
    "photographs/2025-04-08-0001.jpg",
    "photographs/2025-04-08-0002.jpg",
    "photographs/2025-04-08-0004.jpg",
    "photographs/2025-04-08-0005.jpg",
    "photographs/2025-04-08-0007.jpg",
    "photographs/2025-04-08-0009.jpg",
    "photographs/2025-04-08-0010.jpg",
    "photographs/2025-04-08-0013.jpg",
    "photographs/2025-04-08-0016.jpg",
    "photographs/2025-04-08-0020.jpg",
    "photographs/2025-04-09-0001.jpg",
    "photographs/2025-04-09-0002.jpg",
    "photographs/2025-04-10-0001-2.jpg",
    "photographs/2025-04-10-0003.jpg",
    "photographs/2025-04-10-0004.jpg",
    "photographs/2025-04-10-0006.jpg",
    "photographs/2025-04-10-0009.jpg",
    "photographs/2025-04-10-0012.jpg",
    "photographs/2025-04-10-0014.jpg",
    "photographs/2025-04-11-0001.jpg",
    "photographs/2025-04-11-0002.jpg",
    "photographs/2025-04-11-0006.jpg",
    "photographs/2025-04-13-0001.jpg",
    "photographs/2025-04-13-0003.jpg",
    "photographs/2025-04-13-0007.jpg",
    "photographs/2025-04-13-0009.jpg",
    "photographs/2025-04-15-0003.jpg",
    "photographs/2025-04-15-0007.jpg",
    "photographs/Uploaded_10_CNV00011.JPG",
    "photographs/Uploaded_10_Photo06_31A.jpg",
    "photographs/Uploaded_11_CNV00010.JPG",
    "photographs/Uploaded_11_CNV00021.JPG",
    "photographs/Uploaded_11_Photo16_21A.jpg",
    "photographs/Uploaded_12_Photo07_30A.jpg",
    "photographs/Uploaded_13_Photo15_22A.jpg",
    "photographs/Uploaded_14_Photo09_28A.jpg",
    "photographs/Uploaded_15_CNV00015.JPG",
    "photographs/Uploaded_17_Photo13_24A.jpg",
    "photographs/Uploaded_18_CNV00018.JPG",
    "photographs/Uploaded_18_Photo03_34A.jpg",
    "photographs/Uploaded_21_Photo34_3A.jpg",
    "photographs/Uploaded_23_Photo24_13A.jpg",
    "photographs/Uploaded_24_CNV00034.JPG",
    "photographs/Uploaded_25_CNV00023.JPG",
    "photographs/Uploaded_25_Photo29_8A.jpg",
    "photographs/Uploaded_26_CNV00033.JPG",
    "photographs/Uploaded_26_Photo22_15A.jpg",
    "photographs/Uploaded_27_CNV00029.JPG",
    "photographs/Uploaded_27_Photo32_5A.jpg",
    "photographs/Uploaded_28_Photo26_11A.jpg",
    "photographs/Uploaded_29_CNV00028.JPG",
    "photographs/Uploaded_29_Photo30_7A.jpg",
    "photographs/Uploaded_30_CNV00027.JPG",
    "photographs/Uploaded_30_Photo25_12A.jpg",
    "photographs/Uploaded_31_Photo21_16A.jpg",
    "photographs/Uploaded_32_CNV00033.JPG",
    "photographs/Uploaded_32_Photo27_10A.jpg",
    "photographs/Uploaded_33_Photo36_1A.jpg",
    "photographs/Uploaded_35_Photo31_6A.jpg",
    "photographs/Uploaded_36_Photo33_4A.jpg",
    "photographs/Uploaded_37_CNV00037.JPG",
    "photographs/Uploaded_3_Photo12_25A.jpg",
    "photographs/Uploaded_6_CNV00016.JPG",
    "photographs/Uploaded_7_CNV00007.JPG",
    "photographs/Uploaded_9_CNV00009.JPG",
    "photographs/img0010.jpg",
    "photographs/scan0018.jpg",
    "photographs/scan0020.jpg",
    "photographs/scan0023.jpg",
    "photographs/scan0033.jpg"
];

const picz_intros = [
    "this describes",
    "we love",
    "you should feel",
    "this invokes",
    "i see",
    "you must see",
    "perceive",
    "photographs show",
    "do you see",
    "come see",
    "show me",
    "show us",
    "program us",
    "give us",
    "do i feel",
    "do you feel",
    "do you love",
    "do we think",
];

const picz_outros = [
    "large feelings",
    "eachother",
    "the dread",
    "small feelings",
    "yourself",
    "things you care for",
    "dreams",
    "the hurt",
    "saddness",
    "waste",
    "numbness",
    "sorrow",
    "joy",
    "the information",
];

var Images = [];
let CurrentImageIndex = 0;
let MaxIndex = -1;
const ImageElement = document.getElementById('picz-img');
const PrevButtonElement = document.getElementById('prev_button');
const NextButtonElement = document.getElementById('next_button');
const IntroElement = document.getElementById('picz-intro');
const OutroElement = document.getElementById('picz-outro');

function picz(array) {
    Images = array;
    MaxIndex = Images.length;

    Shuffle(Images);
}

function Shuffle(array) {
    let CurrentImageIndex = array.length;

    while (CurrentImageIndex != 0) {
        let randomIndex = Math.floor(Math.random() * CurrentImageIndex);
        CurrentImageIndex--;

        [array[CurrentImageIndex], array[randomIndex]] = [
        array[randomIndex], array[CurrentImageIndex]];
    }
}

let PreloadIndex = 1;

function SetImage() {
    PreloadIndex = 1;

    ImageElement.src = Images[CurrentImageIndex];
    IntroElement.innerHTML = '"' + GetRandomElementFromList(picz_intros);
    OutroElement.innerHTML = GetRandomElementFromList(picz_outros) + '"';

    PreloadImage(CurrentImageIndex + PreloadIndex);
    PreloadImage(Images[CurrentImageIndex - 1]);
}

function PreloadImage(index) {
    const PreloadImg = new Image();
    PreloadImg.src = Images[index];
    PreloadImg.onload = () => CyclePreloadIndex();
}

function CyclePreloadIndex() {
    PreloadIndex++;
    PreloadImage(CurrentImageIndex + PreloadIndex);
}

function NextImage() {
    const isFirstElement = CurrentImageIndex === 0;
    CurrentImageIndex = isFirstElement ? Images.length - 1 : CurrentImageIndex - 1;
}

function PrevImage() {
    const isLastElement = CurrentImageIndex === Images.length - 1;
    CurrentImageIndex = isLastElement ? 0 : CurrentImageIndex + 1;
}

PrevButtonElement.addEventListener('click', () => {
    NextImage();
    SetImage();
});

NextButtonElement.addEventListener('click', () => {
    PrevImage();
    SetImage();
});  

document.addEventListener('keydown', (event) => {
    switch (event.code) {
        case "ArrowRight":
            const isLastElement = CurrentImageIndex === Images.length - 1;
            CurrentImageIndex = isLastElement ? 0 : CurrentImageIndex + 1;
            SetImage();
            break;
        case "ArrowLeft":
            const isFirstElement = CurrentImageIndex === 0;
            CurrentImageIndex = isFirstElement ? Images.length - 1 : CurrentImageIndex - 1;
            SetImage();
            break;
    }
});

function RandomInt(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function GetRandomElementFromList(list) {
    return list[RandomInt(0, list.length-1)]
}

picz(picz_arr);
SetImage();