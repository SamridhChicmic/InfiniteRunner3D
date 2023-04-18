import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("handler")
export class handler extends Component {
  @property({ type: Node })
  cone: Node = null;
  @property({ type: Node })
  cube: Node = null;
  @property({ type: Node })
  plane: Node[] = [];
  onclickcubebutton() {
    console.log("BUTTON CLICKED");
    let pos = this.cube.getPosition();
    pos.x -= 0.1;
    this.cube.setPosition(pos);
  }
  onclickconebutton() {
    console.log("BUTTON CLICKED");
    let pos = this.cone.getPosition();
    pos.x += 0.1;
    this.cone.setPosition(pos);
  }
  start() {}

  update(deltaTime: number) {}
}
