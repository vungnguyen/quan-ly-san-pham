class Instructor {
    constructor({name,role= "assistant"}) {
        this.name = name;
        this.role = role;
    }
    renderDetails() {
        console.log(`${this.name} - ${this.role}`)
    }
}
let juniorInstructor = new Instructor({'name' : ' Brian'});
let seniorInstructor = new Instructor({'name': 'Alice','role': 'classroom'});
juniorInstructor.renderDetails();
seniorInstructor.renderDetails();
