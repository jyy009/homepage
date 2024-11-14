import repoImages from "./repoImages.json";

export const myWork = () => {
  const url = "https://api.github.com/users/jyy009/repos";
  const portfolioContainer = document.getElementById("portfolio-section");

  const fetchProjects = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const processDataFromFetch = async () => {
    const data = await fetchProjects();
    if (!data) {
      throw new Error("Failed to fetch data");
    }

    const filteredRepo = data.filter((repos) => repos.name.includes("project"));

    console.log(filteredRepo);

    return filteredRepo.map((repo) => {
      let filteredName = repo.name.replace("project-", "");
      console.log(
        repo.name,
        filteredName,
        repo.description,
        repo.html_url,
        repo.homepage
      );

      return {
        name: repo.name,
        filteredName,
        description: repo.description,
        gitLink: repo.html_url,
        deployLink: repo.homepage,
      };
    });
  };

  const displayData = async () => {
    // const data = await processDataFromFetch();

    const workh2 = document.createElement("h2");
    workh2.textContent = "My Work";
    portfolioContainer.appendChild(workh2);

    data.forEach((repo) => {
      const myWorkTemplate = document.getElementById("my-work-template");
      const cloneMyWorkTemplate = myWorkTemplate.content.cloneNode(true);

      const workImage = cloneMyWorkTemplate.querySelector("#work-image");
      const repoImage = repoImages.find((img) => img.repoName === repo.name);
      console.log("repoImages:", repoImages);

      if (repoImage) {
        workImage.setAttribute("src", repoImage.imageUrl);
      } else {
        console.error(`No image found for repo: ${repo.name}`);
      }

      const workName = cloneMyWorkTemplate.querySelector(".work-name");
      workName.textContent = repo.filteredName;

      const workDescription =
        cloneMyWorkTemplate.querySelector(".work-description");
      workDescription.textContent = repo.description;

      const workGitLink = cloneMyWorkTemplate.querySelector(".work-git");
      workGitLink.setAttribute("href", repo.gitLink);

      const workLinkLink = cloneMyWorkTemplate.querySelector(".work-live");
      workLinkLink.setAttribute("href", repo.deployLink);

      portfolioContainer.appendChild(cloneMyWorkTemplate);
    });
  };

  displayData();
};
