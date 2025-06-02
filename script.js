let truth = document.getElementById("truth");
let dare = document.getElementById("dare");
let result = document.getElementById("result");

let truthData = [
    "What’s a secret you've never told your parents?",
    "Have you ever had a crush on someone totally off-limits?",
    "What’s the most embarrassing thing you've done in front of a crush?",
    "What’s your most awkward date experience?",
    "What’s something you’ve done that you still feel guilty about?",
    "If you had to date one person in this group, who would it be?",
    "Have you ever had a dream about someone here?",
    "What’s your biggest insecurity?",
    "What was your most ridiculous childhood fear?",
    "What's the worst lie you’ve ever told?",
    "If you could delete one memory, what would it be?",
    "Who do you secretly envy and why?",
    "Have you ever cheated or helped someone cheat?",
    "What's a rumor you helped spread that you knew wasn’t true?",
    "What’s the biggest thing you’ve kept from your best friend?",
    "Who’s someone you pretend to like but don’t?",
    "What's your guilty pleasure show or song?",
    "What’s the weirdest thing you've Googled late at night?",
    "Have you ever been caught doing something embarrassing?",
    "If your life was a movie, what would it be rated and why?",
    "What’s your biggest turn-on?",
    "Have you ever been heartbroken? What happened?",
    "What’s something you’ve done purely out of peer pressure?",
    "If you could swap lives with anyone, who would it be and why?",
    "What’s one thing you would never tell your ex?"
];

let dareData = [
    "Post an embarrassing childhood photo on social media.",
    "Do your best animal impression until someone guesses it.",
    "Send a heart emoji to the third person in your contact list.",
    "Try to do a handstand against a wall (or attempt one!).",
    "Read your last 5 Google searches out loud.",
    "Let someone go through your phone photos for 30 seconds.",
    "Do a dramatic soap opera scene with a partner.",
    "Text your crush and ask if they believe in soulmates.",
    "Speak in an accent for the next 3 rounds.",
    "Do a dance with no music for 1 minute.",
    "Do your most ridiculous laugh. Repeat it 3 times.",
    "Act like a cat for 2 minutes.",
    "Tell a cringe joke and laugh like it’s hilarious.",
    "Eat something with your eyes closed chosen by the group.",
    "Try to guess who’s behind you with your eyes closed.",
    "Record a fake motivational speech and send it to a friend.",
    "Let someone write a status for you and post it for 10 mins.",
    "Imitate a famous celebrity until someone guesses who.",
    "Do your best villain laugh while staring into the camera.",
    "Balance a spoon on your nose for 10 seconds.",
    "Wrap yourself in toilet paper like a mummy.",
    "Call a random contact and sing them ‘Happy Birthday’.",
    "Do 20 jumping jacks while shouting a random word each time.",
    "Draw a mustache on your face and keep it for 10 minutes.",
    "Act like you're in love with a random object in the room."
];

function getTruth() {
    let quest = truthData[Math.floor(Math.random() * truthData.length)];
    result.innerHTML = quest;
}

function getDare() {
    let quest = dareData[Math.floor(Math.random() * dareData.length)];
    result.innerHTML = quest;
}

truth.addEventListener("click", getTruth);
dare.addEventListener("click", getDare);
