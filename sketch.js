let video;

function setup() {
  createCanvas(640, 480);  
  video = createCapture(VIDEO);  
  video.size(width, height);  
  video.hide(); 
}

function draw() {
 
  let currentHour = hour();
  if (currentHour >= 6 && currentHour < 18) {
    background(255); 
  } else {
    background(30);  
  }

  video.loadPixels();  
  
  
  for (let i = 0; i < video.pixels.length; i += 4) {
    let r = video.pixels[i + 0];  
    let g = video.pixels[i + 1];  
    let b = video.pixels[i + 2];  
    
    
    let avg = (r + g + b) / 3;
    video.pixels[i + 0] = avg; 
    video.pixels[i + 1] = avg;  
    video.pixels[i + 2] = avg;  
  }

  
  video.updatePixels();

 
  let zoomFactor = dist(mouseX, mouseY, width / 2, height / 2) / 100 + 1;
  push();
  translate(width / 2, height / 2); 
  scale(zoomFactor);  
  imageMode(CENTER); 
  image(video, 0, 0); 
  pop();

  
  let currentTime = hour() + ':' + nf(minute(), 2) + ':' + nf(second(), 2); 
  let fontSize = map(width, 640, 1920, 32, 72);  
  fill(255, 0, 0);  
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  text(currentTime, width / 2, height - 40); 
}
