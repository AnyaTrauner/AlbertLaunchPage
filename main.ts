const sendButton = document.getElementById('send-btn') as HTMLButtonElement;
const messageInput = document.getElementById('message-input') as HTMLInputElement;

// Use the Send button from index.html
const phoneNumber = '+972526015125';

sendButton.addEventListener('click', () => {
    const message = encodeURIComponent(messageInput.value);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
});