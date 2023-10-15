"use strict";
class Player {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    attack(enemy) {
        enemy.health -= 10;
    }
    defend() {
        this.health += 20;
    }
    useItem(item) {
        this.inventory = this.inventory.filter((i) => i !== item);
        item.applyEffect(this);
    }
}
class Enemy {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }
    attack(player) {
        player.health -= 10;
    }
}
class Item {
    constructor(name) {
        this.name = name;
    }
    applyEffect(player) {
    }
}
class Location1 {
    constructor(name, enemies, items) {
        this.name = name;
        this.enemies = enemies;
        this.items = items;
    }
}
