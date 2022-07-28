function canFinish(numCourses: number, preReq: number[][]): boolean {
  const preMap = new Map();

  for (let i = 0; i < numCourses; i++) {
    preMap.set(i, []);
  }
  for (const [a, b] of preReq) {
    preMap.get(a).push(b);
  }

  const visited = new Set();

  function dfs(course: number) {
    if (visited.has(course)) return false;
    if (preMap.get(course) === []) return true;

    visited.add(course);

    for (const preCourses of preMap.get(course)) {
      if (!dfs(preCourses)) return false;
    }
    preMap.set(course, []);
    visited.delete(course);
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }

  return true;
}

console.log(
  canFinish(9, [
    [1, 0],
    [2, 0],
    [3, 1],
  ])
);
// console.log(canFinish(2, [[1, 0]]));
