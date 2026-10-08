function bold(s) {
	return `\x1b[1m${s}\x1b[0m`;
}

function italics(s) {
	return `\x1b[3m${s}\x1b[0m`;
}

function capitalize(s) {
	return s[0].toUpperCase() + s.slice(1).toLowerCase();
}

export function animation(feature) {
	return bold(italics(`Party! Party! Party! - ${capitalize(feature)} Time`));
}

//console.log(animation("snacks"));

Introduction

In Lab 0, we practiced the basics of Git: committing, pushing, and collaborating on a shared repository. Now it’s time to go deeper. Real software projects don’t just use Git to save work. They use advanced branching strategies, release management, and automation to ship reliable software at scale.

In this lab, we will cover:
Safely isolating new features with new branches.
Release strategies: preparing stable versions and tagging releases.
Merging and conflicts: how Git handles multiple changes.
Continuous Integration (CI): using GitHub Actions to automatically test your code.
Cherry Picking and Squashing Commits: selectively reusing commits and keeping your Git history clean.

You and your friends are organizing the Ultimate Party. To make sure everything goes smoothly, you’ll use Git to plan it like a professional software project. Each idea: snacks, music, guest list etc. will be a feature branch. You’ll set up Continuous Integration (CI) to make sure your plans always pass the party “checklist” before merging. Once everything is ready and tested, you’ll create a release branch to lock in the final plan.

This Lab must be done in pairs.
Regarding Windows:
If you are using a WIndows computer, we recommend setting up WSL in advance on your laptop. Make sure it’s configured with Ubuntu and that you know how to get into WSL.
Task 0: Setup

Create a repository for this lab named 110-lab2. Invite your partner as a collaborator (One repo per team). Each partner should clone the repository in their local setup.

git clone https://github.com/<your-username>/110-lab2.git
cd 110-lab2

Task 1 – Feature Branching
In real-world software engineering, we usually don’t make all changes directly on the main branch. Instead, we create different branches for different features. These are isolated workspaces where each new feature can be developed independently.

Why do we do this?
Keep the main branch stable and clean.
Multiple developers can work in parallel without stepping on each other’s code.
Easier to review changes before merging via Pull Requests (A GitHub feature).

Required Reading: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches
In your friend group, everyone is contributing something different to the party like music, snacks, or invitations. To enable each friend to experiment with their own ideas without affecting everyone else (until they’re ready to share), everyone (each partner) works on their own branch and later merges to the main branch. But be careful: even when working on two branches, if two friends make conflicting changes, there will be conflicts to resolve when merging!





Step 1: Create a new branch (each partner picks a different branch name)
git switch -c feature/add-snacks
This creates and switches to a branch called feature/add-snacks.

Step 2: Add code for the feature
Create a new file: src/snacks.ts
Your file should:
Define a list (array) of your items (e.g., snack names).
Define and export a function that prints them to the console.
Call the function so it actually prints out the snacks.

Run it with:
npx tsx src/snacks.ts

Step 3: Stage and Commit your changes

Step 4: Push the branch to GitHub
git push origin feature/add-snacks
This command uploads and commits your local branch feature/add-snacks to the remote GitHub repository. The “origin” part specifies which remote repository to push to.

Step 5: Open a Pull Request (PR) - A GitHub Feature
A Pull Request (PR) is how developers propose changes from one branch to another (usually from a feature branch → main). It’s not just about merging code, it’s about communication and collaboration.
Why do we use PRs?
Code review: Teammates can review your changes, suggest improvements, or catch bugs before merging.
Discussion: PRs provide a place to discuss design decisions, trade-offs, and ask questions.
Traceability: Each PR documents why a change was made, which helps future developers (including you!).
Safety: Keeps main stable so only reviewed and approved code gets merged.

In open-source projects, PRs are essential: people fork a repo, make changes in their own copy, and then open a PR asking maintainers to review and merge those changes. In company projects, PRs are part of the standard workflow for team collaboration.

Required Reading: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests

Go to your GitHub repo (110-lab2).
GitHub will prompt: “Compare & pull request”.
Open a PR from feature/add-snacks → main.
Merge the PR to main
Step 6: Add other features

Similarly add other features to your party like music, guest list etc. via feature branches and merge them with main. Each partner of the group should have contributed to the main branch via at least 1 feature.


Task 2 – Merging & Conflicts
When multiple developers work on the same file, merge conflicts happen. Git tries to combine changes automatically, but if two branches modify the same lines, you must resolve the conflict manually.
They’re inevitable in team projects.
Learning to resolve them carefully ensures no one’s work is lost.
Professional workflow: conflicts then discussion then resolution then commit.

Each partner should:
Step 1: Switch to main and pull the latest updates. Make sure your local main branch is up to date before you start.
git switch main
git pull origin main

Step 2: Switch to your own feature branch and create src/main.ts to import the print function and print out your feature(only 1 feature) in the main function.For eg. print out all the snacks in the main.ts file. 
Step 3: Commit and push your code to your respective feature branches. Partner A makes a PR to main and merges it, followed by Partner B -> This branch has conflicts that must be resolved! GitHub will show a merge conflict banner.
Step 4: Click resolve conflicts and manually resolve the conflict by printing out both features in main.ts Take a screenshot of your resolution before marking as resolved.
Step 5: Click Mark as resolved → Commit merge. Finally, merge the pull request.
Merge conflicts are common. Resolving them thoughtfully can even improve the final design. To avoid merge conflicts in the future, you will need to coordinate with other team members to avoid making different changes to the same content at the same time.

Task 3 – Cherry-Pick 
Sometimes another teammate makes a cool update you want to reuse. But you don’t want their entire branch.That’s where git cherry-pick helps: it copies a specific commit from one branch to another.

Scenario:
Partner B (Music team) adds a fun animation before their feature prints.
Partner A (Snacks team) loves it and wants to reuse just that commit. Not any later changes.


Step 1: Partner B should switch to their own feature branch and get the latest changes from the main branch(git pull --rebase origin main). They should create an animation.ts file which exports a function that takes a feature name as an argument and prints out a message in Bold or Italics[use special character sequences]. Update your feature typescript file to use this animation function. 
Eg. Party! Party! Party! - Snacks Time
Cookies, Granola, Chips

For reference bold and italics are printed as below in typescript:

console.log(`\x1b[1mBold Text\x1b[0m`); // Bold
console.log(`\x1b[3mItalics Text\x1b[0m`); // Italic


Step 2: Partner B Commits this change to their feature branch and then makes another commit with a small change, like a spelling change. Note the commit hashes (commit IDs).

Step 3: Partner A sees the cool animation done by Partner B and wants to replicate the same. They pull the changes from main branch into their feature branch and they cherry-pick that one commit from Partner B’s feature branch into their feature branch by running the below command:

git cherry-pick #animation-commit-hash

Step 4: Partner A then prints the animation before their feature also by changing their feature typescript file. 
Step 5: Run to verify: npx tsx src/main.ts . No need to commit after you cherry pick. It directly applies the commit to your feature branch. But you do need to push to the remote branch with git push origin featurebranch

Step 6: Don’t commit these changes to the main branch just yet. View the commit history in a tree format with git log --oneline --graph --decorate --all in your respective feature branches and keep a screenshot ready for checkoff. Partners should have separate screenshots for their separate feature branches.


Task 4 – Squashing 
When you work on a feature, you often make several small commits (“fix typo,” “adjust spacing,” “final tweak”). Before merging into main, teams usually squash those commits into one clean commit to keep history tidy. git merge --squash lets you combine all the work from a branch into one new commit without showing every micro-commit.
Scenario: The two partners work on only one branch for this task! At different times, they think of more snacks to add to their party and make a commit whenever they think of something new. They want to merge all these changes to main in a single clean commit.
Step 1: Make 3 commits in your feature branch by adding one more snack every time, but don't push to the remote branch. 
Step 2: Switch to the main branch in your local repo and pull the latest changes from the remote main branch. Merge your feature branch using squash git merge --squash feature/snacks

Step 3: Make one clean commit git commit -m "Added all final snacks"
Step 4: Push this to Github git push origin main
Step 5: Check your history with git log --oneline and take a screenshot. Inspect the details of your final commit with git show #commit-id and take a screenshot. 

Task 5 – Continuous Integration (CI)
Modern teams don’t just rely on humans to test code. They use Continuous Integration (CI) pipelines, which automatically build and test code on every push/PR.
Why CI?
Catches bugs early.
Ensures consistent builds across machines.
Builds trust: If CI is red, code is not safe to merge
Required Reading: https://docs.github.com/en/actions/get-started/continuous-integration 
Step 1: Add tests


Let’s create a simple automated test before setting up CI. We’ll use Vitest, a fast test framework for TypeScript projects.
Install Vitest: npm install --save-dev vitest
Create a test file src/snacks.test.ts:

import { describe, it, expect } from "vitest";
import { snacks } from "./snacks";

describe("snacks", () => {
  it("should have at least 3 items", () => {
    expect(snacks.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'chips'", () => {
    expect(snacks).toContain("chips");
  });
});

This code is a unit test which we wrote using the Vitest framework. It checks that your snacks.ts file behaves as expected: just like a small “automated proof” that your code works.
The first line imports testing functions from Vitest:
describe() groups related tests together.
it() defines a single test case.
expect() is how we make an assertion (we say what we expect the code to do).
The second line imports the actual snacks array from your snacks.ts file so we can test real data.
The describe block groups all tests related to snacks and we define 2 test cases using it to test the length and presence of chips in the snacks array.

Similarly add a unit test for the other feature.

Add a test script to your package.json:
"scripts": {
  "test": "vitest run"
}

Now locally verify: npm test

Step 2: Create a GitHub Actions Workflow
Create the .github/workflows/ci.yml file as below
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npx tsc --noEmit
      - run: npm test

Make sure to create a tsconfig.json file and fill it with the following:


{ 
"compilerOptions": {
   "target": "es2020",
   "module": "commonjs",
   "strict": true,
   "esModuleInterop": true,
   "skipLibCheck": true
 },
 "include": ["src"]
}




This file defines a GitHub Actions workflow: a set of automated steps that run every time someone pushes code or opens a pull request.
In real-world teams, developers don’t manually test everything each time code changes.
Instead, they use Continuous Integration (CI) to automatically:
Run tests
Build the project
Catch errors early
This ensures that only safe, working code gets merged into the main branch.
Think of CI as an automated teammate who double-checks every pull request for you.

name: CI  Names the workflow; appears in the Actions tab when it runs.

on: [push, pull_request] Triggers the workflow automatically on every push or pull request.

 jobs:  Defines one or more tasks the workflow will perform.

 build: The single job here that sets up, builds, and tests the project.

runs-on: ubuntu-latest – Specifies the virtual machine image (Ubuntu Linux) used for the job.

steps:  Lists the sequence of commands or reusable actions to execute inside the job.

actions/checkout@v4 – Checks out the repository’s code onto the runner.
actions/setup-node@v4 – Installs Node.js (version 20) on the runner.
npm ci – Installs dependencies from package-lock.json for a clean, reproducible setup.
npx tsc --noEmit – Runs the TypeScript compiler to verify type correctness without producing output files.
npm test – Executes all automated tests; the workflow fails if any test fails.

Step 3: Push and Watch the Pipeline
After committing and pushing the ci.yml file and test files,
Go to GitHub: Actions tab, and you’ll see your workflow run automatically. A green check means all tests passed.

Step 4 – Break It and Fix It
Try breaking the test to see CI fail: Change the snacks array to only 2 items.
Commit and push again. Watch the CI fail and then fix it to make it pass again

Task 6 – Release Branch & Tagging

When software reaches a stable point, teams prepare a release. Instead of merging unfinished features directly into main, we create a release branch. This branch stabilizes the codebase so we can test, polish, and fix bugs without being affected by ongoing feature development.

We also tag the release with a version number (e.g., v1.0.0). Tags are like permanent bookmarks in Git history. They let us always go back to the exact commit that was deployed. This is one of many ways to use branches/tags. 

Why use release branches and tags?

Stability: Feature work can continue, but the release branch stays stable.
Versioning: Tags make it easy to identify what code was shipped (e.g., v1.0.0).
Hotfixes: If users find a bug in production, we can patch it on the release branch without disturbing ongoing development.
Suggested Reading: Semantic Versioning
The party date is approaching! All features (music, snacks, invites) are ready, and now you want to lock the plan i.e. no last-minute chaos. That’s where a release branch comes in: it creates a stabilized codebase while final checks happen.

Step 1: Switch back to main
 git switch main
Step 2: Create a release branch

 git switch -c release/v1.0

Step 3: Tag the release
git tag v1.0.0
Tags are lightweight labels pointing to a specific commit. Commits move forward as you keep working, but a tag always points to the same snapshot in history. You can think of it like a bookmark: Branches move (the pointer advances with new commits). Tags don’t move (they stay fixed to one commit).
Step 4: Push release branch and tag
git push origin release/v1.0 --tags

Required Reading: https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases

Checkoff Deliverables
Task 1- Pull Requests from Partner A and B.
Task 2 - How was the merge conflict resolved? Screenshot of resolution.
Task 3 - Screenshots of git log tree from both partners.
Task 4 - Screenshots of git log and git show.
Task 5 - A successful CI and understanding of the different steps of CI
Task 6 - A tagged release branch should exist in repo.
Understanding the use and difference between different git commands



