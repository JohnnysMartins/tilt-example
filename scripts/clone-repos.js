const { execSync } = require("child_process");
const fs = require("fs");
const { resolve } = require("path");

const SERVICES_FOLDER_PATH = resolve(__dirname, "../services");
const REPOSITORIES_PATH = resolve(__dirname, "../repositories.json");

if (!fs.existsSync(SERVICES_FOLDER_PATH)) {
  fs.mkdirSync(SERVICES_FOLDER_PATH);
}

const repositories = JSON.parse(fs.readFileSync(REPOSITORIES_PATH, "utf-8"));
repositories.forEach((repo) => {
  const { name, link, branch } = repo;
  const repoFolder = resolve(SERVICES_FOLDER_PATH, name);

  if (fs.existsSync(repoFolder)) {
    console.log(`Repository ${name} already created!`);
    return;
  }

  try {
    execSync(`git clone --branch ${branch} ${link} ${repoFolder}`);
    console.log(`Repository ${name} cloned successfully`);
  } catch (error) {
    console.error(`Error cloning repository ${name}`);
    console.error(error.message);
  }
});
