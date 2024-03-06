export default class Team {
  constructor() {
    this.members = new Set();
  }
  add(member) {
    if (this.members.has(member)) {
      throw new Error("Персонаж уже есть в команде");
    }
    this.members.add(member);
  }
  addAll(...members) {
    for (const member of members) {
      this.members.add(member);
    }
  }
  toArray() {
    return Array.from(this.members);
  }
}