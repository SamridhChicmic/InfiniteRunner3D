import { _decorator, CapsuleCollider, Component, game, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("PlayerCollision")
export class PlayerCollision extends Component {
  @property({ type: Node })
  Charachter: Node = null;
  start() {
    let collider = this.Charachter.getComponent(CapsuleCollider);
    console.log("Collider", collider);
    collider.on("onTriggerEnter", this.collide, this);
  }
  collide(TriggerEvent) {
    // game.pause();
    console.log("INTERSECT", TriggerEvent);
  }
  update(deltaTime: number) {}
}
