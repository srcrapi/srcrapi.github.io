const friendList = [
  {
    title: "rovier's site",
    url: "https://rovierr.github.io",
    src: "https://github.com/rovierr.png?size=256",
    alt: "my brother's github",
  },
  {
    title: "celvet's github",
    url: "https://github.com/ThiagoCelvet",
    src: "https://github.com/ThiagoCelvet.png?size=256",
    alt: "celvet's github",
  },
];

const createFriendList = () => {
  let friends = document.getElementById("friends");

  friendList.map((friend) => {
    let link = document.createElement("a");
    let image = document.createElement("img");

    link.title = friend.title;
    link.href = friend.url;
    link.rel = "external";
    link.target = "_blank";

    image.src = friend.src;
    image.alt = friend.alt;

    link.appendChild(image);
    friends.append(link);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  createFriendList();
});
