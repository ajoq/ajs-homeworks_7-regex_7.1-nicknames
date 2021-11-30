class Validator {
    constructor(nickname) {
        this.nickname = nickname;
    }

    validateUsername() {
        return (/^[^\d-_][\w-]+[^\d-_]$/.test(this.nickname)) && !(/\d{4,}/.test(this.nickname));
    }
}

const player1 = new Validator('ajoqo123f324f');
console.log(player1.validateUsername());

//Написать тесты к заданию