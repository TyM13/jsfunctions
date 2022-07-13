let usernames = [`winner`, `user2`, `user3`, `user4winner`, `user5`];
let counter = 0
while (counter < usernames.length){
    let lower_user_name = usernames[counter].toLowerCase();
    let does_include = lower_user_name.includes(`winner`);
    
    if(does_include === true){
        console.log(`we have a winner`);
        console.log(`name ${usernames[counter]}`);
    }else{
        console.log()
    }
    counter++
}

