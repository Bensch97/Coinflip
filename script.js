var coin = {
    state: 0,
    flip: function() {
        this.state = Math.round(Math.random() * 1);
        return this.state
    },
    toString: function() {
        if (this.state == 1) {
            return 'T';
        } else {
            return 'H';
        }
        // return “H” or “T” depending on whether this.state is 0 or 1
    },
    toHTML: function() {
        var img = document.createElement("img");
        if (this.state == 1) {
            img.src = "quarter_tail.jpg"
        } else {
            img.src = "quarter_head.jpg"
        }
        // set the properties of the image element to show either heads or tails
        let parent = document.getElementById('parent')
        parent.appendChild(img)
        return img;
    }
};

for (let i = 0; i < 20; i++) {
    coin.flip();
    console.log(coin.toString())
};

for (let i = 0; i < 20; i++) {
    coin.flip();
    coin.toHTML();
}