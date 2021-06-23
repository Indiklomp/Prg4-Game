export class Shark {
    constructor() {
        this.verticalSpeed = 0;
        console.log("Fish was created!");
        this.create();
    }
    create() {
        this.div = document.createElement("shark");
        document.body.appendChild(this.div);
    }
    update() {
    }
    onKeyDown(e) {
        console.log(e.key);
    }
    onKeyUp(e) {
    }
}
//# sourceMappingURL=dragon.js.map