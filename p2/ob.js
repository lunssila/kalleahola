// Obfuscated song sources in Base64
const songSources = [
    "Li4vc29uZ3MvMDEubXAz", // "../songs/01.mp3"
    "Li4vc29uZ3MvMDIubXAz", // "../songs/02.mp3"
    "Li4vc29uZ3MvMDMubXAz", // "../songs/03.mp3"
    "Li4vc29uZ3MvMDQubXAz", // "../songs/04.mp3"
    "Li4vc29uZ3MvMDUubXAz", // "../songs/05.mp3"
    "Li4vc29uZ3MvMDYubXAz", // "../songs/06.mp3"
    "Li4vc29uZ3MvMDcubXAz", // "../songs/07.mp3"
    "Li4vc29uZ3MvMDgubXAz", // "../songs/08.mp3"
    "Li4vc29uZ3MvMDkubXAz", // "../songs/09.mp3"
    "Li4vc29uZ3MvMTAubXAz"  // "../songs/10.mp3"
];

// Function to decode Base64
function decodeBase64(base64) {
    return atob(base64);
}

// Load the song sources dynamically
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.simp-playlist .simp-source');
    elements.forEach((el, index) => {
        if (songSources[index]) {
            el.setAttribute('data-src', decodeBase64(songSources[index]));
        }
    });
});