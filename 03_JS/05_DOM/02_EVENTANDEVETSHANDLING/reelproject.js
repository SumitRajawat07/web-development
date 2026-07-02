const reels = [
{
    username: "",
    likeCount: 1250,
    isLiked: false,
    commentCount: 86,
    caption: "Enjoying the beautiful sunset 🌅",
    userProfile: "images/profile1.jpg",
    video: "./reel/video.mp4",
    sharedCount: 34,
    isFollowed: false
  },
  {
    username: "",
    likeCount: 3489,
    isLiked: true,
    commentCount: 215,
    caption: "Morning workout done! 💪",
    userProfile: "images/profile2.jpg",
    video: "./reel/video.mp4",
    sharedCount: 98,
    isFollowed: true
  },
  {
    username: "",
    likeCount: 875,
    isLiked: false,
    commentCount: 42,
    caption: "Coffee and coding ☕💻",
    userProfile: "images/profile4.jpg",
    video: "./reel/video.mp4",
    sharedCount: 19,
    isFollowed: false
  },
  {
    username: "",
    likeCount: 5420,
    isLiked: true,
    commentCount: 391,
    caption: "Beach vibes are the best 🌊",
    userProfile: "images/profile4.jpg",
    video: "./reel/video.mp4",
    sharedCount: 187,
    isFollowed: true
  },
  {
    username: "",
    likeCount: 1964,
    isLiked: false,
    commentCount: 103,
    caption: "Late night gaming session 🎮",
    userProfile: "images/profile7.jpg",
    video: "./reel/video.mp4",
    sharedCount: 52,
    isFollowed: false
  },
  {
    username: "",
    likeCount: 7428,
    isLiked: true,
    commentCount: 624,
    caption: "Travel memories that last forever ✈️",
    userProfile: "images/profile7.jpg",
    video: "./reel/video.mp4",
    sharedCount: 274,
    isFollowed: true
  },
  {
    username: "",
    likeCount: 2890,
    isLiked: false,
    commentCount: 177,
    caption: "Exploring new places every weekend 📍",
    userProfile: "images/profile7.jpg",
    video: "./reel/video.mp4",
    sharedCount: 88,
    isFollowed: false
  },
  {
    username: "",
    likeCount: 615,
    isLiked: true,
    commentCount: 29,
    caption: "Learning JavaScript one step at a time 🚀",
    userProfile: "images/profile8.jpg",
    video: "./reel/video.mp4",
    sharedCount: 13,
    isFollowed: true
  },
  {
    username: "",
    likeCount: 4812,
    isLiked: false,
    commentCount: 342,
    caption: "Music makes everything better 🎵",
    userProfile: "images/profile9.jpg",
    video: "./reel/video.mp4",
    sharedCount: 145,
    isFollowed: false
  },
  {
    username: "",
    likeCount: 9301,
    isLiked: true,
    commentCount: 802,
    caption: "Never stop learning and growing 🌟",
    userProfile: "images/profile10.jpg",
    video: "./reel/video.mp4",
    sharedCount: 421,
    isFollowed: true
  }
];
let sum = "";
reels.forEach(function(elem){
    sum = sum + `<div class="reel">
                    <video autoplay loop muted src="./reel/video.mp4"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="https://images.unsplash.com/photo-1571513800374-df1bbe650e56?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                            <h4>pratviraj gour</h4>
                            <button>Follow</button>
                        </div>
                         <h3>Yasmin Wijnaldum for Roberto Cavalli SS'19 ✨</h3>
                    </div>
                    <div class="right">
                        <div class="like">
                            <h4 class = "like-icon"><i class="ri-heart-line"></i></h4>
                            <h6>200</h6>
                        </div>
                        <div class="comment">
                            <h4 class = "comment-icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>69</h6>
                        </div>
                        <div class="share">
                            <h4 class = "share-icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>88</h6>
                        </div>
                        <div class="menu">
                            <h4 class = "menu-icon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div>`
   
});
var allreels = document.querySelector(".all-reels");
allreels.innerHTML = sum;
