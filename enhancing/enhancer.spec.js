const enhancer = require("./enhancer.js");
// test away!

it('test for sanity', function () {
  expect(true).toBe(true);
});

describe('fail', () => {
    let item1
    let item2
    let item3 
    beforeEach(() => {
        // anything you want happening before each test
        item1 = {
            name: 'Hero',
            durability: 50,
            enhancement: 15,
          }
        item2 = { 
            name: "Villain", 
            durability: 100, 
            enhancement: 100, 
        }
        item3 = { 
            name: "Neutral", 
            durability: 100, 
            enhancement: 15, 
        }
      })
  it('enhancement=15 and durability=50 , durability decrease by 10', () => {
    expect(() => {
      enhancer.fail(item1)
      .expect(item1.durability).toBe(40)
    })
  })
  it('enhancement > 16 and durabliity=100, durability decrease by 10, enhancement decrease by 1', () => {
    expect(() => {
      enhancer.fail(item2)
      .expect(item2.durability).toBe(90)
      .expect(item2.enhancement).toBe(99)
    })
  })
  it('enhancement < 15 and durabliity=100, durability decrease by 5', () => {
    expect(() => {
      enhancer.fail(item3)
      .expect(item3.durability).toBe(95)
    })
  })
})
