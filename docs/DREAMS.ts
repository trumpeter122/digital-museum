// - **Scope**:
//
//   - Dreams mentioned in *Memories, Dreams, Reflections*'s main body (excluding the appendices)
//
//   - Dreams dreamt by Jung himself
//
//   - Explicitly marked **Dreams**, not images, visions, or fantasies
//
// - **Structure**:
//
//   - Ordered in their appearance in the book
//
//   - Dreams of close proximity in the book are put togther

type Content = {
  en: string | string[]; // A sentence or multiple sentences
  [key: string]: string | string[];
};

type TextBlock = {
  id: string;
  text: Content;
};

// A piece of contextual information for the dream
type Context = TextBlock & {
  textBlockType: "context";
};

// A piece Jung's own interpretation of the dream
type Interpretation = TextBlock & {
  textBlockType: "interpretation";
};

// A piece of information on the impact of the dream on Jung's life or thinking
type Impact = TextBlock & {
  textBlockType: "impact";
};

// A scene in the dream
type Scene = TextBlock & {
  textBlockType: "scene";
  image?: {
    path: string; // Relative path to the image depicting the scene
    _prompt?: string; // Prompt for image generation
  };
};

type Dream = {
  id: string;
  title: Content;
  time: Content;
  location: any;
  // Context, Interpretation, Impact, and Scene of the dreams, each one being potentially multiple, ordered stricly according to Jung's original narration
  contents: (Context | Interpretation | Impact | Scene)[];
};

export const DREAMS: {
  dreams: Dream[];
  metadata: any;
} = {
  dreams: [
    {
      id: "d01",
      title: {
        en: "The Underground Phallus",
      },
      time: {
        en: "Childhood, approx. 3-4 years old",
      },
      location: {
        txt: {
          path: "./docs/Memories-Dreams-Reflections.txt",
          line: 758,
        },
      },
      contents: [
        {
          textBlockType: "context",
          id: "c01",
          text: {
            en: [
              "My mother had taught me a prayer which I had to say every evening. I gladly did so because it gave me a sense of comfort in face of the vague uncertainties of the night:",
              "Spread out thy wings, Lord Jesus mild,",
              "And take to thee thy chick, thy child.",
              "If Satan would devour it,",
              "No harm shall o'erpower it,",
              "So let the angels sing!",
              'Lord Jesus was comforting, a nice, benevolent gentleman like Flerr  Wegenstein up at the castle, rich, powerful, respected, and mindful of little children at night. Why he should be winged like a bird was a conundrum that did not worry me any further. Far more significant and thought-provoking was the fact that little children were compared to chicks which Lord Jesus evidently "took" reluctantly, like bitter medicine. This was difficult to understand. But I understood at once that Satan liked chicks and had to be prevented from eating them. So, although Lord Jesus did not like the taste, he ate them anyway, so that Satan would not get them.. As far as that went, my argument was comforting. But now I was hearing that Lord Jesus "took" other people to himself as well, and that this "taking" was the same as putting them in a hole in the ground.',
              "This sinister analogy had unfortunate consequences. I began to distrust Lord Jesus. He lost the aspect of a big, comforting, benevolent bird and became associated with the gloomy black men in frock coats, top hats, and shiny black boots who busied themselves with the black box.",
              'These ruminations of mine led to my first conscious trauma. One hot summer day I was sitting alone, as usual, on the road in front of the house, playing in the sand. The road led past the house up a hill, then disappeared in the wood on the hilltop. So from the house you could see a stretch of the road. Looking up, I saw a figure in a strangely broad hat and a long black garment coming down from the wood. It looked like a man wearing women\'s clothes. Slowly the figure drew nearer, and I could now see that it really was a man wearing a kind of black robe that reached to his feet. At the sight of him I was overcome with fear, which rapidly grew into deadly terror as the frightful recognition shot through my mind: "That is a Jesuit." Shortly before, I had overheard a conversation between my father and a visiting colleague concerning the nefarious activities of the Jesuits. From the half-irritated, half-fearful tone of my father\'s remarks I gathered that "Jesuits" meant something specially dangerous, even for my father- Actually I had no idea what Jesuits were, but I was familiar with the word "Jesus" from my little prayer.',
              "The man coming down the road must be in disguise, I thought; that was why he wore women's clothes. Probably he had evil intentions. Terrified, I ran helter-skelter into the house, rushed up the stairs, and hid under a beam in the darkest corner of the attic. I don't know how long I remained there, but it must have been a fairly long time, because, when I ventured down again to the first floor and cautiously stuck my head out of the window, far and wide there was not a trace of the black figure to be seen. For days afterward the hellish fright clung to my limbs and kept me in the house. And even when I began to play in the road again, the wooded hilltop was still the object of my uneasy vigilance. Later I realized, of course, that the black figure was a harmless Catholic priest.",
              "At about the same time--l could not say with absolute certainty whether it preceded this experience or not— I had the earliest dream I can remember, a dream which was to preoccupy me all my life. I was then between three and four years old.",
            ],
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: "The vicarage stood quite alone near Laufen castle, and there was a big meadow stretching back from the sexton's farm. In the dream I was in this meadow.",
          },
          image: {
            _prompt:
              "The vicarage stood quite alone near Laufen castle, and there was a big meadow stretching back from the sexton's farm.",
            path: "./assets/dreams-d01-s01.png",
          },
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: "Suddenly I discovered a dark, rectangular, stone-lined hole in the ground. I had never seen it before. I ran forward curiously and peered down into it.",
          },
          image: {
            _prompt: "A dark, rectangular, stone-lined hole in the ground.",
            path: "./assets/dreams-d01-s02.png",
          },
        },
        {
          textBlockType: "scene",
          id: "s03",
          text: {
            en: "Then I saw a stone stairway leading down. Hesitantly and fearfully, I descended.",
          },
          image: {
            _prompt: "A stone stairway leading down to the underground.",
            path: "./assets/dreams-d01-s03.png",
          },
        },
        {
          textBlockType: "scene",
          id: "s04",
          text: {
            en: "At the bottom was a doorway with a round arch, closed off by a green curtain. It was a big, heavy curtain of worked stuff like brocade, and it looked very sumptuous. Curious to see what might be hidden behind, I pushed it aside.",
          },
          image: {
            _prompt:
              "A dark, underground doorway with a round arch, closed off by a green curtain. It was a big, heavy curtain of worked stuff like brocade, and it looked very sumptuous.",
            path: "./assets/dreams-d01-s04.png",
          },
        },
        {
          textBlockType: "scene",
          id: "s05",
          text: {
            en: [
              "I saw before me in the dim light a rectangular chamber about thirty feet long. The ceiling was arched and of hewn stone. The floor was laid with flagstones, and in the center a red carpet ran from the entrance to a low platform. On this platform stood a wonderfully rich golden throne. I am not certain, but perhaps a red cushion lay on the seat. It was a magnificent throne, a real king's throne in a fairy tale. Something was standing on it which I thought at first was a tree trunk twelve to fifteen feet high and about one and a half to two feet thick. It was a huge thing, reaching almost to the ceiling. But it was of a curious composition: it was made of skin and naked flesh, and on top there was something like a rounded head with no face and no hair. On the very top of the head was a single eye, gazing motionlessly upward.",
              'It was fairly light in the room, although there were no windows and no apparent source of light. Above the head, however, was an aura of brightness. The thing did not move, yet I had the feeling that it might at any moment crawl off the throne like a worm and creep toward me. I was paralyzed with terror. At that moment I heard from outside and above me my mother\'s voice. She called out,"Yes, just look at him. That is the man-eater!" That intensified my terror still more, and I awoke sweating and scared to death.',
            ],
          },
          image: {
            _prompt:
              "In the dim light there was a rectangular chamber about thirty feet long. The ceiling was arched and of hewn stone. The floor was laid with flagstones, and in the center a red carpet ran from the entrance to a low platform. On this platform stood a wonderfully rich golden throne. A red cushion lay on the seat. It was a magnificent throne. Something was standing on it, twelve to fifteen feet high and about one and a half to two feet thick. It was a huge thing, reaching almost to the ceiling. But it was of a curious composition: it was made of skin and naked flesh, and on top there was something like a rounded head with no face and no hair. On the very top of the head was a single eye, gazing motionlessly upward.",
            path: "./assets/dreams-d01-s05.png",
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: [
              "For many nights afterward I was afraid to go to sleep, because I feared I might have another dream like that. ",
              'This dream haunted me for years. Only much later did I realize that what I had seen was a phallus, and it was decades before I understood that it was a ritual phallus. I could never make out whether my mother meant, "This is the man-eater," or, "That is the man-eater." In the first case she would have meant that not Lord Jesus or the Jesuit was the devourer of little children, but the phallus; in the second case that the "man-eater" in general was symbolized by the phallus, so that the dark Lord Jesus, the Jesuit, and the phallus were identical. ',
              'The abstract significance of the phallus is shown by the fact that it was enthroned by itself, "ithyphallically" (upright) The hole in the meadow probably represented a grave. The grave itself was an underground temple whose green curtain symbolized the meadow, in other words the mystery of Earth with her covering of green vegetation. The carpet was blood-red. What about the vault? Perhaps I had already been to the Munot, the citadel of Schaffhausen? This is not likely, since no one would take a three- year-old child up there. So it cannot be a memory-trace. Equally, I do not know where the anatomically correct phallus can have come from. The interpretation of the orificium urethrae as an eye, with the source of light apparently above it, points to the etymology of the word phallus (shining, bright).',
              'At all events, the phallus of this dream seems to be a subterranean God "not to be named," and such it remained throughout my youth, reappearing whenever anyone spoke too emphatically about Lord Jesus. Lord Jesus never became quite real for me, never quite acceptable, never quite lovable, for again and again I would think of his underground counterpart, a frightful revelation which had been accorded me without my seeking it. The Jesuit\'s "disguise" cast its shadow over the Christian doctrine I had been taught. Often it seemed to me a solemn masquerade, a kind of funeral at which the mourners put on serious or mournful faces but the next moment were secretly laughing and not really sad at all. Lord Jesus seemed to me in some ways a god of death, helpful, it is true, in that he scared away the terrors of the night, but himself uncanny, a crucified and bloody corpse. Secretly, his love and kindness, which I always heard praised, appeared doubtful to me, chiefly because the people who talked most about "dear Lord Jesus" wore black frock coats and shiny black boots which reminded me of burials. They were my father\'s colleagues as well as eight of my uncles-all parsons. For many years they inspired fear in me--not to speak of occasional Catholic priests who reminded me of the terrifying Jesuit who had irritated and even alarmed my father. In later years and until my confirmation, I made every effort to force myself to take the required positive attitude to Christ. But I could never succeed in overcoming my secret distrust. ',
              'The fear of the "black man," which is felt by every child, was not the essential thing in that experience; it was, rather, the recognition that stabbed through my childish brain: "That is a Jesuit." So the important thing in the dream was its remarkable symbolic setting and the astounding interpretation: "That is the man-eater." Not the child\'s ogre of a man-eater, but the fact that this was the man-eater, and that it was sitting on a golden throne beneath the earth. For my childish imagination it was first of all the king who sat on a golden throne; then, on a much more beautiful and much higher and much more golden throne far, far away in the blue sky sat God and Lord Jesus, with golden crowns and white robes. Yet from this same Lord Jesus came the "Jesuit," in black women\'s garb, with a broad black hat, down from the wooded hill. I had to glance up there every so often to see whether another danger might not be approaching. In the dream I went down into the hole in the earth and found something very different on a golden throne, something non-human and underworldly, which gazed fixedly upward and fed on human flesh. It was only fifty years later that a passage in a study of religious ritual burned into my eyes, concerning the motif of cannibalism that underlies the symbolism of the Mass. Only then did it become clear to me how exceedingly unchild-like, how sophisticated and oversophisticated was the thought that had begun to break through into consciousness in those two experiences. Who was it speaking in me? Whose mind had devised them? What kind of superior intelligence was at work? I know every numbskull will babble on about "black man," "man- eater," "chance," and "retrospective interpretation," in order to banish something terribly inconvenient that might sully the familiar picture of childhood innocence. Ah, these good, efficient, healthy- minded people, they always remind me of those optimistic tadpoles who bask in a puddle in the sun, in the shallowest of waters, crowding together and amiably wriggling their tails, totally unaware that the next morning the puddle will have dried up and left them stranded. ',
              "Who spoke to me then? Who talked of problems far beyond my knowledge? Who brought the Above and Below together, and laid the foundation for everything that was to fill the second half of my life with stormiest passion? Who but that alien guest who came both from above and from below? ",
              "Through this childhood dream I was initiated into the secrets of the earth. What happened then was a kind of burial in the earth, and many years were to pass before I came out again. Today I know that it happened in order to bring the greatest possible amount of light into the darkness. It was an initiation into the realm of darkness. My intellectual life had its unconscious beginnings at that time.",
            ],
          },
        },
      ],
    },
    {
      id: "d02+03",
      title: {
        en: "Natural Sciences: The Bone and the Creature",
      },
      time: {
        en: "Late adolescence, before choosing university studies (Student Years, ca. 1895)",
      },
      location: {
        txt: {
          path: "./docs/Memories-Dreams-Reflections.txt",
          line: 3812,
        },
      },
      contents: [
        {
          textBlockType: "context",
          id: "c01",
          text: {
            en: 'Some weeks previously, just at the time when No. 1 and No. 2 were wrestling for a decision, I had two dreams.',
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "In the first dream I was in a dark wood that stretched along the Rhine. I came to a little hill, a burial mound, and began to dig.",
              "After a while I turned up, to my astonishment, some bones of prehistoric animals.",
            ],
          },
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: [
              "Then came a second dream. Again I was in a wood; it was threaded with watercourses, and in the darkest place I saw a circular pool, surrounded by dense undergrowth.",
              "Half immersed in the water lay the strangest and most wonderful creature: a round animal, shimmering in opalescent hues, and consisting of innumerable little cells, or of organs shaped like tentacles; it was a giant radiolarian, measuring about three feet across.",
              "It aroused in me an intense desire for knowledge, so that I awoke with a beating heart.",
            ],
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: "These two dreams decided me overwhelmingly in favor of science, and removed all my doubts.",
          },
        },
      ],
    },
    {
      id: "d04",
      title: {
        en: "The Kindling in the Dark",
      },
      time: {
        en: "University student, early medical studies",
      },
      location: {
        txt: {
          path: "./docs/Memories-Dreams-Reflections.txt",
          line: 3935,
        },
      },
      contents: [
        {
          textBlockType: "context",
          id: "c01",
          text: {
            en: "About this time I had a dream which both frightened and encouraged me.",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "It was night in some unknown place, and I was making slow and painful headway against a mighty wind. Dense fog was flying along everywhere.",
              "I had my hands cupped around a tiny light which threatened to go out at any moment. Everything depended on my keeping this little light alive.",
              "Suddenly I had the feeling that something was coming up behind me. I looked back, and saw a gigantic black figure following me.",
            ],
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: [
              'When I awoke I realized at once that the figure was a "specter of the Brocken," my own shadow on the swirling mists, brought into being by the little light I was carrying.',
              'I knew, too, that this little light was my consciousness, the only light I have... Though infinitely small and fragile in comparison with the powers of darkness, it is still a light, my only light.',
              "Now I knew that No. 1 was the bearer of the light, and that No. 2 followed him like a shadow. My task was to shield the light and not look back.",
            ],
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: "My view of the world spun around; I recognized clearly that my path led irrevocably outward—into study, moneymaking, responsibilities, entanglements, confusions, errors, submissions, defeats.",
          },
        },
      ],
    },
    {
      id: "d05",
      title: {
        en: "The Deceased Father: the Returns",
      },
      time: {
        en: "Six weeks after his death, winter 1896",
      },
      location: {
        txt: {
          path: "./docs/Memories-Dreams-Reflections.txt",
          line: 4305,
        },
      },
      contents: [
        {
          textBlockType: "context",
          id: "c01",
          text: {
            en: [
              'Once my mother spoke to me in her "second" voice, and remarked, "He died in time for you."',
              "After my father's death I moved into his room, and took his place inside the family.",
            ],
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "Six weeks after his death my father appeared to me in a dream. Suddenly he stood before me and said that he was coming back from his holiday. He had made a good recovery and was now coming home.",
              "I thought he would be annoyed with me for having moved into his room. But not a bit of it! Two days later the dream was repeated.",
            ],
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: "Later I kept asking myself: What does it mean that my father returns in dreams and that he seems so real? It forced me for the first time to think about life after death.",
          },
        },
      ],
    },
    {
      id: "d06",
      title: {
        en: "The Female Patient Saw from Below",
      },
      time: {
        en: "Early analytical practice",
      },
      location: {
        txt: {
          path: "./docs/Memories-Dreams-Reflections.txt",
          line: 5838,
        },
      },
      contents: [
        {
          textBlockType: "context",
          id: "c01",
          text: {
            en: "I once had a patient, a highly intelligent woman… after a while I began to feel that I was no longer getting at the correct interpretation of her dreams.",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "I was walking down a highway through a valley in late-afternoon sunlight. To my right was a steep hill. At its top stood a castle, and on the highest tower there was a woman sitting on a kind of balustrade.",
              "In order to see her properly, I had to bend my head far back. Even in the dream I had recognized the woman as my patient.",
            ],
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: "If in the dream I had to look up at the patient in this fashion, in reality I had probably been looking down on her. Dreams are, after all, compensations for the conscious attitude.",
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: "This produced an immediate change in the situation, and the treatment once more began to move forward.",
          },
        },
      ],
    },
    {
      id: "d07+08",
      title: {
        en: "The Jewish Female Patient",
      },
      time: {
        en: "Early analytical practice",
      },
      location: {
        txt: {
          path: "./docs/Memories-Dreams-Reflections.txt",
          line: 6046,
        },
      },
      contents: [
        {
          textBlockType: "context",
          id: "c01",
          text: {
            en: [
              "I well recall the case of a Jewish woman who had lost her faith. It began with a dream of mine in which a young girl, unknown to me, came to me as a patient.",
              'Suddenly it occurred to me that she must have an unusual father complex.',
            ],
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: "For the next day a young woman appeared. She was Jewish, daughter of a wealthy banker… At first I could not understand what her trouble was.",
          },
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: [
              "The following night I had another dream. A reception was taking place in my house, and behold, this girl was there too.",
              "She came up to me and asked, 'Haven't you got an umbrella? It is raining so hard.' I actually found an umbrella… But what happened instead? I handed it to her on my knees, as if she were a goddess.",
            ],
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: [
              "The dream had showed me that she was not just a superficial little girl, but that beneath the surface were the makings of a saint.",
              "She had no mythological ideas… In reality she was a child of God whose destiny was to fulfill His secret will.",
            ],
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: "In a week the neurosis had vanished. I had to awaken mythological and religious ideas in her… Thus her life took on a meaning, and no trace of the neurosis was left.",
          },
        },
      ],
    },
    {
      id: "d09",
      title: {
        en: "The Prehistoric Bones under the House",
      },
      time: {
        en: "During collaboration with Freud, before 1912",
      },
      location: {
        txt: {
          path: "./docs/Memories-Dreams-Reflections.txt",
          line: 6902,
        },
      },
      contents: [
        {
          textBlockType: "context",
          id: "c01",
          text: {
            en: "One dream in particular was important to me, for it led me for the first time to the concept of the 'collective unconscious.'",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "I was in a house I did not know, which had two stories. It was 'my house.' … Descending the stairs, I reached the ground floor.",
              "I came upon a heavy door, and opened it. Beyond it, I discovered a stone stairway that led down into the cellar… I entered a low cave cut into the rock. Thick dust lay on the floor, and in the dust were scattered bones and broken pottery… I discovered two human skulls, obviously very old and half disintegrated.",
            ],
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: [
              "It was plain to me that the house represented a kind of image of the psyche… Consciousness was represented by the salon.",
              "The deeper I went, the more alien and the darker the scene became… In the cave, I discovered remains of a primitive culture, that is, the world of the primitive man within myself.",
            ],
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: "This dream formed a kind of prelude to my book Wandlungen und Symbole der Libido and to the idea of the collective unconscious.",
          },
        },
      ],
    },
    {
      id: "d10+11",
      title: {
        en: "The Austrian Border and the Knight",
      },
      time: {
        en: "While writing Wandlungen und Symbole der Libido, ca. 1912",
      },
      location: {
        txt: {
          path: "./docs/Memories-Dreams-Reflections.txt",
          line: 7085,
        },
      },
      contents: [
        {
          textBlockType: "context",
          id: "c01",
          text: {
            en: "While I was working on this book, I had dreams which presaged the forthcoming break with Freud.",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "One of the most significant had its scene in a mountainous region on the Swiss-Austrian border.",
              'An elderly man in the uniform of an Imperial Austrian customs official walked past… someone informed me that the old man was not really there, but was the ghost of a customs official who had died years ago. "He is one of those who still couldn\'t die properly."',
            ],
          },
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: [
              "The dream had not reached its end… I was in an Italian city… A crowd came streaming toward me… In the midst of this stream of people walked a knight in full armor.",
              "He wore a helmet… and over this was a white tunic into which was woven, front and back, a large red cross. No one seemed to notice him; it was as though he were completely invisible to everyone but me.",
            ],
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: [
              "The extremely rigorous customs examination at the border seemed to me an allusion to analysis… I could not refuse to see the analogy with Freud.",
              "The knight belonged to the twelfth century… the world of the Knights of the Grail and their quest—for that was, in the deepest sense, my own world, which had scarcely anything to do with Freud's.",
            ],
          },
        },
      ],
    },
    {
      id: "d12+13",
      title: {
        en: "The Avian Anima and the Dead Ancients",
      },
      time: {
        en: "Christmas 1912 and the following period",
      },
      location: {
        txt: {
          path: "./docs/Memories-Dreams-Reflections.txt",
          line: 7401,
        },
      },
      contents: [
        {
          textBlockType: "context",
          id: "c01",
          text: {
            en: 'I asked myself: “But then what is your myth—the myth in which you do live?” At this point the dialogue with myself became uncomfortable… Then, around Christmas of 1912, I had a dream.',
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "I found myself in a magnificent Italian loggia with pillars, a marble floor, and a marble balustrade… My children were sitting at the table too.",
              "Suddenly a white bird descended… Immediately, the dove was transformed into a little girl… The little girl returned and tenderly placed her arms around my neck. Then she suddenly vanished; the dove was back and spoke slowly in a human voice. 'Only in the first hours of the night can I transform myself into a human being; while the male dove is busy with the twelve dead.'",
            ],
          },
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: [
              "One fantasy kept returning… This dream came: I was in a region like the Alyscamps near Arles… I came to the twelfth century—that is, to a crusader in chain mail who lay there with clasped hands.",
              "For a long time I looked at him and thought he was really dead. But suddenly I saw that a finger of his left hand was beginning to stir gently.",
            ],
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: [
              "The dream indicated an unusual activation of the unconscious… I was reminded of the Tabula Smaragdina… the twelve apostles, the twelve months.",
              "Dreams like this taught me that such contents are not dead, outmoded forms, but belong to our living being. In the course of years there developed from it the theory of archetypes.",
            ],
          },
        },
      ],
    },
    {
      id: "d14",
      title: {
        en: "The Frozen Worlds",
      },
      time: {
        en: "Spring–summer 1914, on the eve of World War I",
      },
      location: {
        txt: {
          path: "./docs/Memories-Dreams-Reflections.txt",
          line: 7600,
        },
      },
      contents: [
        {
          textBlockType: "context",
          id: "c01",
          text: {
            en: "Soon afterward, in the spring and early summer of 1914, I had a thrice-repeated dream.",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "In the middle of summer an Arctic cold wave descended and froze the land to ice.",
              "I saw, for example, the whole of Lorraine and its canals frozen and the entire region totally deserted by human beings. All living green things were killed by frost.",
            ],
          },
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: [
              "In the third dream frightful cold had again descended… There stood a leaf-bearing tree, but without fruit, whose leaves had been transformed by the effects of the frost into sweet grapes full of healing juices.",
              "I plucked the grapes and gave them to a large, waiting crowd.",
            ],
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: "On August 1 the world war broke out. Now my task was clear: I had to try to understand what had happened and to what extent my own experience coincided with that of mankind in general… An incessant stream of fantasies had been released.",
          },
        },
      ],
    },
    {
      id: "d15",
      title: {
        en: "The Killing of Siegfried",
      },
      time: {
        en: "December 1913",
      },
      location: {
        txt: {
          path: "./docs/Memories-Dreams-Reflections.txt",
          line: 7764,
        },
      },
      contents: [
        {
          textBlockType: "context",
          id: "c01",
          text: {
            en: "My imagination, however, began to play tricks with me. One night I lay awake thinking of my morbid fancies.",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "Suddenly I was seized by an overwhelming vision: I saw a cataract of blood pour from the mountains… In it a corpse floated by, a youth with blond hair and a wound in the head. He was followed by a gigantic black scarab and then by a red, newborn sun, rising up out of the depths of the water… At last it ceased, and the vision came to an end.",
            ],
          },
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: [
              "Six days later… I was with an unknown, brown-skinned man, a savage, in a lonely, rocky mountain landscape.",
              "I heard Siegfried's horn… We were armed with rifles and lay in wait… Then Siegfried appeared high up on the crest of the mountain… On a chariot made of the bones of the dead he drove at furious speed down the precipitous slope. When he turned a corner, we shot at him, and he plunged down, struck dead.",
              "A tremendous downfall of rain began, and I knew that it would wipe out all traces of the dead.",
            ],
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: [
              "Siegfried, I thought, represents what the Germans want to achieve, heroically to impose their will… The dream showed that the attitude embodied by Siegfried, the hero, no longer suited me. Therefore it had to be killed.",
              "The small, brown-skinned savage… was an embodiment of the primitive shadow. The rain showed that the tension between consciousness and the unconscious was being resolved.",
            ],
          },
        },
      ],
    },
    {
      id: "d16",
      title: {
        en: "Liverpool",
      },
      time: {
        en: "Mid-1920s, during mandala studies (ca. 1927–1928)",
      },
      location: {
        txt: {
          path: "./docs/Memories-Dreams-Reflections.txt",
          line: 8553,
        },
      },
      contents: [
        {
          textBlockType: "context",
          id: "c01",
          text: {
            en: "This is the dream I mentioned earlier: I found myself in a dirty, sooty city. It was night, and winter, and dark, and raining.",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "I was in Liverpool… We climbed up… When we reached the plateau, we found a broad square dimly illuminated by street lights.",
              "In the center was a round pool, and in the middle of it a small island… the little island blazed with sunlight. On it stood a single tree, a magnolia, in a shower of reddish blossoms… My companions commented on the abominable weather, and obviously did not see the tree.",
            ],
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: [
              "This dream represented my situation at the time… Liverpool is the 'pool of life.'",
              "This dream brought with it a sense of finality. I saw that here the goal had been revealed… Through this dream I understood that the self is the principle and archetype of orientation and meaning.",
            ],
          },
        },
      ],
    },
    {
      id: "d17+18",
      title: {
        en: "The Unknown Wing of the House: The Library and the Manor",
      },
      time: {
        en: "Recurring dreams before discovering alchemy; crucial dream around 1926",
      },
      location: {
        txt: {
          path: "./docs/Memories-Dreams-Reflections.txt",
          line: 8734,
        },
      },
      contents: [
        {
          textBlockType: "context",
          id: "c01",
          text: {
            en: "Before I discovered alchemy, I had a series of dreams which repeatedly dealt with the same theme. Beside my house stood another… wing or annex, which was strange to me.",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "Finally came a dream in which I reached the other wing. I discovered there a wonderful library, dating largely from the sixteenth and seventeenth centuries.",
              "Large, fat folio volumes, bound in pigskin, stood along the walls… Among them were a number of books embellished with copper engravings of a strange character… In the dream I was conscious only of the fascination exerted by them and by the entire library.",
            ],
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: "The unknown wing of the house was a part of my personality… It, and especially the library, referred to alchemy, of which I was ignorant, but which I was soon to study.",
          },
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: [
              "The crucial dream… came around 1926: I was in the South Tyrol. It was wartime… We had to cross a bridge and then go through a tunnel whose vaulting had been partially destroyed by the shells.",
              "Just as we reached the middle of the courtyard, in front of the main entrance, something unexpected happened: with a dull clang, both gates flew shut… The peasant leaped down from his seat and exclaimed, 'Now we are caught in the seventeenth century.'",
            ],
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: "Not until much later did I realize that it referred to alchemy, for that science reached its height in the seventeenth century… 'So that's it! Now I am condemned to study alchemy from the very beginning.'",
          },
        },
      ],
    },
    {
      id: "d19",
      title: {
        en: "The Unknown Wing of the House: The Fish Laboratory and the Reception Room for Spirits",
      },
      time: {
        en: "Mid-1940s, while working on the coniunctio and Christ symbolism",
      },
      location: {
        txt: {
          path: "./docs/Memories-Dreams-Reflections.txt",
          line: 9234,
        },
      },
      contents: [
        {
          textBlockType: "context",
          id: "c01",
          text: {
            en: "As with all problems that concerned me… that of the coniunctio was accompanied or heralded by dreams. In one of these dreams both this and the Christ problem were condensed in a remarkable image.",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "I dreamed once more that my house had a large wing which I had never visited… I came to a big double door… I found myself in a room set up as a laboratory.",
              "On shelves along the walls stood hundreds of bottles containing every imaginable sort of fish. I was astonished: so now my father was going in for ichthyology!",
            ],
          },
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: [
              "I noticed a curtain which bellied out from time to time… Suddenly Hans… appeared… He went, and was gone for some time… 'Yes, there is something. It's haunted in there!'",
              "I found a door which led to my mother's room… suspended from the ceiling were two rows of five chests each… each containing two beds… beds for visiting spirits to sleep.",
            ],
          },
        },
        {
          textBlockType: "scene",
          id: "s03",
          text: {
            en: "Opposite my mother's room was a door… I entered a vast hall… It was fitted out with easy chairs, small tables, pillars, sumptuous hangings, etc. A brass band was playing loudly… There was no one in the hall except the brass band blaring forth dance tunes and marches.",
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: [
              "The brass band in the hotel lobby suggested ostentatious jollity and worldliness… behind it lay something quite different: the fish laboratory and the hanging pavilions for spirits.",
              "The fish laboratory indicates my preoccupation with Christ, who himself is the fish (ichthys)… both my parents appeared burdened with the problem of the 'cure of souls,' which in fact was really my task.",
            ],
          },
        },
      ],
    },
    {
      id: "d20",
      title: {
        en: "The Deceased Father: The Bible and the Highest Presence",
      },
      time: {
        en: "Early 1950s, foreshadowing Answer to Job",
      },
      location: {
        txt: {
          path: "./docs/Memories-Dreams-Reflections.txt",
          line: 9417,
        },
      },
      contents: [
        {
          textBlockType: "context",
          id: "c01",
          text: {
            en: "The problem of Job in all its ramifications had likewise been foreshadowed in a dream.",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "It started with my paying a visit to my long-deceased father… I met him in his study… he fetched a big Bible down from a shelf, a heavy folio volume… The Bible my father held was bound in shiny fishskin.",
              "He opened it at the Old Testament… He did this so swiftly and so learnedly that I could not follow him… Dr. Y… and his son… thought that my father was going off the deep end and what he said was simply senile prattle.",
            ],
          },
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: [
              "Then the scene changed… We heard loud thumps… my father indicated to me that the place was haunted…",
              "We climbed a narrow staircase to the second floor… a large hall which was the exact replica of the divan-i-kaas of Sultan Akbar… From the center a steep flight of stairs ascended… At the top… a small door… my father said, 'Now I will lead you into the highest presence.' Then he knelt down and touched his forehead to the floor.",
            ],
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: [
              "The fishskin marks the Bible as an unconscious content… his audience is in part incapable of understanding.",
              "The dream-image of the lobby was a gigantic mandala… the upper door led to a solitary chamber where lived Uriah… the dream describes how the unconscious task… was working out.",
            ],
          },
        },
      ],
    },
    {
      id: "d21",
      title: {
        en: "The Footsteps outside the Bollingen Tower",
      },
      time: {
        en: "Late winter / early spring 1924",
      },
      location: {
        txt: {
          path: "./docs/Memories-Dreams-Reflections.txt",
          line: 9905,
        },
      },
      contents: [
        {
          textBlockType: "context",
          id: "c01",
          text: {
            en: "On another such still night when I was alone in Bollingen… I awoke to the sound of soft footsteps going around the Tower.",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "Distant music sounded, coming closer and closer, and then I heard voices laughing and talking.",
              "I opened the window—all was still. Again the dream began: once more I heard footsteps, talk, laughter, music… I had a visual image of several hundred dark-clad figures… pouring in around the Tower… with a great deal of loud trampling, laughing, singing, and playing of accordions.",
            ],
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: [
              "It seemed to me they had come out of curiosity… It would seem most likely to have been a synchronistic phenomenon.",
              "I later found a seventeenth-century parallel in Rennward Cysat’s chronicle describing Wotan’s army of departed souls; I also learned of the Reisläufer gatherings in spring.",
            ],
          },
        },
      ],
    },
    {
      id: "d22",
      title: {
        en: "The Arabian Prince",
      },
      time: {
        en: "1925, night before sailing home from North Africa",
      },
      location: {
        txt: {
          path: "./docs/Memories-Dreams-Reflections.txt",
          line: 10456,
        },
      },
      contents: [
        {
          textBlockType: "context",
          id: "c01",
          text: {
            en: "The night before we embarked from Marseilles I had a dream which, I sensed, summed up the whole experience.",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "I was in an Arab city… The city was situated in a broad plain, and had a wall all around it… The casbah in the interior of the city was surrounded by a wide moat.",
              "When I was about halfway across it, a handsome, dark Arab… came toward me… he attacked me and tried to knock me down… we crashed against the railing… both of us fell into the moat, where he tried to push my head under water… in my turn I pushed his head under water.",
            ],
          },
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: [
              "Then the scene of the dream changed, and he was with me in a large vaulted octagonal room in the center of the citadel… On the floor lay an open book with black letters written in magnificent calligraphy… I had the feeling that this was 'my book,' that I had written it.",
              "The young prince… sat to the right of me… I explained to him that now that I had overcome him he must read the book… I placed my arm around his shoulders and forced him… to read the book.",
            ],
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: [
              "The Arab youth… was a figuration of the self… a messenger of the self. His attempt to kill me was an echo of the motif of Jacob's struggle with the angel.",
              "My aim is, through insight, to make it more conscious, so that we can find a common modus vivendi… The dream reveals how my encounter with North Africa affected me.",
            ],
          },
        },
      ],
    },
    {
      id: "d23",
      title: {
        en: "The Black Barber",
      },
      time: {
        en: "1925, during the East Africa expedition",
      },
      location: {
        txt: {
          path: "./docs/Memories-Dreams-Reflections.txt",
          line: 11722,
        },
      },
      contents: [
        {
          textBlockType: "context",
          id: "c01",
          text: {
            en: "During the entire trip my dreams stubbornly followed the tactic of ignoring Africa… Only once during the entire expedition did I dream of a Negro.",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: "He had been my barber in Chattanooga, Tennessee. In the dream he was holding a tremendous, red-hot curling iron to my head, intending to make my hair kinky—that is, to give me Negro hair.",
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: [
              "I took this dream as a warning from the unconscious; it was saying that the primitive was a danger to me.",
              "The dreams dealt with my personal problems… My European personality must under all circumstances be preserved intact.",
            ],
          },
        },
      ],
    },
    {
      id: "d24",
      title: {
        en: "The Grail and the Islands",
      },
      time: {
        en: "1938, while ill in India",
      },
      location: {
        txt: {
          path: "./docs/Memories-Dreams-Reflections.txt",
          line: 12077,
        },
      },
      contents: [
        {
          textBlockType: "context",
          id: "c01",
          text: {
            en: "India honored me with three doctorates… It was a little too much of a good thing, and I needed a retreat. A ten-day spell in the hospital offered it to me.",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "I found myself, with a large number of my Zurich friends and acquaintances, on an unknown island… On the rocky coast at the southern end of the island was a medieval castle.",
              "We stood in its courtyard… This was the castle of the Grail, and… there would be a 'celebration of the Grail' here… A German professor… was not conscious of the meaning of the legend, nor of its living presentness.",
            ],
          },
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: [
              "I discovered that I was standing by the wall of a tall castle; the lower portion of the wall was covered by a kind of trellis… of black iron artfully formed into a grapevine… Suddenly I saw… a tiny, iron, hooded gnome, a cucullatus, scurrying from one little house to the next.",
            ],
          },
        },
        {
          textBlockType: "scene",
          id: "s03",
          text: {
            en: [
              "The dream changed… It was said to be in the northern part of the island… There was no bridge, no boat… I came to the conclusion that I alone must swim across the channel and fetch the Grail. I took off my clothes. At that point I awoke.",
            ],
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: "Imperiously, the dream wiped away all the intense impressions of India and swept me back to the too-long-neglected concerns of the Occident… Rather seek for yourself and your fellows the healing vessel.",
          },
        },
      ],
    },
    {
      id: "d25",
      title: {
        en: "The Deceased Wife",
      },
      time: {
        en: "After Emma Jung’s death in 1955",
      },
      location: {
        txt: {
          path: "./docs/Memories-Dreams-Reflections.txt",
          line: 12729,
        },
      },
      contents: [
        {
          textBlockType: "context",
          id: "c01",
          text: {
            en: "I experienced this objectivity once again later on. That was after the death of my wife.",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "I saw her in a dream which was like a vision. She stood at some distance from me, looking at me squarely.",
              "She was in her prime, perhaps about thirty… wearing the dress which had been made for her… Her expression was neither joyful nor sad, but, rather, objectively wise and understanding… I knew that it was not she, but a portrait she had made or commissioned for me.",
            ],
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: "Face to face with such wholeness one remains speechless… The objectivity… is part of a completed individuation.",
          },
        },
      ],
    },
    {
      id: "d26+27",
      title: {
        en: "The Grave in the Bed and the Garden Party",
      },
      time: {
        en: "Premonitions of deaths in family and among friends",
      },
      location: {
        txt: {
          path: "./docs/Memories-Dreams-Reflections.txt",
          line: 12976,
        },
      },
      contents: [
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "I dreamed that my wife's bed was a deep pit with stone walls. It was a grave… Then I heard a deep sigh, as if someone were giving up the ghost.",
              "A figure that resembled my wife sat up in the pit and floated upward. It wore a white gown into which curious black symbols were woven.",
            ],
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: "The dream was so curious that I thought at once that it might signify a death… At seven o'clock came the news that a cousin of my wife had died at three o'clock in the morning.",
          },
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: [
              "I once had a dream in which I was attending a garden party. I saw my sister there… A deceased friend of mine was also present.",
              "My sister was accompanied by a lady I knew well. Even in the dream I had drawn the conclusion that the lady was going to die…",
            ],
          },
        },
        {
          textBlockType: "impact",
          id: "p02",
          text: {
            en: "A few weeks later I received news that a friend of mine had had a fatal accident. I knew at once that she was the person I had seen in the dream but had been unable to identify.",
          },
        },
      ],
    },
    {
      id: "d28",
      title: {
        en: "The Questions of the Spirit in Latin",
      },
      time: {
        en: "1911, during a bicycle trip through northern Italy",
      },
      location: {
        txt: {
          path: "./docs/Memories-Dreams-Reflections.txt",
          line: 13130,
        },
      },
      contents: [
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "In the dream I was in an assemblage of distinguished spirits of earlier centuries… The conversation was conducted in Latin.",
              "A gentleman with a long, curly wig addressed me and asked a difficult question… I understood him, but did not have a sufficient command of the language to answer him in Latin. I felt so profoundly humiliated by this that the emotion awakened me.",
            ],
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: "At the very moment of awakening I thought of the book I was then working on… and had such intense inferiority feelings about the unanswered question that I immediately took the train home in order to get back to work.",
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: "The bewigged gentleman was a kind of ancestral spirit… the dead who had addressed questions to me in vain… They came… 'back from Jerusalem, where they found not what they sought.'",
          },
        },
      ],
    },
    {
      id: "d29",
      title: {
        en: "The Deceased Friend",
      },
      time: {
        en: "Shortly after a friend's death",
      },
      location: {
        txt: {
          path: "./docs/Memories-Dreams-Reflections.txt",
          line: 13228,
        },
      },
      contents: [
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "I dreamed once that I was paying a visit to a friend who had died about two weeks before… In the dream his home was on a hill… The walls of an old castle surrounded a square consisting of a small church and a few smaller buildings.",
              "My friend sat at a table with his daughter… He was so fascinated by what she was saying that he greeted me only with a casual wave of the hand, as though to intimate: 'Don't disturb me.'",
            ],
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: "The dream told me that now… he was required to grasp the reality of his psychic existence, which he had never been capable of doing during his life.",
          },
        },
      ],
    },
    {
      id: "d30",
      title: {
        en: "The Wolfhound",
      },
      time: {
        en: "Night before his mother's death, January 1923",
      },
      location: {
        txt: {
          path: "./docs/Memories-Dreams-Reflections.txt",
          line: 13407,
        },
      },
      contents: [
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "I was in a dense, gloomy forest; fantastic, gigantic boulders lay about among huge jungle-like trees.",
              "Suddenly I heard a piercing whistle… a gigantic wolfhound with a fearful, gaping maw burst forth… It tore past me, and I suddenly knew: the Wild Huntsman had commanded it to carry away a human soul.",
            ],
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: [
              "The dream seemed to say that the soul of my mother was taken into that greater territory of the self which lies beyond the segment of Christian morality.",
              "During the journey home… I continually heard dance music, laughter, and jollity, as though a wedding were being celebrated—one side of me had a feeling of warmth and joy, and the other of terror and grief.",
            ],
          },
        },
      ],
    },
    {
      id: "d31",
      title: {
        en: "The Deceased Father: Marital Consultation",
      },
      time: {
        en: "September 1922, months before his mother's death",
      },
      location: {
        txt: {
          path: "./docs/Memories-Dreams-Reflections.txt",
          line: 13487,
        },
      },
      contents: [
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "My father once more appeared in a dream, as if he had returned from a distant journey. He looked rejuvenated…",
              "He then said to me that since I was after all a psychologist, he would like to consult me about marital psychology. I made ready to give him a lengthy lecture… but at this point I awoke.",
            ],
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: "My dream was a forecast of my mother's death… he wished to ask a psychologist about… marital problems, since he would soon have to resume this relationship again.",
          },
        },
      ],
    },
    {
      id: "d32",
      title: {
        en: "The UFOs and the Meditating Yogi",
      },
      time: {
        en: "After his 1944 illness (yogi) and October 1958 (UFOs)",
      },
      location: {
        txt: {
          path: "./docs/Memories-Dreams-Reflections.txt",
          line: 13826,
        },
      },
      contents: [
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "In October 1958… I caught sight from my house of two lens-shaped metallically gleaming disks… Then another body came flying directly toward me… like the objective of a telescope.",
              "Immediately afterward, another came speeding through the air… a lens with a metallic extension which led to a box—a magic lantern… Still half in the dream, the thought passed through my head: 'We always think that the UFOs are projections of ours. Now it turns out that we are their projections.'",
            ],
          },
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: [
              "In an earlier dream… I came to a small wayside chapel… only a wonderful flower arrangement on the altar.",
              "On the floor in front of the altar… sat a yogi in lotus posture, in deep meditation. When I looked at him more closely, I realized that he had my face… I awoke with the thought: 'Aha, so he is the one who is meditating me. He has a dream, and I am it.'",
            ],
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: [
              "The aim of both these dreams is to effect a reversal of the relationship between ego-consciousness and the unconscious, and to represent the unconscious as the generator of the empirical personality.",
              "This state of affairs resembles very closely the Oriental conception of Maya… The self assumes human shape in order to enter three-dimensional existence.",
            ],
          },
        },
      ],
    },
  ],
  metadata: {
    imageGeneration: {
      model: "doubao",
      prompt:
        "帮我生成图片：A visual depict of the following scene, in Claude Monet's style\n{content}\n比例 「4:3」，无文字",
    },
  },
};
