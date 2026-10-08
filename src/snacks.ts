export const snacks: string[] = [
  "Skittles",
  "Pringles"
];

export function printSnacks(): void {
  console.log("Available snacks:");
  snacks.forEach((snack) => {
    console.log(`- ${snack}`);
  });
}

//printSnacks();
