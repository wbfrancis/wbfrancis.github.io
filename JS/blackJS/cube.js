const gameCards = {
    0: {
        back: 0,
        narration: 'You live in a cube.',
        choices: [
            {
                text: 'I’m happy, I like cubes.',
                link: 1
            },
            {
                text: 'I’m unsatisfied with my life in this cube.',
                link: 16
            },
        ]
    },
    1: {
        back: 0,
        narration: 'You spend all day, every day, in your cube, perfectly content. You enjoy the six uniform sides, the orderliness. Eventually though, you come to a realization: you only know for a fact that it looks like a cube from the inside. From the outside it could look like anything. Even a sphere.',
        choices: [
            {
                text: 'Not a sphere! No!',
                link: 2
            },
            {
                text: 'Spheres are cool too.',
                link: 15
            },
        ]
    },
    2: {
        back: 1,
        narration: 'This insight is severely psychologically damaging to you. The thought of living in a sphere makes you physically ill.',
        choices: [
            {
                text: 'I must make peace with my life in this sphere.',
                link: 3
            },
            {
                text: 'Wait, this is ridiculous. I can’t be in a sphere. I’d feel the room roll around.',
                link: 6
            },
        ]
    },
    3: {
        back: 2,
        narration: 'But how?',
        choices: [
            {
                text: 'Meditate!',
                link: 4
            },
            {
                text: 'Distract myself!',
                link: 5
            },
        ]
    },
    4: {
        back: 3,
        narration: 'You undergo a rigorous program of mindfulness and transcendental meditation. Over weeks and months you reach a state of cosmic enlightenment. There is no sphere, no cube. These are artificial categories built by your ego to make you suffer. You move beyond the need for an ego, for the notion of yourself as fundamentally separate from the rest of reality. You experience what the Buddhists call “nirvana.” You become the sphere. And the sphere becomes you.',
        choices: null
    },
    5: {
        back: 3,
        narration: 'You distract yourself with video games, television, and other forms of media. It works, to a point. But all your dreams become nightmares. Every night you dream of a sphere slowly rolling towards you. Sometimes it bounces. You wake up every night at 3:00am screaming, your body still trapped in sleep paralysis. Eventually you get some therapy and it helps, but you still feel like it’s too expensive for what you’re actually getting.',
        choices: null
    },
    6: {
        back: 2,
        narration: 'You convince yourself that you do not in fact live in a sphere. However, that still doesn\'t mean you live in a cube.',
        choices: [
            {
                text: "No worries, as long as it isn't a sphere, I'm happy.",
                link: 7
            },
            {
                text: "I cannot live in this bizarre purgatory, this realm of doubt and irregular geometries! Oh woe is me!",
                link: 12
            },
        ]
    },
    7: {
        back: 6,
        narration: 'You live out your days in this maybe-not-a-cube. Shortly after your 32nd birthday, you start an online relationship with someone named "yggy_smalls209". You call them yggy, for short.',
        choices: [
            {
                text: "Tell yggy that you think you live in a cube, but you aren't sure.",
                link: 8
            },
            {
                text: "Do not tell yggy anything about your cube situation. You don't want them to think you are weird.",
                link: 11
            },
        ]
    },
    8: {
        back: 7,
        narration: "Immediately, yggy responds to your message. It seems they live in a trapezoid and have similar suspicions about it as you do with your cube situation. They express immense gratitude to have someone to share this psychic burden with.",
        choices: [
            {
                text: "Tell yggy you love them.",
                link: 9
            },
            {
                text: "Tell yggy that, on the contrary, life in a maybe-trapezoid is entirely different than life in a maybe-cube and that you do not appreciate their attempt to relate to you.",
                link: 10
            },
        ]
    },
    9: {
        back: 8,
        narration: "Yggy confesses that they love you too. You decide to get married. One of the moderators of the Discord server on which the two of you met officiates the ceremony. You marry a person you've never actually seen. It turns out to be a pretty good marriage with healthy boundaries. Years later, in your will, you bequeath your maybe-cube to yggy. You pass away with no regrets, having loved someone who loved you deeply in return.",
        choices: null
    },
    10: {
        back: 8,
        narration: "Yggy does not respond to your message. You do not hear from them ever again. You content yourself with a life of isolated introspection, interrogating the nature of room-based geometry and what it means to know things. You attempt to mathematically prove that you live in a cube. You do not succeed.",
        choices: null
    },
    11: {
        back: 7,
        narration: "As the weeks pass, your relationship begins to sour. Yggy becomes distant. Eventually, yggy publically breaks up with you on the Discord server where you two met. They give few specifics other than a vague feeling that you were withholding. This public post is deeply embarrassing and forces you to leave that Discord server permanently. You become a bird enthusiast.",
        choices: null
    },
    12: {
        back: 6,
        narration: "You are pleased to find your degree in 19th Century Literature is paying dividends, at least in your rhetoric if not your bank account.",
        choices: [
            {
                text: "This cube thing is my white whale.",
                link: 13
            },
            {
                text: "Man, I need to get a hobby.",
                link: 14
            },
        ]
    },
    13: {
        back: 12,
        narration: "You spend the rest of your life hunting for a solution to this cube thing. It utterly consumes you. You go so mad with revenge that you poop your pants one day while researching the mating patterns of cubes. You clean yourself up and continue in your mission until the day you die.",
        choices: null
    },
    14: {
        back: 12,
        narration: "You start learning how to play pool. You buy a leather jacket. You're certainly much cooler now, although the cube thing still hangs in the back of your head on lonely nights.",
        choices: null
    },
    15: {
        back: 1,
        narration: "You are perfectly content with your life and all its myriad possibilities. This is great for your mental health but bad for storytelling.",
        choices: null
    },
    16: {
        back: 0,
        narration: "You decide to break out of your cube prison. But how?",
        choices: [
            {
                text: "I will break down the walls of this six-sided insult to human freedom with my bare hands!",
                link: 17
            },
            {
                text: "I will dig a hole with a spoon, like that Shawshank movie I think (You've never actually seen The Shawsank Redemption, so you can't be sure)",
                link: 30
            },
        ]
    },
    17: {
        back: 16,
        narration: "You break your hands.",
        choices: [
            {
                text: "Ow! That was a bad idea!",
                link: 18
            },
            {
                text: "Grr... These hands will heal and I will try again!",
                link: 29
            },
        ]
    },
    18: {
        back: 17,
        narration: "You nurse your wounds, realizing that physical force may not work.",
        choices: [
            {
                text: "Well, I tried once. Better give up.",
                link: 19
            },
            {
                text: "Perhaps I can reason with the cube.",
                link: 20
            },
        ]
    },
    19: {
        back: 18,
        narration: "You content yourself with life in the cube. Your hands heal weirdly. Your right thumb clicks every time you bend it. But it's not so bad.",
        choices: null
    },
    20: {
        back: 18,
        narration: "You develop an extensive PowerPoint presentation titled \"Why I Should Be Able To Leave the Cube.\" You rehearse for days and days, well aware that you only get one shot at this. Then the day comes. You get up early, too nervous to sleep. You dress up in your Sunday finest, set up the projector, and take a breath...",
        choices: [
            {
                text: "Deliver your prepared presentation to the cube.",
                link: 21
            },
            {
                text: "Panic, and at the last minute decide to improvise the whole thing.",
                link: 22
            },
        ]
    },
    21: {
        back: 20,
        narration: "Everything goes exactly as planned. You finish the presentation with a flourish and thank the cube for its time. You wait for its response. It never comes. You wonder what you did wrong. Did you not look it in the eyes enough? Or too much? These questions haunt you daily in your sleep and waking life, like revenants of what might have been.",
        choices: null
    },
    22: {
        back: 20,
        narration: "You scrap the PowerPoint and deliver an impassioned oration on the virtues of doors in walls. Quickly running out of substantive things to say, you come up with a catchy slogan on the spot: \"Doors are cubes, let them in!\" You repeat this to the cube several dozen times and wrap up your speech, feeling good. The next morning, you see in the wall of the cube a plain white door.",
        choices: [
            {
                text: "Open the door.",
                link: 23
            },
            {
                text: "Do not open the door. You don't actually want to leave, you just wanted the option.",
                link: 28
            },
        ]
    },
    23: {
        back: 22,
        narration: "Slowly, cautiously, you open the door and step outside. You are in a vast field of corn that stretches as far as the eye can see. You look back at the cube to find it is in fact not a cube on the outside but a sphere. That settles the question. You're never going back into that *spits* dirty sphere. You choose a direction:",
        choices: [
            {
                text: "North, the way the wind blows.",
                link: 24
            },
            {
                text: "East, away from the setting sun, that dirty sphere.",
                link: 27
            },
        ]
    },
    24: {
        back: 23,
        narration: "You walk north. After many miles, you notice a mountain range in the distance. You approach the mountains to find a small mining village at the foothills. The villagers welcome you and feed you. The next morning, they invite you to stay in their village.",
        choices: [
            {
                text: "Yes, I think I'll stay here for a while.",
                link: 25
            },
            {
                text: "No, thank you. I must be moving on.",
                link: 26
            },
        ]
    },
    25: {
        back: 24,
        narration: "You take up a pickaxe and join them in the mines. Its tough work, but the people here are good, noble stock. Over time, the village becomes a place you call home.",
        choices: null
    },
    26: {
        back: 24,
        narration: "You roam the earth, like wandering Cain, relying on the abundance of nature and the kindness of strangers. Your life is filled with adventure and with moments of lonely starlight introspection.",
        choices: null
    },
    27: {
        back: 23,
        narration: "You walk east and continue through the night. Eventually the morning sun rises in front of you. You turn around in digust. You walk west now, going back where you came from and past your sphere-cube-home. The sun, however, eventually moves to the west to set. You turn around and walk east, yet again.",
        choices: null
    },
    28: {
        back: 22,
        narration: "You cannot overcome your fear of the outside, and so you accept what you already know. You accept the cube, vertices and all.",
        choices: null
    },
    29: {
        back: 17,
        narration: "It takes your hands several weeks to heal, but you wait and subsequently break your hands punching the wall again. This time your bones break skin. This open fracture becomes septic and you die painfully. The cube mourns your death.",
        choices: null
    },
    30: {
        back: 16,
        narration: "Your spoon breaks immediately.",
        choices: [
            {
                text: "I'll try my fork!",
                link: 31
            },
        ]
    },
    31: {
        back: 30,
        narration: "No luck.",
        choices: [
            {
                text: "My knife?",
                link: 32
            },
        ]
    },
    32: {
        back: 31,
        narration: "You have no more eating utensils. You lose the will to fight. You submit to the cube's will. It is not an unbenevolent master.",
        choices: null
    },
}
    
