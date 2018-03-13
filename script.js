var coin = {
    state: 0,
    flip: function() {
        this.state = Math.random() * (1 - 0) + 0;
        Math.round(this.state);
        return this.state
    },
    toString: function() {
        if (this.state == 1) {
            stringPlacement('T');
        } else {
            stringPlacement('H')
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
        return img;
        let parent = document.getElementById('parent')
        parent.appendChild(img)
    }
};

for (let i = 0; i < 20; i++) {
    coin.flip();
    coin.toString();
    console.log(coin.toString)
};

function stringPlacement(char) {
    let newElement = document.createElement('p')
    let elementText = document.createTextNode(char)
    newElement.appendChild(elementText)
    document.getElementById('text').appendChild(newElement)
}