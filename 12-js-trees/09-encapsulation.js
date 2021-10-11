const makeUser = ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});

export const getMutualFriends = (user1, user2) => {
  const friends1 = user1.getFriends();
  const friends2 = user2.getFriends();

  return friends1.filter((a) => friends2.some((b) => a.id === b.id));
};

const user1 = makeUser({
  friends: [makeUser({ id: 2 }), makeUser({ id: 8 }), makeUser({ id: 100 })],
});
const user2 = makeUser({
  friends: [makeUser({ id: 2 }), makeUser({ id: 7 }), makeUser({ id: 8 })],
});

getMutualFriends(user1, user2);
// const expected = [makeUser({ id: 2 }), makeUser({ id: 8 })];
