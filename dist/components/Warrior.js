"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
const Classes_1 = require("../enums/Classes");
const Character_1 = require("./Character");
class Warrior extends Character_1.Character {
    constructor(name, level, maxFoodLevel, foodLevel) {
        super(name, level, maxFoodLevel, foodLevel);
        this.name = name;
        this.level = level;
        this.maxFoodLevel = maxFoodLevel;
        this.foodLevel = foodLevel;
        this.classes = Classes_1.Classes.Warrior;
    }
    ;
}
exports.Warrior = Warrior;