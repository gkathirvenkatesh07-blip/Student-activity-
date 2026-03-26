let totalHours = 0;

document.getElementById("activity-form").addEventListener("submit", function(e) {
    e.preventDefault(); // stop refresh

    let activity = document.getElementById("activity").value;
    let category = document.getElementById("category").value;
    let hours = parseFloat(document.getElementById("hours").value);

    // Update total hours
    totalHours += hours;
    document.getElementById("total-hours").textContent = totalHours;

    // Create activity card
    let div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
        <h3>${activity}</h3>
        <p>Category: ${category}</p>
        <p>Hours: ${hours}</p>
    `;

    document.getElementById("activity-list").appendChild(div);

    // Clear form
    document.getElementById("activity-form").reset();
});
