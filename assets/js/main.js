const hero = document.querySelector(".hero");
const heroImg = "./assets/img/hero.jpg";

const panorama = new PANOLENS.ImagePanorama(heroImg);
const panoramaCamera = new PANOLENS.CameraPanorama(hero);
const viewer = new PANOLENS.Viewer({
  container: hero,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  horizontalView : true,
  cameraFov: 90,
});
viewer.add(panorama);
viewer.OrbitControls.noZoom = true;
viewer.setCameraControl(panoramaCamera);


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
    horizontalView : true,
    cameraFov: 90,
    // controlBar: false,
  });
  viewerIndex.add(panaIndex);
  viewerIndex.OrbitControls.noZoom = true;
};
const newProjectImg = projectImg.forEach(ProjectImageVR);
