// Select all image cards
const cards = document.querySelectorAll('.card');

// Create modal elements dynamically
const modal = document.createElement('div');
modal.classList.add('modal');

const modalImg = document.createElement('img');
modalImg.classList.add('draggable'); 
modalImg.setAttribute('tabindex', '0'); // Make modal image focusable
modal.appendChild(modalImg);

const closeModal = document.createElement('span');
closeModal.innerHTML = "&times;"; // Close button
closeModal.classList.add('close');
modal.appendChild(closeModal);

// Append modal to the body
document.body.appendChild(modal);

// Function to show modal
const showModal = (imgSrc) => {
    modalImg.src = imgSrc;
    modal.classList.add('show');
    modalImg.style.position = 'absolute'; // Ensure it's movable
    modalImg.style.left = '50%';
    modalImg.style.top = '50%';
    modalImg.style.transform = 'translate(-50%, -50%)'; // Center the image
    modalImg.focus(); // Auto-focus on the modal image
};

// Add event listeners to
