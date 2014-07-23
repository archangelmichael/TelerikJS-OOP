(function () {
    var output = document.getElementById("content");
    var result = [];

    var block23 = new Structures.Block(23, position.West);
    var apartment9 = new Structures.Apartment(5, 9, 4);
    result.push(People.Kid.actions());
    result.push(People.Adult.actions());
    result.push(block23);
    block23.addApartment(apartment9);

    // get input inhabitants in their apartment
    addInhabitantsToApartment(apartment9, peopleInApartment9);

    appendResult(result);

    function addInhabitantsToApartment(apartment: ILivingSpace, input: Object[]): void {
        var i, j, human, actions, person;
        for (i = 0; i < input.length; i += 1) {
            human = input[i];
            actions = human["actions"];
            if (human["role"] === "adult") {
                person = new People.Adult(human["firstName"], human["lastName"], apartment, human["age"]);
            }
            else {
                person = new People.Kid(human["firstName"], human["lastName"], apartment, human["age"]);
            }

            if (actions) {
                for (j = 0; j < actions.length; j += 1) {
                    switch (actions[j]) {
                        case "goOut":
                            result.push(person.goOut())
                            break;
                        case "getHome":
                            result.push(person.getHome())
                            break;
                        case "greet":
                            result.push(person.greet())
                            break;
                        case "play":
                            result.push(person.play())
                            break;
                        case "laugh":
                            result.push(person.laugh())
                            break;
                        case "play":
                            result.push(person.play())
                            break;
                        case "sleep":
                            result.push(person.sleep())
                            break;
                    }
                   
                }
            }
        }
    }

    function appendResult(result: string[]): void {
        var paragraph = document.createElement('p');
        for (var i = 0; i < result.length; i += 1) {
            var p = paragraph.cloneNode(true);
            p.textContent = result[i];
            output.appendChild(p);
        }
    }
} ());


