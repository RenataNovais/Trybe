const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

it('testing uppercase function', (done) => {
  uppercase('hello', (str) => {
    expect(str).toBe('HELLO')
    done();
  });
});
