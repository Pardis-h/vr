const hero = document.querySelector(".hero");
const heroImg = "./assets/img/hero-min.jpg";

const panorama = new PANOLENS.ImagePanorama(heroImg);
const viewer = new PANOLENS.Viewer({
  container: hero,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  horizontalView : true,
  cameraFov: 90,
});
viewer.add(panorama);
viewer.OrbitControls.noZoom = true;
// Lock horizontal view
if ( viewer.horizontalView ) {
  viewer.OrbitControls.minPolarAngle = Math.PI / 2;
  viewer.OrbitControls.maxPolarAngle = Math.PI / 2;
}
// viewer.enableControl(1);

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
