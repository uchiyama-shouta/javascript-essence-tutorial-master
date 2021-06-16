// const url = 'users.json'
// fetch(url).then(res => {
//    return res.json();
// }).then(json => {
//    console.log(json);
//    for(const user of json) {
//       console.log(`I'm ${user.name}, ${user.age} years old`)
//    }
// })

async function fetchUsers() {
   const url = 'users.json';
   const res = await fetch(url);
   const json = await res.json();
   console.log(json);
   for(const user of json){
      console.log(`I'm ${user.name}, ${user.age}`);
   }
}

fetchUsers()