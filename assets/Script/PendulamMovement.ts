import { _decorator, Component, Node, Quat, Vec3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("PendulamMovement")
export class PendulamMovement extends Component {
  speedDep: number = 45;
  start() {}

  update(deltaTime: number) {
    var axis_z = new Vec3(0, 0, 1);
    let tempQuat_z = new Quat();
    Quat.fromAxisAngle(
      tempQuat_z,
      axis_z,
      this.speedDep * deltaTime * (3.14159 / 120)
    );
    let nodeRot = new Quat();
    let OutRot = new Quat();
    this.node.getRotation(nodeRot);
    Quat.multiply(OutRot, tempQuat_z, nodeRot);
    this.node.setRotation(OutRot);
  }
}
