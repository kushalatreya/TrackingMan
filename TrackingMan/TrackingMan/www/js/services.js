angular.module('starter.services', [])

.factory('Employees', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var employees = [{
        id: 0,
        fname: 'Roman',
        face: 'img/ben.png'
    }, {
        id: 1,
        fname: 'Ivan',
        face: 'img/max.png'
    }, {
        id: 2,
        fname: 'Bill',
        face: 'img/adam.jpg'
    }];

    return {
        all: function () {
            return employees;
        },
        remove: function (empl) {
            employees.splice(employees.indexOf(empl), 1);
        },
        get: function (emplID) {
            for (var i = 0; i < employees.length; i++) {
                if (employees[i].id === parseInt(emplID)) {
                    return employees[i];
                }
            }
            return null;
        }
    };
})

.factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'img/ben.png'
    }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'img/max.png'
    }, {
        id: 2,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        face: 'img/adam.jpg'
    }, {
        id: 3,
        name: 'Perry Governor',
        lastText: 'Look at my mukluks!',
        face: 'img/perry.png'
    }, {
        id: 4,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        face: 'img/mike.png'
    }];

    return {
        all: function () {
            return chats;
        },
        remove: function (chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function (chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
});

