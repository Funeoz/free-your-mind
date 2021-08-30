const imgArray = ['1.jpg', '2.jpg', '3.jpg']
const videosArray = ["e2mhQf8RjQs", "3adhnLRoxig", "NUTXkDFvOOE", "DBTb71UzPmY", "l2eq59oAqYI"]
const randomImg = Math.floor(Math.random() * imgArray.length);
const randomVid = Math.floor(Math.random() * videosArray.length);

document.body.setAttribute("style", `background-image: url(../assets/img/${imgArray[randomImg]});`);
let embed = document.createElement('iframe');
embed.setAttribute("src", `https://www.youtube-nocookie.com/embed/${videosArray[randomVid]}?autoplay=1"`);
embed.setAttribute("frameborder", "0");
document.body.appendChild(embed);