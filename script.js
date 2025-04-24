const bgFolder = 'images/1BGs';
const bgLayer = document.getElementById('layer-1'); // layer-1 is for BGs
const bgThumbContainer = document.getElementById('bg-thumbnails');

// Update this list to match your actual image file names inside 1BGs folder
const bgImages = ['asteroids.png', 'bluegalaxy.png', 'galaxy.png', 'grey.png', 'mintgreen.png', 'orange.png', 'redswirl.png', 'turqoiseswirl.png', 'turquoise.png' ]; // <— Replace with yours

bgImages.forEach(filename => {
  const img = document.createElement('img');
  img.src = `${bgFolder}/${filename}`;
  img.alt = filename;
  img.addEventListener('click', () => {
    bgLayer.src = `${bgFolder}/${filename}`;
  });
  bgThumbContainer.appendChild(img);
});
const skinFolder = 'images/2Baseskins';
const skinLayer = document.getElementById('layer-2'); // layer-2 is for base skin
const skinThumbContainer = document.getElementById('skin-thumbnails');

// Update this with the actual filenames in your 2Baseskins folder
const skinImages = ['green.png', 'purple.png', 'red.png', 'grey.png' ]; // Replace with your file names

skinImages.forEach(filename => {
  const img = document.createElement('img');
  img.src = `${skinFolder}/${filename}`;
  img.alt = filename;
  img.addEventListener('click', () => {
    skinLayer.src = `${skinFolder}/${filename}`;
  });
  skinThumbContainer.appendChild(img);
});
const clothingFolder = 'images/3Clothing';
const clothingLayer = document.getElementById('layer-3'); // layer-3 is for clothing
const clothingThumbContainer = document.getElementById('clothing-thumbnails');

// Replace these file names with your actual clothing options
const clothingImages = ['beigetux.png', 'blacktank.png', 'blacktux.png', 'bluecoveralls.png', 'bluehoody.png', 'bluepolo.png', 'browncoveralls.png', 'cape.png', 'firehoody.png', 'greenhoody.png', 'greensweater.png', 'greytank.png', 'navytux.png', 'orangesweater.png', 'purpletux.png', 'purplevest.png', 'redsweater.png', 'redvest.png', 'stripedhoody1.png', 'stripedhoody2.png', 'whitetank.png', 'whitetee.png', 'yellowpolo.png'];

clothingImages.forEach(filename => {
  const img = document.createElement('img');
  img.src = `${clothingFolder}/${filename}`;
  img.alt = filename;
  img.addEventListener('click', () => {
    clothingLayer.src = `${clothingFolder}/${filename}`;
  });
  clothingThumbContainer.appendChild(img);
});

const eyeFolder = 'images/4Eyes';
const eyeLayer = document.getElementById('layer-4'); // layer-4 is for eyes
const eyeThumbContainer = document.getElementById('eye-thumbnails');

// Replace with your actual eye image filenames
const eyeImages = ['blue.png', 'green.png', 'orange.png', 'purple.png', 'red.png'];

eyeImages.forEach(filename => {
  const img = document.createElement('img');
  img.src = `${eyeFolder}/${filename}`;
  img.alt = filename;
  img.addEventListener('click', () => {
    eyeLayer.src = `${eyeFolder}/${filename}`;
  });
  eyeThumbContainer.appendChild(img);
});

// 5Heads
const headFolder = 'images/5Heads';
const headLayer = document.getElementById('layer-5');
const headThumbContainer = document.getElementById('head-thumbnails');
const headImages = ['greenangry.png', 'greenannoyed.png', 'greenchill.png', 'greenneutral.png', 'greensuspicious.png', 'greentears.png', 'greyangry.png', 'greyannoyed.png', 'greychill.png', 'greyneutral.png', 'greysquint.png', 'greysuspicious.png', 'greytears.png', 'purpleangry.png', 'purpleannoyed.png', 'purplechill.png', 'purpleneutral.png', 'purplequint.png', 'purplesuspicious.png', 'purpletears.png', 'redangry.png', 'redannoyed.png', 'redchill.png', 'redneutral.png', 'redsquint.png', 'redsuspicious.png', 'redtears.png']; // UPDATE THIS
headImages.forEach(filename => {
  const img = document.createElement('img');
  img.src = `${headFolder}/${filename}`;
  img.alt = filename;
  img.addEventListener('click', () => {
    headLayer.src = `${headFolder}/${filename}`;
  });
  headThumbContainer.appendChild(img);
});

// 6Headspots
const headspotsFolder = 'images/6Headspots';
const headspotsLayer = document.getElementById('layer-6');
const headspotsThumbContainer = document.getElementById('headspots-thumbnails');
const headspotsImages = ['bluespots.png', 'greenspots.png', 'yellowspots.png']; // UPDATE THIS
headspotsImages.forEach(filename => {
  const img = document.createElement('img');
  img.src = `${headspotsFolder}/${filename}`;
  img.alt = filename;
  img.addEventListener('click', () => {
    headspotsLayer.src = `${headspotsFolder}/${filename}`;
  });
  headspotsThumbContainer.appendChild(img);
});

// 7Eyewear
const eyewearFolder = 'images/7Eyewear';
const eyewearLayer = document.getElementById('layer-7');
const eyewearThumbContainer = document.getElementById('eyewear-thumbnails');
const eyewearImages = ['3dglasses.png', 'goggles.png']; // UPDATE THIS
eyewearImages.forEach(filename => {
  const img = document.createElement('img');
  img.src = `${eyewearFolder}/${filename}`;
  img.alt = filename;
  img.addEventListener('click', () => {
    eyewearLayer.src = `${eyewearFolder}/${filename}`;
  });
  eyewearThumbContainer.appendChild(img);
});

// 8Headwear
const headwearFolder = 'images/8Headwear';
const headwearLayer = document.getElementById('layer-8');
const headwearThumbContainer = document.getElementById('headwear-thumbnails');
const headwearImages = ['blackballcap.png', 'bwballcap.png', 'cowboyhat.png', 'greenbowler.png', 'redbowler.png', 'whitebowler.png']; // UPDATE THIS
headwearImages.forEach(filename => {
  const img = document.createElement('img');
  img.src = `${headwearFolder}/${filename}`;
  img.alt = filename;
  img.addEventListener('click', () => {
    headwearLayer.src = `${headwearFolder}/${filename}`;
  });
  headwearThumbContainer.appendChild(img);
});

// 9Mouths
const mouthFolder = 'images/9Mouths';
const mouthLayer = document.getElementById('layer-9');
const mouthThumbContainer = document.getElementById('mouth-thumbnails');
const mouthImages = ['smile.png', 'bubblegum.png', 'cheerful.png', 'cigar.png', 'cigarette.png', 'confused.png', 'grumpy.png', 'neutral.png', 'surprised.png']; // UPDATE THIS
mouthImages.forEach(filename => {
  const img = document.createElement('img');
  img.src = `${mouthFolder}/${filename}`;
  img.alt = filename;
  img.addEventListener('click', () => {
    mouthLayer.src = `${mouthFolder}/${filename}`;
  });
  mouthThumbContainer.appendChild(img);
});

function downloadAlien() {
    const canvas = document.createElement('canvas');
    canvas.width = 500;
    canvas.height = 500;
    const ctx = canvas.getContext('2d');
  
    // Get all 10 image layers
    const layers = [];
    for (let i = 1; i <= 10; i++) {
      const img = document.getElementById(`layer-${i}`);
      if (img && img.src) {
        layers.push(img.src);
      }
    }
  
    let imagesLoaded = 0;
    const tempImages = [];
  
    layers.forEach((src, index) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = src;
      img.onload = () => {
        tempImages[index] = img;
        imagesLoaded++;
        if (imagesLoaded === layers.length) {
          // All images loaded, draw them in order
          tempImages.forEach(imgLayer => {
            ctx.drawImage(imgLayer, 0, 0, canvas.width, canvas.height);
          });
  
          // Create download link
          const link = document.createElement('a');
          link.download = 'my-alien.png';
          link.href = canvas.toDataURL('image/png');
          link.click();
        }
      };
      img.onerror = () => {
        console.error('Failed to load image:', src);
      };
    });
  }
  function randomizeAlien() {
    const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
    // Assign random values from each trait set
    bgLayer.src = `${bgFolder}/${randomFrom(bgImages)}`;
    skinLayer.src = `${skinFolder}/${randomFrom(skinImages)}`;
    clothingLayer.src = `${clothingFolder}/${randomFrom(clothingImages)}`;
    eyeLayer.src = `${eyeFolder}/${randomFrom(eyeImages)}`;
    headLayer.src = `${headFolder}/${randomFrom(headImages)}`;
    headspotsLayer.src = `${headspotsFolder}/${randomFrom(headspotsImages)}`;
    eyewearLayer.src = `${eyewearFolder}/${randomFrom(eyewearImages)}`;
    headwearLayer.src = `${headwearFolder}/${randomFrom(headwearImages)}`;
    mouthLayer.src = `${mouthFolder}/${randomFrom(mouthImages)}`;
    holdingLayer.src = `${holdingFolder}/${randomFrom(holdingImages)}`;
  }
