document.getElementById('addDateBtn').addEventListener('click', function() {
    var customDate = document.getElementById('customDate').value;
    if (customDate.trim() !== '') {
        addCustomDate(customDate);
    }
});

function addCustomDate(dateText) {
    var checklist = document.getElementById('checklist');
    var newItem = document.createElement('li');
    newItem.innerHTML = '<input type="checkbox" id="customDate" name="customDate">' +
                        '<label for="customDate">' + dateText + '</label>';
    checklist.appendChild(newItem);
    document.getElementById('customDate').value = ''; // Clear the input field after adding the date
}