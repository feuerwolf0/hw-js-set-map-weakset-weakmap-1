import Team from '../Team';

// тест на добавление персонажа
test.each([
  ['add member to Team', 'Bowman', new Array('Bowman')],
  ['add member to Team', 'Swordsman', new Array('Swordsman')],
])('Test: %s', (title, member, result) => {
  const team = new Team();
  team.add(member);
  expect(Array.from(team.members)).toEqual(expect.arrayContaining(result));
});

// тест на ошибку
test('Test: throw Error', () => {
  const member1 = 'Bowman Copy';
  const member2 = 'Bowman Copy';

  expect(member1).toBe(member2);

  const team = new Team();
  team.add(member1);
  
  expect(() => team.add(member2)).toThrow("Персонаж уже есть в команде");
});

// тест на добавление нескольких персонажей
test('Test: method addAll', () => {
  const members = new Array('Bowman', 'Swordsman', 'Bowman', 'Zombie');
  const result = new Set(members);
  const team = new Team();
  team.addAll(...members);
  expect(Array.from(team.members)).toEqual(expect.arrayContaining(Array.from(result)));
});


// тест на toArray
test('Test: method toArray', () => {
  const members = new Array('Bowman', 'Swordsman', 'Bowman', 'Zombie');
  const result = Array.from(new Set(members));
  const team = new Team();
  team.addAll(...members);
  expect(team.toArray()).toEqual(expect.arrayContaining(result));
});