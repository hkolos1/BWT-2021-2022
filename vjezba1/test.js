let assert = chai.assert;

describe("Krug", function () {
  describe("#povrsina kruga", function () {
    it("treba vratiti PI kada je prečnik kruga 2", function () {
      const k1 = new Krug(1, 1, 2);
      assert.equal(k1.povrsina, Math.PI);
    });
    it("treba vratiti 0 kada je prečnik kruga 0", function () {
      const k1 = new Krug(1, 1, 0);
      assert.equal(k1.povrsina, 0);
    });
    it("treba vratiti 4PI kada je prečnik kruga 4", function () {
      const k1 = new Krug(1, 1, 4);
      assert.equal(k1.povrsina, 4 * Math.PI);
    });
  });
});

describe("Krug", function () {
  describe("#obim kruga", function () {
    it("treba vratiti PI kada je obim kruga 1", function () {
      const k1 = new Krug(1, 1, 1);
      assert.equal(k1.obim, Math.PI);
    });
    it("treba vratiti 0 kada je obim kruga 0", function () {
      const k1 = new Krug(1, 1, 0);
      assert.equal(k1.obim, 0);
    });
    it("treba vratiti 4PI kada je obim kruga 4", function () {
      const k1 = new Krug(1, 1, 4);
      assert.equal(k1.obim, 4 * Math.PI);
    });
  });
});

describe("Krug", function () {
  describe("#presjek kruga", function () {
    it("treba vratiti false kada se ne sijeku", function () {
      const k1 = new Krug(5, 6, 3);
      const k2 = new Krug(1, 2, 2);
      assert.equal(k1.presjek(k2), true);
    });
    it("treba vratiti true kada je presjek kruga 1", function () {
      const k1 = new Krug(1, 1, 1);
      const k2 = new Krug(1, 1, 1);
      assert.equal(k1.presjek(k2), true);
    });
    it("treba vratiti 4PI kada je presjek kruga 4", function () {
      const k1 = new Krug(1, 1, 4);
      const k2 = new Krug(1, 1, 4);
      assert.equal(k1.presjek(k2), true);
    });
  });
});
//Nije urađen treći zadatak, treba napisati testove za klasu Papir :)


