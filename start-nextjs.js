const { spawn } = require('child_process');

console.log('Starting Next.js development server...');

const nextProcess = spawn('npx', ['next', 'dev', '--port', '5000', '--hostname', '0.0.0.0'], {
  stdio: 'inherit',
  env: { ...process.env, NODE_ENV: 'development' }
});

nextProcess.on('close', (code) => {
  console.log(`Next.js server exited with code ${code}`);
});

nextProcess.on('error', (err) => {
  console.error('Failed to start Next.js server:', err);
});

// Keep the process alive
process.on('SIGINT', () => {
  console.log('Shutting down Next.js server...');
  nextProcess.kill();
  process.exit();
});