What I Learned:
Dynamic Background Based on Time:

Used hour() to determine the current time and change the background color based on whether it’s day (6 AM to 6 PM) or night (6 PM to 6 AM).
Grayscale Video Processing:

Applied pixel manipulation to convert the live video feed to grayscale by averaging the red, green, and blue channels.
Zoom Effect:

Calculated the zoom factor based on the mouse’s distance from the center of the canvas using dist().
Used push(), translate(), and scale() to apply the zoom effect and render the video at the center of the canvas.
Dynamic Text:

Displayed the current time in a format HH:MM:SS, with the text size dynamically adjusting based on the canvas width using map().
How the Code Works:
setup() Function:
Creates a video capture and hides the default video element for custom display.
draw() Function:
Changes the background color based on the current time.
Converts the video feed to grayscale by averaging the RGB values.
Zooms in on the video feed based on mouse position using dist() to calculate the zoom factor and scale() to apply it.
Displays the current time in red text, resizing based on the canvas width.
Problem Solving:
Issue:
The grayscale effect caused the image to lose color details, and the zoom effect was sometimes hard to control.

Solution:
Used pixel manipulation to adjust the grayscale calculation and ensured the zoom factor was smooth and based on the mouse position, making it more intuitive.

