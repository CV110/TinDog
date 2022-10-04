class Info {
    constructor(data) {
        Object.assign(this, data)

    }
    
    getMainPhoto() {
        const {name, avatar, age, bio} = this
        return `
        
        <img class="main-image" src="${avatar}">
        <h1 class="photo-text name">${name}, ${age}</h1>
        <h3 class="photo-text frase">${bio}</h3>
        ` 
    }
    getLiked() {
        const {name, avatar, age, bio, hasBeenSwiped} = this
        
        return `<img class="like-or-not" src="images/badge-like.png">
        <img class="main-image" src="${avatar}">
        <h1 class="photo-text name">${name}, ${age}</h1>
         <h3 class="photo-text frase">${bio}</h3>`
       

    }
    getCross() {
        const {name, avatar, age, bio, hasBeenSwiped} = this
        
        return `<img class="like-or-not" src="images/badge-nope.png">
        <img class="main-image" src="${avatar}">
        <h1 class="photo-text name">${name}, ${age}</h1>
         <h3 class="photo-text frase">${bio}</h3>`
       

    }
}

export {Info}