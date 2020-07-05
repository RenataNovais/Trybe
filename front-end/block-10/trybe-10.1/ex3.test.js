const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};
  
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

describe('testing with async/await', () => {
  describe('when the user id exists', () => {
    it('if the promises succeed', async () => {
      expect.assertions(1);
      const user = await getUserName(4);
      expect(user).toEqual('Mark');
    });
  });

  describe('when the user id does not exists', () => {
    it('if the promises fails', async () => {
      expect.assertions(1);
      try {
        await getUserName(2);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 2 not found.' });
      }
    });
  });
});
