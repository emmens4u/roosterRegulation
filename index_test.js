const assert = require('assert');
const Rooster = require('../index');


describe('Rooster', ()=>{
  // testing if it returns the rooter call
  describe('.announceDawn', ()=>{
    it('returns a rooter call', ()=>{

      // setup
        const expected = 'cock-a-doodle-doo!';
      // Excersie
        const actual = Rooster.announceDawn();
      // verify
        assert.equal(actual, expected);
    });
  });

// testing if it converts number to string
  describe('.timeAtDawn', ()=>{
    it('returns hour to string', ()=>{

      // setup
        const inputNumber = 9;
        const expected = '9';
      // Excercise
        const actual = Rooster.timeAtDawn(inputNumber);
      // verify
        assert.equal(actual, expected);
    });
    //testing for errors for numbers less than 0
    it('throws a range error for a number less than 0', ()=>{

      // setup
        const inputNumber = -2
        const expected = RangeError;
     
      // verify
        assert.throws( ()=>{
          Rooster.timeAtDawn(inputNumber); //Exercise
        }, expected);
    });
  //testing for errors for numbers greater than 23
    it('throws a range error for a number more than 23', ()=>{

      // setup
        const inputNumber = 25
        const expected = RangeError;
     
      // verify
        assert.throws( ()=>{
          Rooster.timeAtDawn(inputNumber); //Exercise
        }, expected);
    });
  });
});
