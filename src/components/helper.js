var imgList=[
    "https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg",
    "https://img.freepik.com/free-photo/front-view-smiley-girl-outdoors_52683-99768.jpg",
    "https://c02.purpledshub.com/uploads/sites/48/2023/02/why-sky-blue-2db86ae.jpg?w=1029&webp=1",
    "https://img.freepik.com/premium-photo/anime-landscape-sky-clouds-stars-stars-moon-moon-moon_81048-11271.jpg",
    "https://i.pinimg.com/564x/51/b3/0b/51b30bb5c35274dcd5476fe1155361b1.jpg",
    "https://lh3.googleusercontent.com/proxy/KmBG5uN1YqdD2_guX5GQXIXIZg_Jy60jnw-vQCgp3FUHQTcPGQ_FsVJ9SyMamwVmbKDi6XJNuonfR49M0f2LitTUkuBjQVqkSetAOrMdRisWCsA8NZtjNqbHXAol-dH83xqKwSL3FvSaqOKZM2z3J66IJTJnbke6oDvKizp9",
    "https://c4.wallpaperflare.com/wallpaper/382/991/650/anime-boy-tattoo-colorful-eyes-shape-wallpaper-preview.jpg"

]
export  function url() {
    return imgList[Math.floor(Math.random() * imgList.length)];
           
          };
var nameList = [
    'Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
  ];
  export  function generate() {
return nameList[Math.floor(Math.random() * nameList.length)];
       
      };
      const time=["Yesterday","07:30 AM","10:00 AM","12:00 PM"

      ];
      export function took(){
        return time[Math.floor(Math.random() * time.length)];
       
      };
      
  export    function generateRandomText(length) {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomText = '';
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charset.length);
          randomText += charset[randomIndex];
        }
      
        return randomText;
      }
      