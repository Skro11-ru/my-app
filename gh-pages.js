import { publish } from "gh-pages";

publish(
  "build", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/Skro11-ru/my-app.git", // Update to point to your repository
    user: {
      name: "one", // update to use your name
      email: "two", // Update to use your email
    },
    dotfiles: true,
  },
  () => {
    console.log("Deploy Complete!");
  }
);
