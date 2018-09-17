//ES6 classes
class Github{
    constructor() {
        this.client_id = '404a50280bd3da724e3f';
        this.clien_secret = '2a024f1bcc73e3d325aa96524bc61d6bfc5b40d2';
    }

    //GET user method
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.clien_secret}`);

        const profile = await profileResponse.json();

        return {
            profile: profile
        }
    }
}