const quotes = [{
    quote: `"Mindfulness is the aware, balanced acceptance of the present experience. It isn't more complicated than that. It is opening to or receiving the present moment, pleasant or unpleasant, just as it is, without either clinging to it or rejecting it."`,
    writer: `"Joseph Goldstein"`
}, {
    quote: `"Mindfulness is the aware, balanced acceptance of the present experience. It isn't more complicated than that. It is opening to or receiving the present moment, pleasant or unpleasant, just as it is, without either clinging to it or rejecting it."`,
    writer: `"Joseph Goldstein"`
}, {
    quote: `"The practice of mindfulness allows us to become aware of the stream of thoughts and feelings that we usually identify with as our self."`,
    writer: `"Sam Harris"`
}, {
    quote: `"You can’t control how you feel. But you can always choose how you act."`,
    writer: `"Sam Harris"`
}, {
    quote: `"Awakening is not changing who you are, but discarding who you are not."`,
    writer: `"Tara Brach`
}, {
    quote: `"Mindfulness is the key to transforming your relationship with life."`,
    writer: `"Tara Brach`
}, {
    quote: `"You are the sky. Everything else – it’s just the weather."`,
    writer: `"Loch Kelly"`
}, {
    quote: `"Meditation is not about getting anywhere else. It’s about allowing yourself to be exactly where you are and as you are, and for the world to be exactly as it is in this moment."`,
    writer: `"Loch Kelly"`
}, {
    quote: `"You can't stop the waves, but you can learn to surf."`,
    writer: `"Jon Kabat-Zinn"`
}, {
    quote: `"Mindfulness means paying attention in a particular way: on purpose, in the present moment, and non-judgmentally.`,
    writer: `"Jon Kabat-Zinn"`
}, {
    quote: `"Realize deeply that the present moment is all you ever have."`,
    writer: `"Eckhart Tolle"`
}, {
    quote: `"The power for creating a better future is contained in the present moment: You create a good future by creating a good present."`,
    writer: `"Eckhart Tolle"`
}, {
    quote: `"The mind is everything. What you think, you become."`,
    writer: `"Buddha`
}, {
    quote: `"In the beginner's mind, there are many possibilities. In the expert's mind, there are few." `,
    writer: `"Shunryu Suzuki"`
}, {
    quote: ``,
    writer: ``
}, {
    quote: ``,
    writer: ``
}, {
    quote: ``,
    writer: ``
},
]

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quote.length);

    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;
})

