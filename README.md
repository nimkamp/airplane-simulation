Basic documentation that explains how to run the application and describes the logic behind the trajectory calculations

To run the application open index.html with your browser (Firefox or Google Chrome).

The trajectory calculations are based on updating the airplanes position over time according to its speed and yaw angle.

The conversion factor approximates how far the airplane should move on the canvas per second, given a speed in knots (1 knot arbitrarily represent 0.5 pixels per second).

The yaw angle, which represents the planes direction in degrees, is converted to radias because the JavaScript Math trigonometric functions expected radians as inputs.

The plane is wrapped around the canvas if it leaves the bounds.
