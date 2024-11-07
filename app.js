const canvas = document.getElementById('trajectoryCanvas');
const ctx = canvas.getContext('2d');

// Initial airplane state
let x = canvas.width / 2;
let y = canvas.height / 2;
let yaw = 0; // in degrees
let speed = 50; // in knots

// Convert knots to pixels per second (1 knot = ~0.5 pixels/second for this simulation)
const knotsToPixelsPerSecond = 0.5;

// Update airplane state
function update() {
  // Get user input
  yaw = parseFloat(document.getElementById('yaw').value) - 90;
  speed = parseFloat(document.getElementById('speed').value);

  // Convert yaw angle to radians
  const yawRadians = yaw * (Math.PI / 180);

  // Calculate new position
  x += Math.cos(yawRadians) * speed * knotsToPixelsPerSecond * 0.1; // 0.1 factor for smoother animation
  y += Math.sin(yawRadians) * speed * knotsToPixelsPerSecond * 0.1;

  // Handle edge of canvas: wrap around
  if (x > canvas.width) x = 0;
  if (x < 0) x = canvas.width;
  if (y > canvas.height) y = 0;
  if (y < 0) y = canvas.height;
}

// Draw airplane trajectory
function draw() {
  // Draw a small circle at the current position
  ctx.beginPath();
  ctx.arc(x, y, 2, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();
}

// Main loop
function mainLoop() {
  update();
  draw();
  requestAnimationFrame(mainLoop);
}

// Start the simulation
mainLoop();
