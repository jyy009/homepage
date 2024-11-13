export const myWork = () => {
  const url = "https://api.github.com/users/jyy009/repos";
  const pageContainer = document.getElementById("page-container");

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
      console.log(repo.name);
      let filteredName = repo.name.replace("project-", "");
      console.log(filteredName, repo.description);
      return { filteredName, description: repo.description };
    });
  };

  const displayData = async () => {
    const data = await processDataFromFetch();
    console.log(data);

    data.map((item) => {
      const myWorkTemplate = document.getElementById("my-work-template");
      const cloneMyWorkTemplate = myWorkTemplate.content.cloneNode(true);
      pageContainer.appendChild(cloneMyWorkTemplate);

      const workName = document.querySelector(".work-name");
      workName.textContent = item.filteredName;

      const workDescription = document.querySelector(".work-description");
      workDescription.textContent = item.description;
    });
  };

  displayData();
};
