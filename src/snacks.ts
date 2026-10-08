export const snacks: string[] = [
  "Skittles",
  "Pringles",
  "Fruit Snacks",
  "Lays chips",
  "Doritos",
  "Cheetos"
];

export function printSnacks(): void {
  console.log("Available snacks:");
  snacks.forEach((snack) => {
    console.log(`- ${snack}`);
  });
}

//printSnacks();
