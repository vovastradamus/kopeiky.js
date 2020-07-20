import kopeiky from "./index";

test("test kopeiky", () => {
  {
    const k = kopeiky(0.2);
    expect(k.add(0.01).toNormal()).toBe(0.21);
  }

  {
    const k = kopeiky(0.2);
    expect(k.add(kopeiky(0.01)).toNormal()).toBe(0.21);
  }

  expect(() => kopeiky("1")).toThrow();

  expect(kopeiky(0.2).add(0.01).toNormal()).toBe(0.21);

  expect(kopeiky(0.2).sub(0.01).toNormal()).toBe(0.19);

  expect(kopeiky(20.2).muliply(2).toNormal()).toBe(40.4);

  expect(kopeiky(20.2).divide(2).toNormal()).toBe(10.1);

  {
    const k = kopeiky(20.201).divide(2);

    expect(k.toNormal()).toBe(10.1);
    expect(k.toString()).toBe("10.10");
  }

  expect(kopeiky(20) + 1).toBe(21);

  expect(kopeiky(4.2, { rank: 0 }).toString()).toBe("4");

  expect(() => kopeiky(20).add(kopeiky(20, { rank: 3 }))).toThrow();
});
