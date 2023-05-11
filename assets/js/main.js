const hero = document.querySelector(".hero");
const heroImg = "./assets/img/hero.jpg";

const panorama = new PANOLENS.ImagePanorama(heroImg);
const viewer = new PANOLENS.Viewer({
  container: hero,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
  // controlButtons: [],
  cameraFov: 90,
  // output : "console"
});
viewer.add(panorama);

// list of project
const projectImgLists = [
  "./assets/img/02.jpg",
  "./assets/img/01.jpg",
  "./assets/img/03.jpg",
  "./assets/img/04.jpg",
];
const projectImg = document.querySelectorAll(".card-img-top");

const ProjectImageVR = (item, index) => {
  const panaIndex = new PANOLENS.ImagePanorama(projectImgLists[index]);
  const viewerIndex = new PANOLENS.Viewer({
    container: item,
    controlBar: false,
    cameraFov: 90,
  });
  viewerIndex.add(panaIndex);
};
const newProjectImg = projectImg.forEach(ProjectImageVR);
