import {
  _decorator,
  Component,
  Node,
  Input,
  Vec3,
  input,
  Vec2,
  UITransform,
  Mesh,
  MeshRenderer,
  BoxCollider,
  tween,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("PlayerMovement")
export class PlayerMovement extends Component {
  // @property({ type: Node })
  // plane: Node = null;
  @property({ type: Node })
  Character: Node = null;
  TouchStart: Vec2 = null;
  TouchEnd: Vec2 = null;
  PlaneWidth = null;
  TargetLine = 0;
  SwipeThresholdX = 80;
  SwipeThresholdY = 30;
  CharacterJump: Boolean = false;
  start() {
    // this.PlaneWidth=this.plane.getComponent(BoxCollider).size.x;

    this.PlaneWidth = 10;
    console.log("WIDTH", this.PlaneWidth);
    console.log("SWIPING SCRIPT");
    input.on(
      Input.EventType.TOUCH_START,
      (event) => {
        this.TouchStart = event.getLocation();
        console.log("START POSITION", this.TouchStart);
      },
      this
    );
    input.on(
      Input.EventType.TOUCH_END,
      (event) => {
        this.TouchEnd = event.getLocation();
        console.log("END POSITION", this.TouchEnd);
        this.laneChange();
      },
      this
    );
  }
  laneChange() {
    console.log("CURRENT LANE", this.TargetLine);
    let DeltaDistanceChangeX = this.TouchEnd.x - this.TouchStart.x;
    let DeltaDistanceChangeY = this.TouchEnd.y - this.TouchStart.y;
    if (
      Math.abs(DeltaDistanceChangeX) > this.SwipeThresholdX &&
      DeltaDistanceChangeX > 0 &&
      this.TargetLine < 1
    ) {
      this.TargetLine++;
      let currentPosition = this.Character.getPosition();
      let CharacterParmanentPosition = this.Character.getPosition();
      currentPosition.x += this.PlaneWidth / 3;
      tween(this.Character).to(0.5, { position: currentPosition }).start();
    } else if (
      Math.abs(DeltaDistanceChangeX) > this.SwipeThresholdX &&
      DeltaDistanceChangeX < 0 &&
      this.TargetLine > -1
    ) {
      this.TargetLine--;
      let currentPosition = this.Character.getPosition();
      let CharacterParmanentPosition = this.Character.getPosition();
      currentPosition.x -= this.PlaneWidth / 3;
      tween(this.Character).to(0.5, { position: currentPosition }).start();
    } else if (
      Math.abs(DeltaDistanceChangeY) > this.SwipeThresholdY &&
      DeltaDistanceChangeY > 0 &&
      this.CharacterJump == false
    ) {
      this.CharacterJump = true;
      let currentPosition = this.Character.getPosition();
      let CharacterParmanentPosition = this.Character.getPosition();
      currentPosition.y += 2.5;

      tween(this.Character)
        .to(0.5, {
          position: currentPosition,
        })
        .to(0.5, {
          position: CharacterParmanentPosition,
        })
        .call(() => {
          this.CharacterJump = false;
        })
        .start();
    }
  }
  update(deltaTime: number) {}
}
