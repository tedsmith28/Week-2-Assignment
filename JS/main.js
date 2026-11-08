/* Theodore Smith - Week 2 Assignment - November 7, 2026 */
const singersJSON = `{
    "singers": [
        {
        "name": "Brandon Lake",
         "birthday": "June 21, 1990",
         "best songs": ["Gratitude", "How Good God Is", "That's Who I Praise"]
        },
        {
        "name": "Pat Barrett",
        "birthday": "December 18, 1984",
        "best songs": ["Build My Life", "Canvas and Clay", "The Way (New Horizon)"]
        },
        {
        "name": "Phil Wickham",
        "birthday": "April 5, 1984",
        "best songs": ["Living Hope", "Battle Belongs", "This is Amazing Grace"]
        },
        {
        "name": "Chris Tomlin",
        "birthday": "May 4, 1972",
        "best songs": ["How Great Is Our God", "Good Good Father", "Holy Forever"]
        }
    ]
}`;

// Parse the JSON string into a JavaScript object
const singersData = JSON.parse(singersJSON);

// Find the table body in home.html
const tableBody = document.getElementById("singerTable");

// Populate the table with singer data
singersData.singers.forEach(singer => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${singer.name}</td>
        <td>${singer.birthday}</td>
        <td>${singer["best songs"].join(", ")}</td>
    `;
    tableBody.appendChild(row);
});

