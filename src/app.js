function initializePipelineDemo() {
  const statusMessage = document.getElementById('status-msg');
  const actionButton = document.getElementById('action-btn');

  statusMessage.textContent = 'Application loaded successfully. Ready to run task.';
  actionButton.addEventListener('click', () => {
    statusMessage.textContent = 'System is operating nominally. SCM pipeline passed!';
  });
}

if (typeof window !== 'undefined') {
  window.addEventListener('load', initializePipelineDemo);
}

if (typeof module !== 'undefined') {
  module.exports = { initializePipelineDemo };
}
