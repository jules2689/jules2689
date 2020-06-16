const { ReadmeBox } = require('readme-box')

// Iroh quotes borrowed from https://codepen.io/jgobeille/pen/pozmeZO
let quotes = [
  {
    quote: "Pride is not the opposite of shame, but its source.",
    source: "Uncle Iroh",
    citation: "Episode 2.09 'Bitter Work'"
  },
  {
    quote: "Sharing tea with a fascinating stranger is one of life’s true delights.",
    source: "Uncle Iroh",
    citation: "Episode 2.08 'The Chase'"
  },
  {
    quote: "Sometimes life is like this tunnel. You can’t always see the light at the end of the tunnel, but if you keep moving, you will come to a better place.",
    source: "Uncle Iroh",
    citation: "Episode 2.19 'The Crossroads of Destiny'"
  },
  {
    quote: "Life happens wherever you are, whether you make it or not.",
    source: "Uncle Iroh",
    citation: "Episode 2.13 'City of Walls Secrets'"
  },
  {
    quote: "You have come to the crossroads of your destiny. It is time for you to choose. It is time for you to choose good.",
    source: "Uncle Iroh",
    citation: "Episode 2.20 'The Crossroads of Destiny'"
  },
  {
    quote: "There is nothing wrong with a life of peace and prosperity. I suggest you think about what it is you want from your life, and why.",
    source: "Uncle Iroh",
    citation: "Episode 2.17 'Lake Laogai'"
  },
  {
    quote: "It is important to draw wisdom from many different places",
    source: "Uncle Iroh",
    citation: "Episode 2.09 'Bitter Work'"
  },
  {
    quote: "Hope is something you give yourself. That is the meaning of inner strength.",
    source: "Uncle Iroh",
  },
  {
    quote: "Destiny is a funny thing. You never know how things are going to work out.",
    source: "Uncle Iroh",
  },
  {
    quote: "While it is always best to believe in oneself, a little help from others can be a great blessing.",
    source: "Uncle Iroh",
  },
  {
    quote: "It is usually best to admit mistakes when they occur, and to seek to restore honor.",
    source: "Uncle Iroh",
  },
]

async function main() {
  let randomIndex = Math.floor(Math.random() * quotes.length - 1 + 1); 
  const quote = quotes[randomIndex];
  console.log(`New quote: ${quote.quote}`)

  let newContent = `
  <table>
  <tr>
    <td><img height="80" src='https://raw.githubusercontent.com/jules2689/jules2689/master/iroh.png'></td>
    <td>

  > ${quote.quote}
  >
  > ~ ${quote.source}`
  if (quote.citation) newContent = newContent + ` (${quote.citation})`
  newContent = newContent + '\n</td></tr></table>'

  console.log(`New Content ${newContent}`)

  await ReadmeBox.updateSection(newContent, {
    owner: 'jules2689',
    repo: 'jules2689',
    token: process.env.GITHUB_TOKEN,
    section: 'iroh'
  })
}

main().then(() => {
  console.log("Done!")
}).catch(() => {
  console.log("Error!")
})
