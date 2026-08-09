const picz_intros = [
    "this describes",
    "we love",
    "you should feel",
    "this invokes",
    "you must see",
    "perceive",
    "photographs show",
    "do you see",
    "come see",
    "show me",
    "show us",
    "program us",
    "give us",
    "do you feel",
    "do you love",
    "do we think",
    "think of",
    "lie for",
    "destroy",
    "ignore",
    "defy",
    "hate",
    "don't forget",
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
    "hate",
    "value",
    "that man",
    "her",
];

const FullSizeList = typeof picz_arr === "undefined" ? [] : picz_arr;
const SmallSizeList = typeof picz_small_arr === "undefined" ? [] : picz_small_arr;

const LoadedImgNames = new Set();
var Images = [];
let CurrentImageIndex = 0;
let MaxIndex = -1;

const ImageElement = document.getElementById('picz-img');
const PrevButtonElement = document.getElementById('prev_button');
const NextButtonElement = document.getElementById('next_button');
const IntroElement = document.getElementById('picz-intro');
const OutroElement = document.getElementById('picz-outro');

function picz(array) {
    // String() everything up front: a bare numeric filename comes through the
    // generator as a number, and every path operation below assumes a string.
    Images = array.map(String);
    MaxIndex = Images.length;

    Shuffle(Images);
}

function Shuffle(array) {
    let remaining = array.length;

    while (remaining != 0) {
        let randomIndex = Math.floor(Math.random() * remaining);
        remaining--;

        [array[remaining], array[randomIndex]] = [
        array[randomIndex], array[remaining]];
    }
}
function FullSizeFor(src) {
    return String(src).replace(/-down(\.[^./]+)?$/, "$1");
}

function WrapIndex(index, length) {
    if (length <= 0) {
        return 0;
    }

    return ((index % length) + length) % length;
}

let ShouldCycle = false;
let PreloadIndex = 1;

function SetImage() {
    PreloadIndex = 1;
    ShouldCycle = false;

    if (!ImageElement || Images.length === 0) {
        return;
    }

    ImageElement.src = Images[CurrentImageIndex];

    if (IntroElement) {
        IntroElement.innerHTML = '"' + GetRandomElementFromList(picz_intros);
    }

    if (OutroElement) {
        OutroElement.innerHTML = GetRandomElementFromList(picz_outros) + '"';
    }

    PreloadImage(CurrentImageIndex + PreloadIndex, true);
    PreloadImage(CurrentImageIndex - 1, false);
}

function PreloadImage(index, shouldchainpreload) {
    if (Images.length === 0) {
        return;
    }

    const ImgName = Images[WrapIndex(index, Images.length)];
    if (!ImgName || LoadedImgNames.has(ImgName)) {
        return;
    }

    const PreloadImg = new Image();
    PreloadImg.src = ImgName;
    LoadedImgNames.add(ImgName);

    if (shouldchainpreload) {
        ShouldCycle = true;
        PreloadImg.onload = () => CyclePreloadIndex();
        PreloadImg.onerror = () => CyclePreloadIndex();
    }
}

function CyclePreloadIndex() {
    if (!ShouldCycle) {
        return;
    }

    PreloadIndex++;
    PreloadImage(CurrentImageIndex + PreloadIndex, true);
}

function StepImage(delta) {
    if (Images.length === 0) {
        return;
    }

    CurrentImageIndex = WrapIndex(CurrentImageIndex + delta, Images.length);
    SetImage();
}

const gallery = document.getElementById("gallery");

const PageSize = 48;
let CurrentPage = 0;
const PageCount = Math.max(1, Math.ceil(SmallSizeList.length / PageSize));

function RenderGalleryPage() {
    gallery.innerHTML = "";

    const start = CurrentPage * PageSize;
    SmallSizeList.slice(start, start + PageSize).forEach(entry => {
        const src = String(entry);
        const a = document.createElement("a");
        a.href = FullSizeFor(src);
        a.target = "_blank";

        a.appendChild(MakeThumb(src, 320));
        gallery.appendChild(a);
    });
}

function MakeThumb(src, size) {
    const canvas = document.createElement("canvas");
    canvas.className = "gallery-img";
    canvas.width = size;
    canvas.height = size;

    const loader = new Image();
    loader.onload = () => {
        const ctx = canvas.getContext("2d");
        // crop to square, like object-fit: cover
        const s = Math.min(loader.width, loader.height);
        const sx = (loader.width - s) / 2;
        const sy = (loader.height - s) / 2;
        ctx.drawImage(loader, sx, sy, s, s, 0, 0, size, size);
    };
    loader.src = String(src);

    return canvas;
}

if (gallery) {
    RenderGalleryPage();

    PrevButtonElement?.addEventListener('click', () => {
        CurrentPage = (CurrentPage - 1 + PageCount) % PageCount;
        RenderGalleryPage();
    });

    NextButtonElement?.addEventListener('click', () => {
        CurrentPage = (CurrentPage + 1) % PageCount;
        RenderGalleryPage();
    });
} else if (PrevButtonElement && NextButtonElement) {
    PrevButtonElement.addEventListener('click', () => StepImage(-1));
    NextButtonElement.addEventListener('click', () => StepImage(1));

    document.addEventListener('keydown', (event) => {
        switch (event.code) {
            case "ArrowRight":
                StepImage(1);
                break;
            case "ArrowLeft":
                StepImage(-1);
                break;
        }
    });
}

function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function GetRandomElementFromList(list) {
    return list[RandomInt(0, list.length-1)]
}

picz(FullSizeList);
SetImage();