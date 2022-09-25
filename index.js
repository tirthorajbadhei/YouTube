const API_KEY = `AIzaSyBi4L3gWvMeyUsZwRwfWYfX-Hs2TlPHCjs`;

const search = async () => {
  // "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]";

  try {
    const query = document.getElementById("query").value;

    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${API_KEY}`
    );
    const data = await res.json();
    const acutal_data = data.items;
    appedVideos(acutal_data);
    console.log(acutal_data);
  } catch (err) {
    console.log(err);
  }
};
const view = async () => {
  // "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]";

  try {
    const query = document.getElementById("query").value;

    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${API_KEY}&order=viewCount`
    );
    const data = await res.json();
    const acutal_data = data.items;
    appedVideos(acutal_data);
    console.log(acutal_data);
  } catch (err) {
    console.log(err);
  }
};
const alpha = async () => {
  // "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]";

  try {
    const query = document.getElementById("query").value;

    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${API_KEY}&order=title`
    );
    const data = await res.json();
    const acutal_data = data.items;
    appedVideos(acutal_data);
    console.log(acutal_data);
  } catch (err) {
    console.log(err);
  }
};
const rating = async () => {
  // "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]";

  try {
    const query = document.getElementById("query").value;

    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${API_KEY}&order=rating`
    );
    const data = await res.json();
    const acutal_data = data.items;
    appedVideos(acutal_data);
    console.log(acutal_data);
  } catch (err) {
    console.log(err);
  }
};
const defaults = async () => {
  // "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]";

  try {
    // const query = document.getElementById("query").value;

    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=iphone&key=${API_KEY}`
    );
    const data = await res.json();
    const acutal_data = data.items;
    appedVideos(acutal_data);
    console.log(acutal_data);
  } catch (err) {
    console.log(err);
  }
};
defaults();

const appedVideos = (acutal_data) => {
  const container_div = document.getElementById("container");
  container_div.innerHTML = null;
  acutal_data.forEach(({ snippet, id }) => {
    const title = snippet.title;
    const videoID = id.videoId;
    const thumbnail = snippet.thumbnails.high.url;
    const channel = snippet.channelTitle;

    let data = {
      videoID,
      thumbnail,
    };

    const div = document.createElement("div");

    div.addEventListener("click", function () {
      storeClick(data);
    });
    const img = document.createElement("img");
    img.src = thumbnail;
    const titles = document.createElement("h3");
    titles.innerText = title;
    const channel_html = document.createElement("h5");
    channel_html.innerText = channel;
    div.append(img, titles, channel_html);
    container_div.append(div);
  });
};

let storeClick = (data) => {
  localStorage.setItem("clicked_item", JSON.stringify(data));
  document.location.href = "Youtube2.html";
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
