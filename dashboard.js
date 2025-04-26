document.addEventListener("DOMContentLoaded", function() {
    const messages = [
        "You have 3 unread messages",
        "Your Math assignment is due in 2 days",
        "New materials have been uploaded to your Python course."
    ];

    const messageContainer = document.querySelector('.notifications ul');
    messages.forEach(message => {
        const listItem = document.createElement('li');
        listItem.textContent = message;
        messageContainer.appendChild(listItem);
    });
});
