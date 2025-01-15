let groceryLists = []; // Array to store all lists
let currentList = []; // Current list for creating or editing

// Check password and login
function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = "12345"; // Simple password for demo purposes

    if (password === correctPassword) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('welcome-message').style.display = 'block';
    } else {
        alert('Incorrect password!');
    }
}

// Show dashboard
function showDashboard() {
    document.getElementById('welcome-message').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
}

// Create new grocery list
function createList() {
    document.getElementById('create-list-form').style.display = 'block';
    document.getElementById('edit-list-form').style.display = 'none';
    currentList = []; // Reset the current list
    document.getElementById('new-list-items').innerHTML = ''; // Clear previous items
}

// Edit existing grocery list
function editList() {
    document.getElementById('edit-list-form').style.display = 'block';
    document.getElementById('create-list-form').style.display = 'none';
    
    // Populate the list options
    const selectList = document.getElementById('select-list');
    selectList.innerHTML = '<option value="">Select List to Edit</option>'; // Reset options
    groceryLists.forEach((list, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `List ${index + 1}`;
        selectList.appendChild(option);
    });
}

// Add item to the new grocery list
document.getElementById('new-list-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const itemName = document.getElementById('item-name').value;
    const itemQuantity = document.getElementById('item-quantity').value;
    const item = { name: itemName, quantity: itemQuantity };

    currentList.push(item);
    document.getElementById('item-name').value = '';
    document.getElementById('item-quantity').value = '';
    updateNewListItems();
});

// Update the displayed list items
function updateNewListItems() {
    const listContainer = document.getElementById('new-list-items');
    listContainer.innerHTML = ''; // Clear the list before updating

    currentList.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - ${item.quantity}`;
        listContainer.appendChild(itemDiv);
    });
}

// Save the new list
function saveList() {
    if (currentList.length > 0) {
        groceryLists.push(currentList);
        alert('New list saved!');
        document.getElementById('create-list-form').style.display = 'none';
    } else {
        alert('Please add items to the list before saving!');
    }
}

// Load the selected list to edit
function loadListToEdit() {
    const selectedListIndex = document.getElementById('select-list').value;
    if (selectedListIndex === '') return;

    const selectedList = groceryLists[selectedListIndex];
    const listContainer = document.getElementById('edit-list-items');
    listContainer.innerHTML = ''; // Clear previous items

    selectedList.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - ${item.quantity}`;
        listContainer.appendChild(itemDiv);
    });
}

// Save changes to the edited list
function saveEditedList() {
    const selectedListIndex = document.getElementById('select-list').value;
    if (selectedListIndex === '') return;

    groceryLists[selectedListIndex] = currentList; // Save the edited list back to the array
    alert('List saved!');
    document.getElementById('edit-list-form').style.display = 'none';
}

// Download list as image
function downloadList() {
    // Select the list items you want to capture as an image
    const listContainer = document.getElementById('new-list-items');
    
    // Use html2canvas to capture the content of listContainer as an image
    html2canvas(listContainer).then(function(canvas) {
        // Create a download link
        const link = document.createElement('a');
        link.href = canvas.toDataURL();  // Convert canvas to image data URL
        link.download = 'grocery-list.png';  // Set the default filename
        link.click();  // Trigger the download
    });
}
