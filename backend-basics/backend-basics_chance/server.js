import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

export const server = createServer((req, res) => {
  const person = {
    name: chance.name(),
    age: chance.age({ type: "adult" }),
    profession: chance.profession({ rank: true }),
  };
  res.statusCode = 200;
  res.end(
    `Hello, my name is ${person.name} and I am ${person.age} years old. I am a ${person.profession}.`
  );
});
