const posts = [
    { title: 'post one', body: 'this is post one' },
    { title: 'post two', body: 'this is post two' }
];

function getPost() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title} </li>`

        });
        document.body.innerHTML = output;

    }, 1000)
}

function creeatePost(post) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            posts.push(post)
            const error = false;
            if (!error) {
                res();
            } else {
                rej('Error : something went wrong')
            }
        }, 2000)
    })
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(posts.length!=0){
                posts.pop();
                resolve()
            }else{
                reject('error')
            }
            
        }, 2000);
    })
}

function updateTime() {
    return new Promise((res,rej)=>{
        setTimeout(() => {
            var time = new Date();

           let  output = `<li>${time} </li>`

       
        document.body.innerHTML = output;
            // console.log(time)
            res()
        },5000);
    })


}

Promise.all([creeatePost({ title: 'post three', body: 'this is post three' }),updateTime()]).then(getPost)
// Promise.all([deletePost(),updateTime()]).then(getPost)

