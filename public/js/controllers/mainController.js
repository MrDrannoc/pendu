function mainController() {

    this.words = "flash";
    this.arrayWords = this.words.split("");

    this.compare = (proposition) => {
        for (let letter of this.arrayWords) {
            if (letter === proposition) {
                this.response = proposition;
                console.log(this.response);
            }
        }
    };
}
