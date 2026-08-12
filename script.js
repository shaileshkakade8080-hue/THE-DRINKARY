/* =========================================================
   THE DRINKARY - MUSIC PLAYER & CLOCK SCRIPT
========================================================= */

// All track filenames from Music directory
const songFiles = [
    "Ek Mulaqat Zaroori Hai Sanam Sad Mix DJ Aadesh Sitamarhi Sirf Tum Old Bollywood Mix.m4a",
    "Aashiqui Aa Gayi (Full Video) Radhe Shyam Prabhas, Pooja Hegde Mithoon, Arijit Singh Bhushan K.m4a",
    "Bai Mazya Ga Dudhat Nahi Pani - DJ Yogi Remix Dudhat Nahi Pani Dj Gavlan Dahi Handi 2022.m4a",
    "AK Russia Ki Muha Pe Bandana Billo Russian Bandana Dhanda Nyoliwala New Haryanvi Songs 2024.m4a",
    "ARE DWARPALO KANHAIYA SE KEHDO Cover Song Kanwar Singh Grewal Official Video Punjabi Singer.m4a",
    "BEKHUDI Full Video Song TERAA SURROOR Himesh Reshammiya, Farah Karimaee T-Series.m4a",
    "Cash Flow - Riar Saab Sambata Prod. by Zero Chill Official Music Video.m4a",
    "Challa Full Song Jab Tak Hai Jaan Shah Rukh Khan, Katrina Kaif Rabbi A. R. Rahman Gulzar.m4a",
    "Chimani Mazi Udun Geli.m4a",
    "Desi Desi Na Bolya Kar Chori Re New Haryanvi Song 2021 Boys Attitude Song 2024.m4a",
    "Diet Mountain Dew.m4a",
    "Ek Mulaqat Zaroori Hai Sanam Lyrical Video Sirf Tum Ameen Sabri, Fareed Sabri Sanjay Kapoor.m4a",
    "GANGSTER SHIT 1st (Official Video) SAMBATA I Prod By. KHAKIEE.m4a",
    "Hass Hass X Tamally Maak Mashup AfroBeat Chillout - DJ HARSH SHARMA X SUNIX THAKOR.m4a",
    "Kaam 25 DIVINE Sacred Games Netflix.m4a",
    "KALYANI (with Shreya Ghoshal) OFFICIAL MUSIC VIDEO ARJN KDS FIFTY4 RONN SHREYA GHOSHAL.m4a",
    "Kitni Bechain Hoke - (lyrics) Kasoor Alka Yagnik, Udit Narayan Nadeem-Shravan Hindi Song.m4a",
    "Kiya Kiya Re Sanam Akshay Kumar, Katrina Kaif, Nana Patekar, Anil Kapoor Old Hindi Viral Song.m4a",
    "Laal Divyachi Gadi Official Song ft. rockSun Yathavkash Marathi Movie MVF Marathi Rap Song.m4a",
    "Long Drive (Remix) DJ RAWKING RAWQUEEN RS Visuals Akshay Kumar Asin.m4a",
    "Lyrical Asalaam-e-Ishqum Full Song with Lyrics Gunday Priyanka Chopra Neha Bhasin, Bappi Lahiri.m4a",
    "Mere Mehboob Qayamat Yogi (Original) - Mr. X In Bombay - Kishore Kumars Greatest Hits - Old Songs.m4a",
    "Mi Ahe Tamashe Wali Dj Song Sataryala Gele Mi Sanglila Gele Dj Niks Marathi Lavani Lokgeet.m4a",
    "Mora Piya (8D Audio) Raajneeti Aadesh Shrivastava Ranbir Kapoor, Katrina Kaif.m4a",
    "Pailwan Ala (Halgi Mix) Dj Yash YJ Pune Its YJ Remix PAILWAN ALA G DJ Trending Song.m4a",
    "Pankha Fast.m4a",
    "rockSun - DIGGAJ (Official Music Video).m4a",
    "rockSun - MAHAAN Official Music Video.m4a",
    "rockSun - Russian Queen.m4a",
    "rockSun - SALTANAT Official Music Video Prod. By KHAKIEE.m4a",
    "Saagar Jaisi Akhonwali (The Unwind Mix) I Sreerama Chandra.m4a",
    "Saiyaara (1980) Ft. Kishore Kumar full song (Old version) Old is Gold song actor amitabh ai aisong.m4a",
    "Shalu Nach G - Sambl X Privte Mix - Its Ganya Style - Gorya Gorya Angala Tuzya Bhalun Mi gelo Dj.m4a",
    "Sitaare Ikkis Agastya Nanda, Simar Bhatia, Dharmendra Deol, Jaideep A Arijit Singh, Amitabh B.m4a",
    "Sohna Sanwla Remastered - Awais Raza Nekokara (Prod.Afternightvibe).m4a",
    "Tabish Pasha - Leke Pehla Pehla Pyar (Live From Ahl-e-Dil Show).m4a",
    "Teri Meri Kahaani - Slowed Reverb Arijit Singh, Palak muchhal.m4a",
    "Tu itni Khoobsurat Hai Reloaded - Prakriti Kakar Amjad Nadeem Jubin Nautiyal Gaurav Jang.m4a",
    "Tuza Zaga g.mp4",
    "Vedi Jhali Radha Vs Tomato Tomato DJ_Abhiii I Instagram Viral DJ Song I Insta Trending.m4a",
    "Ya Ali ( Gangstar ) Zubeen Garg Song zubeengarg song yaali.m4a",
    "Yeh Duniya Yeh Mehfil Mere Kaam Ki Nahin LIVE IN CANADA Rafi Sahab.m4a",
    "Yeh Teri Aankhen Jhuki Jhuki - Fareb Abhijeet Faraaz Khan Suman Ranganathan.m4a",
    "Zamaane Official Video Kanwar Grewal Sana Sultaan Tru Makers New Hindi Songs 2023.m4a",
    "तुझा झगा गं वाऱ्यावर उडतो Tujha Jhaga Ga Marathi Full Lyrical Video Atul Lohar.m4a",
    "तुम तो ठहरे परदेसी साथ क्या निभाओगे_Hind_Bewfa_Song_.m4a",
    "या दहीवडीत तुला ग लखाबाई Ya Dahivadit Tulag Lakhabai संभळ हलगी म.m4a"
];

// Match exact casing of Music folder
const playlist = songFiles.map(file => ({
    title: file.replace(/\.[^/.]+$/, ""),
    subtitle: "The Drinkary Radio",
    file: `Music/${file}`
}));

let currentTrackIndex = 0;

// DOM Elements
const audio = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const trackTitle = document.getElementById("trackTitle");
const trackSubtitle = document.getElementById("trackSubtitle");
const progressBar = document.getElementById("progressBar");
const currentTimeEl = document.getElementById("currentTime");
const durationTimeEl = document.getElementById("durationTime");
const clockEl = document.getElementById("clock");

/* REAL-TIME CLOCK */
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    clockEl.textContent = `${hours}:${minutes} ${ampm}`;
}
setInterval(updateClock, 1000);
updateClock();

/* LOAD TRACK */
function loadTrack(index) {
    if (!playlist || playlist.length === 0) return;
    const track = playlist[index];
    
    audio.src = encodeURI(track.file);
    audio.load();
    
    trackTitle.textContent = track.title;
    trackSubtitle.textContent = track.subtitle;
}

/* PLAY AUDIO */
function playAudio() {
    if (!audio.src) {
        loadTrack(currentTrackIndex);
    }
    
    audio.play().then(() => {
        playBtn.textContent = "❚❚";
    }).catch(err => {
        console.error("Playback Error:", err);
        nextBtn.click();
    });
}

playBtn.addEventListener("click", () => {
    if (audio.paused) {
        playAudio();
    } else {
        audio.pause();
        playBtn.textContent = "▶";
    }
});

/* NEXT & PREVIOUS CONTROLS */
prevBtn.addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
    playAudio();
});

nextBtn.addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    playAudio();
});

/* TIME FORMATTER */
function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

audio.addEventListener("loadedmetadata", () => {
    durationTimeEl.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
        progressBar.value = (audio.currentTime / audio.duration) * 100;
        currentTimeEl.textContent = formatTime(audio.currentTime);
        durationTimeEl.textContent = formatTime(audio.duration);
    }
});

progressBar.addEventListener("input", () => {
    if (audio.duration) {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    }
});

audio.addEventListener("ended", () => {
    nextBtn.click();
});

// Initial load
loadTrack(0);