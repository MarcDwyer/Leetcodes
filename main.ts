const set = new Set();
set.add(1).add(2).add(3);

for (const n of set.values()) {
  console.log({ n });
}

new Set().size;
