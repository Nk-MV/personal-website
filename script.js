// Function to add a new note
function addNote() {
    // Get the input element and its value
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value.trim();
    const notification = document.getElementById('notification');
    
    // Check if input is empty
    if (noteText === '') {
        // Show notification
        notification.style.display = 'block';
        
        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
        
        return; // Exit function if empty
    }
    
    // Hide notification if it was showing
    notification.style.display = 'none';
    
    // Hide the "no notes" message
    const emptyMessage = document.getElementById('emptyMessage');
    emptyMessage.style.display = 'none';
    
    // Create a new note element
    const noteItem = document.createElement('div');
    noteItem.className = 'note-item';
    
    // Get current date and time
    const now = new Date();
    const timeString = now.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    // Create note HTML structure
    noteItem.innerHTML = `
        <div class="note-time">${timeString}</div>
        <div class="note-content">${noteText}</div>
    `;
    
    // Add the note to the display area
    const notesDisplay = document.getElementById('notesDisplay');
    notesDisplay.appendChild(noteItem);
    
    // Clear the input field
    noteInput.value = '';
    
    // Optional: Focus back on input for easy note addition
    noteInput.focus();
}

// Allow Enter key to add note (Shift+Enter for new line)
document.getElementById('noteInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault(); // Prevent default new line
        addNote();
    }
});

// Contact form submission handler
function handleContactSubmit() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
        alert('Please fill in all fields!');
        return;
    }
    
    // In a real application, you would send this to a server
    alert(`Thank you, ${name}! Your message has been received.\n\nNote: This is a demo. In a real application, this would send an email.`);
    
    // Clear form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});