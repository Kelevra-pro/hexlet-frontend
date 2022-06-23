const removeFirstLevel = (tree) => tree.filter(Array.isArray).flat();

// Второй уровень тут: 5, 3, 4
const tree1 = [[5], 1, [3, 4]];
removeFirstLevel(tree1); // [5, 3, 4]

const tree2 = [1, 2, [3, 5], [[4, 3], 2]];
removeFirstLevel(tree2);
// [3, 5, [4, 3], 2]