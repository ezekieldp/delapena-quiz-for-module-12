const statusMessage = document.getElementById('status-msg');
const actionButton = document.getElementById('action-btn');

function updateStatus() {
  statusMessage.textContent = 'System is operating nominally. SCM pipeline passed!';
}

actionButton.addEventListener('click', updateStatus);
