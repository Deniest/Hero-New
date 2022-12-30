import { Classes } from "../enums/Classes";
import { Flag } from "../enums/Flag";
import { Character } from "./Character";

export class Archer extends Character {

    public classes?:Classes
    
    constructor(public name: string, public level: number, public maxFoodLevel: number, public foodLevel: number, public health:number , public flag:Flag) {
        super(name,level,maxFoodLevel,foodLevel,health,flag);
        this.classes = Classes.Archer;
    };
}