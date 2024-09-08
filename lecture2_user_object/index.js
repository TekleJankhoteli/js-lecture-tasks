let userImg = document.getElementById("userImg");
let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userFollowers = document.getElementById("userFollowers");
let userFollowings = document.getElementById("userFollowings");
let active = document.getElementById("active");

let user = {
  userImgUrl: "./assets/manImg.png",
  userName: "Tekle Jankhoteli",
  userEmail: "jankhotelitekla@gmail.com",
  followerNumber: 50,
  followingNumber: 5,
  activateStatus: true,

  isactive() {
    if (!this.activateStatus) {
      active.style.display = "none";
    } else {
      active.style.display = "inline-block";
    }
  },

  displayuserInfo() {
    userImg.src = this.userImgUrl;
    userName.innerHTML = this.userName;
    userEmail.innerHTML = this.userEmail;
    userFollowers.innerHTML = this.followerNumber;
    userFollowings.innerHTML = this.followingNumber;

    this.isactive();
  },
};

user.displayuserInfo();
