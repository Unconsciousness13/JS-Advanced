function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;

            this.comments = [];
        }

        addComment(newComment) {
            this.comments.push(newComment);
        }


        toString() {
            let result = super.toString() + `\nRating: ${this.likes - this.dislikes}`;

            if (this.comments.length > 0) {

                let commentsInfo = this.comments.join('\n * ');
                result += `\nComments:\n * ${commentsInfo}`;
            }

            return result;
        }

    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this; //?
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`;
        }
    }

    return { Post, SocialMediaPost, BlogPost };
}