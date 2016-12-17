function mainController() {

    this.words = "flash";
    this.proposition = "";
    this.arrayWords = this.words.split("");
    this.correct = [];
    this.count = 0;

    this.compare = () => {
        this.correctA = this.correct.length;

        this.proposition = this.proposition.toLowerCase();

        for (let letter of this.arrayWords) {
            if (letter == this.proposition) {
                this.correct.push(this.proposition);
            }
            this.correctB = this.correct.length;
        }

        if (this.correctA == this.correctB) {
            this.count++;
        }


        this.proposition = "";

        console.log(this.correct);
        console.log(this.count);
    };
}
