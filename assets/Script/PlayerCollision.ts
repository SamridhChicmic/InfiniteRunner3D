import { _decorator, CapsuleCollider, Component, game, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("PlayerCollision")
export class PlayerCollision extends Component {
  @property({ type: Node })
  Charachter: Node = null;
  start() {
    let collider = this.Charachter.getComponent(CapsuleCollider);
    collider.on("onCollisionStay", this.collide, this);
  }
  collide(event) {
    // game.pause();
    console.log("INTERSECT", event);
  }
  update(deltaTime: number) {}
}
