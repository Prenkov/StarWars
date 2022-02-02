$("#firstPhoto").click(function() {
    $.ajax({
        url: "https://swapi.dev/api/people/?page=1",
        success: function(response) {
            printPeople(response.results);
            $("#firstPhoto").css('display', 'none');
            $("#secondPhoto").css('display', 'none');
            $("#peopleTable").css('display', 'block');
            $("#next").css('display', 'block');
            $("#goBack").css('display', 'block');
            $("#choseing").css('display', 'none');
        }
    })
});

$("#secondPhoto").click(function() {
    $.ajax({
        url: "https://swapi.dev/api/starships/?page=1",
        success: function(response) {
            printShips(response.results);
            $("#firstPhoto").css('display', 'none');
            $("#secondPhoto").css('display', 'none');
            $("#shipsTable").css('display', 'block');
            $("#next").css('display', 'block');
            $("#goBack").css('display', 'block');
            $("#choseing").css('display', 'none');
        }
    })
});

function printPeople(people) {
    var html = '';
    $("#people").css('display', 'block');
    for(let person of people) {
        let sum = 0;
        for(let i=0; i<person.films.length; i++) {
            sum++;
        }
        html += 
        `
        <tr>
            <td>${person.name}</td>
            <td>${person.height}cm</td>
            <td>${person.mass}kg</td>
            <td>${person.gender}</td>
            <td>${person.birth_year}</td>
            <td>${sum}</td>
        </tr>
        `;
        sum = 0;
    }
    $("tbody").html(html);
}

function printShips(ships) {
    var html = '';
    $("#ships").css('display', 'block');
    for(let ship of ships) {
        html += 
        `
        <tr>
            <td>${ship.name}</td>
            <td>${ship.model}</td>
            <td>${ship.manufacturer}</td>
            <td>${ship.cost_in_credits}</td>
            <td>${ship.crew}(Crew) + ${ship.passengers}(Passangers)</td>
            <td>${ship.starship_class}</td>
        </tr>
        `;
    }
    $("tbody").html(html);
}