import Team from './Team'

const team = new Team;

const member1 = 'Old Bowman'
const member2 = 'Bowman'
const member3 = 'Swordsman'


team.add(member1);
team.addAll(member2, member3);
console.log(team.toArray());