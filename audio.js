

const playSongButton = document.getElementById("play-song");
// playSongButton.addEventListener("click", function () {
//   alert("play clicked")
// })

function playSong() {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContext();
  let contentBuffer = null;
}

const audioApiData = () => {
  return fetch("http://www.songsterr.com/a/ra/songs.xml?pattern=Marley")
    .then((response) => response.json())
    .then((res) => console.log("res", res))
    .catch((err) => {
      console.error(err);
    });
};
playSongButton.addEventListener("click", function () {
  audioApiData();
});
