
class Player {
 name: string;
 health: number;
 inventory: Item[];

 constructor(name: string) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
 }

 attack(enemy: Enemy): void {
    enemy.health -= 10;
 }

 defend(): void {
    this.health += 20;
 }

 useItem(item: Item): void {
    this.inventory = this.inventory.filter((i) => i !== item);
    item.applyEffect(this);
 }
}

class Enemy {
 name: string;
 health: number;

 constructor(name: string, health: number) {
    this.name = name;
    this.health = health;
 }

 attack(player: Player): void {
    player.health -= 10;
 }
}

class Item {
 name: string;

 constructor(name: string) {
    this.name = name;
 }

 applyEffect(player: Player): void {
 }
}

class Location1 {
 name: string;
 enemies: Enemy[];
 items: Item[];

 constructor(name: string, enemies: Enemy[], items: Item[]) {
    this.name = name;
    this.enemies = enemies;
    this.items = items;
 }
}

