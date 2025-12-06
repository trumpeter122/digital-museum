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

import { ConceptId } from "./registry";

type Content = {
  en: string | string[]; // A sentence or multiple sentences
  zh: string | string[]; // Chinese translation(s)
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
  image: {
    path: string; // Relative path to the image depicting the scene
    _prompt?: string; // Prompt for image generation
  } | null;
};

type Dream = {
  id: string;
  title: Content;
  time: Content;
  location: any;
  // Context, Interpretation, Impact, and Scene of the dreams, each one being potentially multiple, ordered stricly according to Jung's original narration
  contents: (Context | Interpretation | Impact | Scene)[];
  // Jungian concepts associated with this dream.
  relatedConcepts: ConceptId[];
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
        zh: "地下阳具",
      },
      time: {
        en: "Childhood, approx. 3-4 years old",
        zh: "童年，约3至4岁",
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
              'Lord Jesus was comforting, a nice, benevolent gentleman like Flerr  Wegenstein up at the castle, rich, powerful, respected, and mindful of little children at night. Why he should be winged like a bird was a conundrum that did not worry me any further. Far more significant and thought-provoking was the fact that little children were compared to chicks which Lord Jesus evidently "took" reluctantly, like bitter medicine. This was difficult to understand. But I understood at once that Satan liked chicks and had to be prevented from eating them. So, although Lord Jesus did not like the taste, he ate them anyway, so that Satan would not get them.. As far as that went, my argument was comforting. But now I was hearing that Lord Jesus "took" other people to himself as well, and that this "taking" was teh same as putting them in a hole in the ground.',
              "This sinister analogy had unfortunate consequences. I began to distrust Lord Jesus. He lost the aspect of a big, comforting, benevolent bird and became associated with the gloomy black men in frock coats, top hats, and shiny black boots who busied themselves with the black box.",
              'These ruminations of mine led to my first conscious trauma. One hot summer day I was sitting alone, as usual, on the road in front of the house, playing in the sand. The road led past the house up a hill, then disappeared in the wood on the hilltop. So from the house you could see a stretch of the road. Looking up, I saw a figure in a strangely broad hat and a long black garment coming down from the wood. It looked like a man wearing women\'s clothes. Slowly the figure drew nearer, and I could now see that it really was a man wearing a kind of black robe that reached to his feet. At the sight of him I was overcome with fear, which rapidly grew into deadly terror as the frightful recognition shot through my mind: "That is a Jesuit." Shortly before, I had overheard a conversation between my father and a visiting colleague concerning the nefarious activities of the Jesuits. From the half-irritated, half-fearful tone of my father\'s remarks I gathered that "Jesuits" meant something specially dangerous, even for my father- Actually I had no idea what Jesuits were, but I was familiar with the word "Jesus" from my little prayer.',
              "The man coming down the road must be in disguise, I thought; that was why he wore women's clothes. Probably he had evil intentions. Terrified, I ran helter-skelter into the house, rushed up the stairs, and hid under a beam in the darkest corner of the attic. I don't know how long I remained there, but it must have been a fairly long time, because, when I ventured down again to the first floor and cautiously stuck my head out of the window, far and wide there was not a trace of the black figure to be seen. For days afterward the hellish fright clung to my limbs and kept me in the house. And even when I began to play in the road again, the wooded hilltop was still the object of my uneasy vigilance. Later I realized, of course, that the black figure was a harmless Catholic priest.",
              "At about the same time--l could not say with absolute certainty whether it preceded this experience or not— I had the earliest dream I can remember, a dream which was to preoccupy me all my life. I was then between three and four years old.",
            ],
            zh: [
              "母亲教了我一段夜晚必须诵读的祷文。我乐意这样做，因为它让我在夜晚模糊的不确定中感到安慰：",
              "仁慈的主耶稣，请张开你的翅膀，",
              "收留你的小鸡，你的孩子，",
              "如果撒旦想要吞噬他们，",
              "任何伤害都将无法战胜他们，",
              "于是天使便放声歌唱！",
              "主耶稣令人宽慰，他就像城堡里的弗勒尔·韦根斯坦那样富有、强大、受人尊敬又仁慈善良，还在夜晚关照小孩子。他为什么长着鸟的翅膀，这个谜我没有再去琢磨。更令人深思的是，小孩子被比喻为小鸡，而主耶稣显然像吞苦药般不情愿地“接纳”这些小鸡。这难以理解。但我很快想到，撒旦喜欢小鸡，必须阻止他吃掉它们。于是，尽管主耶稣并不喜欢那味道，他还是把小鸡吃掉，让撒旦无从下口。这样解释让我感到安慰。可现在我听说主耶稣也“接走”其他人，而这种“接走”竟然等同于把人埋进地洞里。",
              "这种阴森的类比造成了不幸的后果。我开始不再信任主耶稣。他不再是一只巨大而安慰人心的慈爱鸟，而是与那些穿着黑色礼服、戴着高礼帽、脚踏闪亮黑靴、围着黑盒子忙碌的阴郁黑衣人联系在一起。",
              "这些思索导致了我第一次有意识的创伤。一个炎热的夏日，我像往常一样独自坐在房前的路上玩沙子。那条路从房子旁边延伸上山，然后在山顶的树林中消失，所以从屋里可以看到一段路。抬头望去，我看见一个戴着奇怪阔帽、穿着长黑衣的人影从树林走下来，看起来像穿女装的男人。那身影慢慢靠近，我这才看清他确实是身着及地黑袍的男人。看到他我顿时恐惧，这种恐惧迅速升级为致命的惊慌，因为我的脑海里划过可怕的念头：“那是个耶稣会士。”不久前，我偷听了父亲与一位来访同事谈论耶稣会士的邪恶活动。从父亲半恼怒半恐惧的语气中，我知道“耶稣会士”对父亲来说也是特别危险的。其实我并不知道耶稣会士是什么，但我从小祷文里熟悉“耶稣”这个词。",
              "我想，从山上下来的那个人一定是伪装的，这就是他穿女装的原因。他可能怀有恶意。惊恐之下，我慌乱地跑进屋里，冲上楼梯，躲在阁楼最黑暗角落的梁下。我不知道自己在那里待了多久，但显然相当长，因为当我再次走到一楼，小心地把头探出窗外时，已不见黑衣人的踪影。此后几天，那种地狱般的恐惧仍缠绕着我，使我呆在屋里。即使我重新开始在路上玩耍，那片有树林的山顶仍是我不安的警觉焦点。后来我才明白，那个黑衣人只是个无害的天主教神父。",
              "大约在同一时期——我无法确定这经历前后——我做了我记忆中最早的一个梦，一个此后伴随我终生的梦。当时我大概三四岁。",
            ],
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: "The vicarage stood quite alone near Laufen castle, and there was a big meadow stretching back from the sexton's farm. In the dream I was in this meadow.",
            zh: "牧师住宅孤零零地矗立在劳芬城堡附近，仆役的农舍后面有一大片草地。在梦中我就在这片草地上。",
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
            zh: "突然我发现地面上有一个黑暗的长方形石砌洞穴，我从未见过。我好奇地跑上前探头向下看。",
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
            zh: "然后我看到一条石阶通向地下。我犹豫又害怕地走了下去。",
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
            zh: "底部有一个圆拱门，被一块厚重的绿色帷幕遮挡，看起来如织锦般华丽。我出于好奇想看后面藏着什么，于是把帘子掀开。",
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
            zh: [
              "在昏暗的光线中，我看到面前有一个约三十英尺长的长方形房间。拱形天花板由凿石砌成，地面铺着石板，中间有一条红地毯从入口延伸到一座低台。台上放着一张华丽的黄金宝座，座位上似乎有个红垫子。那是一个真正童话里的国王宝座。宝座上站着一个东西，我起初以为是十二到十五英尺高、一到两英尺粗的树干。它巨大无比，几乎伸到天花板，却奇特地由皮肤和裸露的肉组成，顶部是一个光秃的圆头，没有脸也没有头发。头顶最上方有一只单眼，静静地向上凝视。",
              "房间里虽然没有窗户和明显的光源，却很明亮。头顶周围还有一圈光晕。那个东西并不动，但我感觉它随时可能像虫子一样从宝座上爬下来向我爬来。我被恐惧定住了。这时我听到外面和上方传来母亲的声音，她喊道：“是的，就看着他，那就是吃人的怪物！”这更加剧了我的恐惧，我浑身冒汗，吓得要命醒来。"
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
            zh: [
              "此后许多夜晚我都不敢入睡，因为害怕再做那样的梦。",
              "这个梦多年来缠绕着我。很久以后我才意识到我看到的是一根阳具，又过了几十年我才明白那是一根祭祀用的阳具。我一直弄不清母亲所指的是“这就是吃人的怪物”还是“那就是吃人的怪物”。如果是前者，她的意思是吞噬小孩的不是主耶稣或耶稣会士，而是阳具；如果是后者，则说明“吃人者”象征着阳具，于是黑暗的主耶稣、耶稣会士和阳具便是同一物。",
              "阳具的抽象意义体现在它独自立于宝座之上，“直立不倒”。草地上的洞大概代表坟墓。坟墓本身是一座地下神庙，绿色帷幕象征草地，也就是大地被绿色植被覆盖的奥秘。地毯是血红色的。穹顶又如何？也许我曾去过沙夫豪森的穆诺特城堡？这不太可能，因为没人会带一个三岁的孩子上去。所以这不可能是记忆的痕迹。同样，我也不知道那个解剖学逼真的阳具从何而来。将尿道口解释为一只眼睛，光源似乎在其上方，指向“phallus”这个词的词源（闪耀、明亮）。",
              "无论如何，这个梦中的阳具似乎是一位“不宜命名”的地下神，在我青年时期始终如此。每当有人过于强调主耶稣时，它便再次出现。主耶稣对我而言从未真正真实、可接受或可爱，因为我不断想起他在地下的对应物，这是一种未经请求便降临的可怕启示。耶稣会士的“伪装”为我所学的基督教教义蒙上阴影。在我看来，它往往像一种庄重的化装舞会，一场葬礼，哀悼者面带严肃或悲伤的神色，却又暗暗发笑，并非真正悲痛。主耶稣在某些方面似乎是死亡之神，虽然他驱散夜间的恐惧，但他自身却是令人不安、被钉死且鲜血淋漓的尸体。在心底，我总觉得他的爱与慈悲并不可靠，主要因为那些谈论“亲爱的主耶稣”最多的人穿着黑色长礼服和闪亮的黑靴，让我联想到葬礼。他们是父亲的同事以及我八个叔叔——全是牧师。许多年里他们让我恐惧，更不用说偶尔出现的天主教神父，他们使我想起那个让父亲反感甚至惊慌的可怕耶稣会士。后来直到我领受坚信礼，我努力强迫自己采取所要求的正面态度，但始终无法克服我内心的怀疑。",
              "每个孩子都会害怕“黑衣人”，但在那次经历中关键并不是这种恐惧，而是刺入我童心的意识：“那是耶稣会士。”因此梦中重要的不是孩童版的吃人怪，而是其非凡的象征性场景以及惊人的解读：“那才是真正的吃人者”，它坐在地底的金色宝座上。在我童稚的想象中，首先是国王坐在金椅上；然后，在遥远的蓝天里有一个更高、更美、更金黄的宝座，上面坐着戴金冠、穿白袍的上帝和主耶稣。然而，就是这位主耶稣让那个穿黑色女装、戴宽黑帽的耶稣会士从树林山坡下来。我不得不时常抬头瞥一眼，看看是否有新的危险逼近。在梦里，我进入地洞，看到宝座上坐着一个完全不同的存在，它非人而冥界，直勾勾地向上凝视，以人肉为食。直到五十年后，在读到一段关于圣餐象征背后食人主题的研究时，我才意识到，当时逐渐浮现意识的思想是多么不孩子气、多么复杂甚至过于复杂。是谁在我内心说话？是谁构思了这些？是什么样的高等智慧在运作？我知道每个愚笨的人都会喋喋不休地谈论“黑衣人”、“吃人者”、“巧合”或“事后解读”，以驱走那些会玷污儿童天真形象的不便之事。啊，这些自鸣得意的健康之人总使我想起那些乐观的蝌蚪，它们在浅浅的水洼中成群晒太阳，愉快地摆动着尾巴，全然不知第二天清晨水洼会干涸把它们搁在那儿。",
              "那时是谁在与我说话？是谁谈及远超我知识范围的问题？是谁将上界与下界连接起来，为我后半生充满激情的经历奠定了基础？除了那位来自上界也来自下界的陌生访客，还能是谁？",
              "通过这个童年的梦，我被引入了大地的秘密。当时发生的一切就像一次入土的埋葬，许多年后我才重新出来。如今我知道，这一切都是为了在黑暗中带来尽可能多的光。这是一种进入黑暗领域的启蒙。我的理智生活就是在那时无意识地开始的。"
            ],
          },
        },
      ],
      relatedConcepts: ['archetypes', 'shadow', 'self'],
    },
    {
      id: "d02+03",
      title: {
        en: "The Bone; The Creature",
        zh: "骨头；生物",
      },
      time: {
        en: "Late adolescence, before choosing university studies (Student Years, ca. 1895)",
        zh: "青春晚期，选择大学学科之前（学生时代，大约1895年）",
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
            en: "Some weeks previously, just at the time when No. 1 and No. 2 were wrestling for a decision, I had two dreams.",
            zh: "几周前，就在1号和2号为做出决定而挣扎的时候，我做了两个梦。",
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
            zh: [
              "在第一个梦里，我身处一片沿莱茵河延伸的幽暗树林。我来到一个小丘，一座坟冢，并开始挖掘。",
              "过了一会儿，我惊讶地挖出了一些史前动物的骨骼。",
            ],
          },
          image: {
            _prompt:
              "In the first dream I was in a dark wood that stretched along the Rhine. I came to a little hill, a burial mound, and began to dig. After a while I turned up, to my astonishment, some bones of prehistoric animals.",
            path: "./assets/dreams-d02+03-s01.png",
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
            zh: [
              "随后是第二个梦。我又在树林里；树间穿插着水流，在最阴暗处我看到一个圆形池塘，四周被密集的灌木包围。",
              "半沉在水中躺着一种最奇异最美妙的生物：一个散发乳光的圆形动物，由无数小细胞或触手状器官组成；它是一只约三英尺宽的巨型放射虫。",
              "它唤起了我强烈的求知欲，使我心跳不止而醒来。",
            ],
          },
          image: {
            _prompt:
              "In a dark wood threaded with watercourses I saw a circular pool surrounded by dense undergrowth. Half immersed in the water lay a round animal, shimmering in opalescent hues, a giant radiolarian about three feet across, consisting of innumerable little cells or tentacle-like organs.",
            path: "./assets/dreams-d02+03-s02.png",
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: "These two dreams decided me overwhelmingly in favor of science, and removed all my doubts.",
            zh: "这两个梦使我坚定地站在科学一边，消除了我的所有疑虑。",
          },
        },
      ],
      relatedConcepts: ['archetypes', 'psyche'],
    },
    {
      id: "d04",
      title: {
        en: "The Kindling in the Dark",
        zh: "黑暗中的火种",
      },
      time: {
        en: "University student, early medical studies",
        zh: "大学生，医学初期学习阶段",
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
            zh: "大约在这段时间，我做了一个既让我害怕又让我振奋的梦。",
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
            zh: [
              "那是在一个陌生的地方的夜晚，我冒着强风艰难前行。浓雾四处飘散。",
              "我双手护着一盏微弱的小灯，它随时可能熄灭。一切都取决于我保持这束微光。",
              "突然我感觉身后有什么靠近。我回头一看，看到一个巨大的黑色身影跟着我。",
            ],
          },
          image: {
            _prompt:
              "At night a man forced his way against a mighty wind through dense flying fog, cupping his hands around a tiny, fragile light, while behind him loomed a gigantic black figure following.",
            path: "./assets/dreams-d04-s01.png",
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: [
              'When I awoke I realized at once that the figure was a "specter of the Brocken," my own shadow on the swirling mists, brought into being by the little light I was carrying.',
              "I knew, too, that this little light was my consciousness, the only light I have. My own understanding is the sole treasure I possess, and the greatest. Though infinitely small and fragile in comparison with the powers of darkness, it is still a light, my only light.",
              "Now I knew that No. 1 was the bearer of the light, and that No. 2 followed him like a shadow. My task was to shield the light and not look back.",
            ],
            zh: [
              "醒来后我立即意识到，那身影是所谓的‘布罗肯幽灵’，是我携带的小灯在旋转雾气中投射出的影子。",
              "我也知道这盏小灯是我的意识，是我唯一拥有的光。我的理解力是我唯一、也是最重要的财富。虽然与黑暗的力量相比，它微弱而脆弱，但它仍是一束光，我唯一的光。",
              "现在我明白1号是持灯人，2号像影子般跟随他。我的任务是保护这盏灯，不要回头看。",
            ],
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: "My view of the world spun around; I recognized clearly that my path led irrevocably outward—into study, moneymaking, responsibilities, entanglements, confusions, errors, submissions, defeats.",
            zh: "我的世界观被彻底颠覆；我清楚地意识到我的道路将不可避免地朝外延伸——进入学习、赚钱、责任、纠葛、困惑、错误、屈服和失败。",
          },
        },
      ],
      relatedConcepts: ['self', 'individuation'],
    },
    {
      id: "d05",
      title: {
        en: "The Deceased Father: the Returns",
        zh: "已故的父亲：归来",
      },
      time: {
        en: "Six weeks after his death, winter 1896",
        zh: "他去世六周后，1896年冬",
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
            zh: [
              "有一次，母亲用她的‘第二种声音’对我说：‘他适时地为你而死。’",
              "父亲去世后，我搬进了他的房间，在家庭中承担起他的角色。",
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
            zh: [
              "他去世六周后，父亲在我的梦中出现。突然他站在我面前，说他从假期回来。他恢复得很好，现在要回家。",
              "我以为我搬进他的房间会让他生气，但完全没有！两天后这个梦又重复了一遍。",
            ],
          },
          image: {
            _prompt:
              "Six weeks after his death my father suddenly stood before me in a dream, saying he was coming back from his holiday, fully recovered and now coming home.",
            path: "./assets/dreams-d05-s01.png",
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: "Later I kept asking myself: What does it mean that my father returns in dreams and that he seems so real? It forced me for the first time to think about life after death.",
            zh: "后来我不断问自己：父亲在梦中返回并且看起来如此真实意味着什么？这迫使我第一次思考死后的生命。",
          },
        },
      ],
      relatedConcepts: ['complexes', 'shadow'],
    },
    {
      id: "d06",
      title: {
        en: "The Female Patient Saw from Below",
        zh: "The Female Patient Saw from Below",
      },
      time: {
        en: "Early analytical practice",
        zh: "Early analytical practice",
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
            en: "I once had a patient, a highly intelligent woman, who for various reasons aroused my doubts. At first the analysis went very well, but after a while I began to feel that I was no longer getting at the correct interpretation of her dreams, and I thought I also noticed an increasing shallowness in our dialogue.",
            zh: "我曾有一位患者，是位非常聪明的女性，由于各种原因使我产生怀疑。刚开始分析顺利，但过了一阵我觉得自己再也无法正确解读她的梦，并且察觉我们的对话日渐肤浅。",
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
            zh: [
              "我在午后阳光下沿着山谷中的公路行走，右边是陡峭的山坡。山顶上矗立着一座城堡，在最高的塔楼栏杆上坐着一位女子。",
              "为了看清她，我不得不把头向后仰很远。即使在梦中我也认出她是我的病人。",
            ],
          },
          image: {
            _prompt:
              "In late-afternoon sunlight I walked down a highway through a valley; on a steep hill to my right stood a castle, and on its highest tower a woman sat on a balustrade so high that I had to bend my head far back to see her.",
            path: "./assets/dreams-d06-s01.png",
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: "If in the dream I had to look up at the patient in this fashion, in reality I had probably been looking down on her. Dreams are, after all, compensations for the conscious attitude.",
            zh: "如果在梦中我必须这样仰视病人，那么在现实中我很可能一直在俯视她。毕竟，梦终究是对意识态度的补偿。",
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: "This produced an immediate change in the situation, and the treatment once more began to move forward.",
            zh: "这立即改变了形势，治疗又重新开始进展。",
          },
        },
      ],
      relatedConcepts: ['anima-animus', 'psyche'],
    },
    {
      id: "d07",
      title: {
        en: "The Jewish Female Patient",
        zh: "犹太女病人",
      },
      time: {
        en: "Early analytical practice",
        zh: "早期分析实践",
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
              "Suddenly it occurred to me that she must have an unusual father complex.",
            ],
            zh: [
              "我记得有一位失去信仰的犹太妇女的案例。事情始于我的一个梦：一个我不认识的年轻女孩来找我做病人。",
              "突然我想到她一定有异常的父亲情结。",
            ],
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "For the next day a young woman appeared. She was Jewish, daughter of a wealthy banker, pretty, chic, and highly intelligent.",
              "She had already undergone an analysis, but the doctor acquired a transference to her and finally begged her not to come to him any more, for if she did, it would mean the destruction of his marriage.",
              "At first I could not understand what her trouble was. Suddenly my dream occurred to me, and I thought, 'Good Lord, so this is the little girl of my dream.' Since I could detect not a trace of a father complex in her, I asked her about her grandfather.",
              "I learned that he had been a rabbi, a zaddik who belonged to a Jewish sect and was said to have been a kind of saint and to possess second sight. I explained to her, 'Your grandfather was a zaddik. Your father became an apostate to the Jewish faith. He betrayed the secret and turned his back on God. And you have your neurosis because the fear of God has got into you.' That struck her like a bolt of lightning.",
            ],
            zh: [
              "第二天，一位年轻女子出现。她是犹太人，一位富有银行家的女儿，漂亮、时髦、极其聪明。",
              "她已经接受过分析，但医生对她产生了移情，最后恳求她不要再去，否则将毁了他的婚姻。",
              "起初我不明白她的问题是什么。忽然想起我的梦，我心想：“天哪，这不就是我梦中的小女孩吗。”既然我在她身上看不到父亲情结的迹象，于是问起了她的祖父。",
              "我了解到他曾是一名拉比，属于一个犹太教派的义人，据说像圣人一样并拥有第二视觉。我向她解释：“你的祖父是位义人。你的父亲背叛了犹太信仰，泄露了秘密，背弃了上帝。你患上神经症，是因为对上帝的恐惧进入了你。”这话如同晴天霹雳打在她身上。",
            ],
          },
          image: null
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: [
              "The following night I had another dream. A reception was taking place in my house, and behold, this girl was there too.",
              "She came up to me and asked, 'Haven't you got an umbrella? It is raining so hard.' I actually found an umbrella, fumbled around with it to open it, and was on the point of giving it to her. But what happened instead? I handed it to her on my knees, as if she were a goddess.",
            ],
            zh: [
              "接下来一晚我又做了一个梦。家里正在举行招待会，瞧，这个女孩也在场。",
              "她走到我面前问：“你没有伞吗？雨下得这么大。”我确实找到了把伞，摸索着准备把它打开，正要递给她。但结果是？我跪着把伞递给了她，仿佛她是女神。",
            ],
          },
          image: {
            _prompt:
              "At a reception in my house the young woman came up to me in heavy rain and asked for an umbrella; I found one and handed it to her on my knees, as if she were a goddess.",
            path: "./assets/dreams-d07-s02.png",
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: [
              "The dream had showed me that she was not just a superficial little girl, but that beneath the surface were the makings of a saint.",
              "She had no mythological ideas, and therefore the most essential feature of her nature could find no way to express itself. All her conscious activity was directed toward flirtation, clothes, and sex, because she knew of nothing else. She knew only the intellect and lived a meaningless life. In reality she was a child of God whose destiny was to fulfill His secret will.",
            ],
            zh: [
              "这个梦告诉我，她并非只是一个肤浅的小姑娘，她表面之下蕴藏着圣者的潜质。",
              "她没有任何神话观念，因此她本性中最核心的部分无处表达。她所有的意识活动都指向调情、衣服和性，因为她不懂别的。她只懂得理智，过着没有意义的生活。实际上她是上帝的孩子，她的命运是实现他的秘密旨意。",
            ],
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: "In a week the neurosis had vanished. I had to awaken mythological and religious ideas in her, for she belonged to that class of human beings of whom spiritual activity is demanded. Thus her life took on a meaning, and no trace of the neurosis was left.",
            zh: "一周后，她的神经症消失了。我必须在她心中唤起神话和宗教观念，因为她属于需要精神活动的人群。这样她的生活有了意义，神经症的痕迹也不复存在。",
          },
        },
      ],
      relatedConcepts: ['anima-animus'],
    },
    {
      id: "d08",
      title: {
        en: "The Prehistoric Bones under the House",
        zh: "房子下面的史前骨骼",
      },
      time: {
        en: "During collaboration with Freud, before 1912",
        zh: "与弗洛伊德合作期间，1912年以前",
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
            zh: "有一个梦对我尤其重要，因为它首次引导我提出“集体无意识”的概念。",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "I was in a house I did not know, which had two stories. It was 'my house.' I found myself in the upper story, where there was a kind of salon furnished with fine old pieces in rococo style. Not bad. But then it occurred to me that I did not know what the lower floor looked like.",
            ],
            zh: [
              "我在一所陌生的两层房子里，这是‘我的房子’。我身处楼上，有一间摆着洛可可风格精美旧家具的会客厅，不错。但我突然想到，我不知道楼下是什么样子。",
            ],
          },
          image: {
            _prompt:
              "In an unfamiliar two-storied house that was 'my house' I explored an upper-story salon with fine rococo furnishings and wondered what lay below.",
            path: "./assets/dreams-d08-s01.png",
          },
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: [
              "Descending the stairs, I reached the ground floor. There everything was much older, medieval; the floors were of red brick.",
              "I came upon a heavy door, and opened it. Beyond it, I discovered a stone stairway that led down into the cellar.",
            ],
            zh: [
              "下楼梯来到一层，那里的东西要古老得多，呈中世纪风格；地面铺着红砖。",
              "我看见一道厚重的门，打开后发现一段石阶通向地下室。",
            ],
          },
          image: {
            _prompt:
              "In my unfamiliar house I descended to a medieval ground floor with red brick floors, opened a heavy door, and found a stone stairway leading down into a cellar.",
            path: "./assets/dreams-d08-s02.png",
          },
        },
        {
          textBlockType: "scene",
          id: "s03",
          text: {
            en: [
              "I found myself in a beautifully vaulted room which looked exceedingly ancient. Examining the walls, I discovered layers of brick among the ordinary stone blocks, and chips of brick in the mortar. I knew that the walls dated from Roman times.",
            ],
            zh: [
              "我来到了一个拱顶优美的房间，看起来极其古老。仔细观察墙壁，我发现普通石块之间夹有砖层，灰浆里还有砖片。我知道这些墙可以追溯到罗马时代。",
            ],
          },
          image: {
            _prompt:
              "In a beautifully vaulted ancient room below ground, its stone walls showed layers of brick and brick chips in the mortar, revealing Roman construction.",
            path: "./assets/dreams-d08-s03.png",
          },
        },
        {
          textBlockType: "scene",
          id: "s04",
          text: {
            en: [
              "I pulled up a ring in a stone slab and saw another stairway. I entered a low cave cut into the rock. Thick dust lay on the floor, and in the dust were scattered bones and broken pottery. I discovered two human skulls, obviously very old and half disintegrated.",
            ],
            zh: [
              "我掀起石板上的一个环，看见另一段楼梯。我走进一个低矮的岩洞，地上厚厚的尘土中散落着骨头和破陶片。我发现了两颗显然非常古老、半腐烂的人类头骨。",
            ],
          },
          image: {
            _prompt:
              "Lifting a stone slab ring revealed another stairway down into a low rock-cut cave whose dusty floor was strewn with bones, broken pottery, and two very old half-disintegrated human skulls.",
            path: "./assets/dreams-d08-s04.png",
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: [
              "It was plain to me that the house represented a kind of image of the psyche—that is to say, of my then state of consciousness, with hitherto unconscious additions. Consciousness was represented by the salon.",
              "The deeper I went, the more alien and the darker the scene became. In the cave, I discovered remains of a primitive culture, that is, the world of the primitive man within myself—a world which can scarcely be reached or illuminated by consciousness.",
            ],
            zh: [
              "我很清楚，这座房子代表某种心灵的形象——即我当时的意识状态，加上迄今无意识的内容。楼上的会客厅象征着意识。",
              "我下得越深，场景就越陌生、越黑暗。在洞穴中，我发现了原始文化的遗存，也就是我内在原始人的世界——一个几乎难以被意识触及或照亮的世界。",
            ],
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: "This dream formed a kind of prelude to my book Wandlungen und Symbole der Libido and to the idea of the collective unconscious.",
            zh: "这个梦可视为我写《精神的变化与象征》及提出集体无意识概念的序曲。",
          },
        },
      ],
      relatedConcepts: ['archetypes', 'shadow'],
    },
    {
      id: "d09",
      title: {
        en: "The Austrian Border and the Knight",
        zh: "奥地利边境与骑士",
      },
      time: {
        en: "While writing Wandlungen und Symbole der Libido, ca. 1912",
        zh: "在写《精神的变化与象征》期间，大约1912年",
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
            zh: "在撰写这本书期间，我做了一些预示将与弗洛伊德决裂的梦。",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "One of the most significant had its scene in a mountainous region on the Swiss-Austrian border.",
              'An elderly man in the uniform of an Imperial Austrian customs official walked past, somewhat stooped, without paying any attention to me. Someone informed me that the old man was not really there, but was the ghost of a customs official who had died years ago. "He is one of those who still couldn\'t die properly."',
            ],
            zh: [
              "其中最重要的一个梦发生在瑞士与奥地利边境的山区。",
              "一个穿着奥地利帝国海关官员制服的老人微微弯腰从我身边走过，完全不理会我。有人告诉我这位老者实际上并不存在，而是多年前死去的海关官员的幽灵。‘他是那些还无法好好死去的人之一。’",
            ],
          },
          image: {
            _prompt:
              "In a mountainous region on the Swiss-Austrian border an elderly man in the uniform of an Imperial Austrian customs official walked past. I saw the scene from afar and it was dark.",
            path: "./assets/dreams-d09-s01.png",
          },
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: [
              "The dream had not reached its end. I was in an Italian city, and it was around noon, between twelve and one o'clock. A crowd came streaming toward me, and I knew that the shops were closing and people were on their way home to dinner.",
              "In the midst of this stream of people walked a knight in full armor. He wore a helmet of the kind that is called a basinet, with eye slits, and chain armor. Over this was a white tunic into which was woven, front and back, a large red cross. No one seemed to notice him; it was as though he were completely invisible to everyone but me.",
            ],
            zh: [
              "梦还没结束。我来到一座意大利城市，大约中午十二点到一点之间。人群涌向我，我知道商店即将关门，人们正回家吃午饭。",
              "在人群中间走着一位全副铠甲的骑士。他戴着一种称为盆盔的头盔，带有眼孔，还有锁子甲。甲外罩着一件白色长袍，前后织着一个巨大的红十字。似乎没有人注意到他；仿佛除了我之外他对所有人都是隐形的。",
            ],
          },
          image: {
            _prompt:
              "In an Italian city a crowd streamed toward me, and in their midst walked a knight in full armor, wearing a helmet and a white tunic woven with a large red cross front and back.",
            path: "./assets/dreams-d09-s02.png",
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: [
              "The extremely rigorous customs examination at the border seemed to me an allusion to analysis. As for the old customs official, his work had obviously brought him so little that was pleasurable that he took a sour view of the world; I could not refuse to see the analogy with Freud.",
              "The knight belonged to the twelfth century—the period when alchemy was beginning and also the quest for the Holy Grail. In the deepest sense that was my own world, which had scarcely anything to do with Freud's.",
            ],
            zh: [
              "边境极为严格的海关检查在我看来暗指分析。而那个老海关官员显然因工作中少有乐趣而对世界持酸楚态度；我无法不把这一点与弗洛伊德类比。",
              "那位骑士属于十二世纪——正是炼金术兴起和寻找圣杯的时代。从最深层意义上说，那是属于我的世界，与弗洛伊德的世界几乎毫不相干。",
            ],
          },
        },
      ],
      relatedConcepts: ['archetypes', 'shadow'],
    },
    {
      id: "d10+11",
      title: {
        en: "The Avian Anima; The Dead Ancients",
        zh: "鸟形阿尼玛；死去的古人",
      },
      time: {
        en: "Christmas 1912 and the following period",
        zh: "1912年圣诞节及其后时期",
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
            en: "I asked myself: “But then what is your myth—the myth in which you do live?” At this point the dialogue with myself became uncomfortable, and I stopped thinking. Then, around Christmas of 1912, I had a dream.",
            zh: "我问自己：“那么你的神话是什么——你真正活在其中的神话是什么？”此时自我对话变得令人不舒服，我停止了思考。然后在1912年的圣诞节前后，我做了一个梦。",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "I found myself in a magnificent Italian loggia with pillars, a marble floor, and a marble balustrade. I was sitting on a gold Renaissance chair; in front of me was a table of rare beauty made of green stone like emerald. My children were sitting at the table too.",
              "Suddenly a white bird descended, a small sea gull or a dove. Immediately, the dove was transformed into a little girl, about eight years of age, with golden blond hair. She ran off with the children and played with them among the colonnades of the castle.",
              "The little girl returned and tenderly placed her arms around my neck. Then she suddenly vanished; the dove was back and spoke slowly in a human voice. 'Only in the first hours of the night can I transform myself into a human being; while the male dove is busy with the twelve dead.' Then she flew off into the blue air.",
            ],
            zh: [
              "我置身于一座壮丽的意大利柱廊，四周有柱子、大理石地板和大理石栏杆。我坐在一把金色文艺复兴时期的椅子上；面前是一张由翡翠般绿色石头制成的精美桌子。我的孩子们也坐在桌旁。",
              "突然一只白鸟降落，是只小海鸥或鸽子。鸽子立刻变成一个约八岁的小女孩，金发碧眼。她和孩子们一起奔跑，在城堡的柱廊间玩耍。",
              "小女孩回来，温柔地搂住我的脖子。然后她突然消失，鸽子又出现，用人声缓缓地说道：“只有在夜晚最初的几个小时里我才能变成人形；而公鸽子正忙于十二个死者。”随后她飞向蓝天。",
            ],
          },
          image: {
            _prompt:
              "In a magnificent Italian loggia with pillars, marble floor, and balustrade, as my children sat at the table, a white bird descended, transformed into a little girl.",
            path: "./assets/dreams-d10+11-s01.png",
          },
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: [
              "One fantasy kept returning: there was something dead present, but it was also still alive. This dream came: I was in a region like the Alyscamps near Arles, with a long row of tombs where the dead lay in antique clothes with hands clasped.",
              "I came to the twelfth century—that is, to a crusader in chain mail who lay there with clasped hands.",
              "For a long time I looked at him and thought he was really dead. But suddenly I saw that a finger of his left hand was beginning to stir gently.",
            ],
            zh: [
              "一个幻想反复出现：有些死去的东西仍然存在，但它也仍然活着。我梦见自己在类似阿尔勒附近阿利斯康墓园的地方，那里有一长排墓穴，死者穿着古老服装，双手合拢躺着。",
              "我走到了十二世纪——那里躺着一名穿着锁子甲的十字军战士，双手合拢。",
              "我注视他很久，以为他真的死了。但突然我看见他左手的一根手指开始轻轻地动起来。",
            ],
          },
          image: {
            _prompt:
              "In a region like the Alyscamps near Arles I came upon a twelfth-century helmeted crusader in chain mail lying with clasped hands, long seemingly dead. It was night.",
            path: "./assets/dreams-d10+11-s02.png",
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: [
              "The dream indicated an unusual activation of the unconscious. I was reminded of the Tabula Smaragdina and also of the twelve apostles, the twelve months, the signs of the zodiac.",
              "Dreams like this taught me that such contents are not dead, outmoded forms, but belong to our living being. In the course of years there developed from it the theory of archetypes.",
            ],
            zh: [
              "这个梦表明无意识异常活跃。它让人联想到《翡翠碑文》以及十二使徒、十二个月、十二星座。",
              "这样的梦让我认识到这些内容并非死亡、过时的形式，而是属于我们生命的一部分。多年之后，这成为原型理论的基础。",
            ],
          },
        },
      ],
      relatedConcepts: ['anima-animus', 'archetypes'],
    },
    {
      id: "d12",
      title: {
        en: "The Frozen Worlds",
        zh: "冰冻的世界",
      },
      time: {
        en: "Spring–summer 1914, on the eve of World War I",
        zh: "1914年春夏，一战前夕",
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
            zh: "不久之后，在1914年的春末夏初，我做了一个重复了三次的梦。",
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
            zh: [
              "盛夏时节，一股北极寒流降临，把大地冻结成冰。",
              "例如，我看到整个洛林地区连同它的运河都结了冰，整个地区完全没有人影，所有绿色的生物都被霜冻杀死。",
            ],
          },
          image: {
            _prompt:
              "In the middle of summer an Arctic cold wave descended, freezing the land to ice; the whole of Lorraine and its canals were frozen and totally deserted, all living green things killed by frost.",
            path: "./assets/dreams-d12-s01.png",
          },
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: [
              "In the third dream frightful cold had again descended. There stood a leaf-bearing tree, but without fruit, whose leaves had been transformed by the effects of the frost into sweet grapes full of healing juices.",
              "I plucked the grapes and gave them to a large, waiting crowd.",
            ],
            zh: [
              "在第三个梦里，恐怖的寒冷再次降临。那里有一棵有叶无果的树，它的叶子在霜冻的作用下变成了充满疗愈汁液的甜葡萄。",
              "我摘下葡萄，分给一大群等待的人。",
            ],
          },
          image: {
            _prompt:
              "In a frightful cold I saw a leaf-bearing tree without fruit whose leaves had been transformed by frost into sweet grapes full of healing juices; I plucked the grapes and gave them to a large waiting crowd.",
            path: "./assets/dreams-d12-s02.png",
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: "On August 1 the world war broke out. Now my task was clear: I had to try to understand what had happened and to what extent my own experience coincided with that of mankind in general. Therefore my first obligation was to probe the depths of my own psyche. An incessant stream of fantasies had been released.",
            zh: "8月1日世界大战爆发。此时我的任务很明确：我必须努力理解发生的一切，以及我的个人经历在多大程度上与人类的整体经历相吻合。因此，我的首要职责是深入探究自己的内心。无休止的幻想流被释放出来。",
          },
        },
      ],
      relatedConcepts: ['self', 'individuation'],
    },
    {
      id: "d13",
      title: {
        en: "The Killing of Siegfried",
        zh: "齐格弗里德之死",
      },
      time: {
        en: "December 1913",
        zh: "1913年12月",
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
            zh: "然而我的想象力开始捉弄我。一天夜里我醒着，思考那些病态的幻想。",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "Suddenly I was seized by an overwhelming vision: I saw a cataract of blood pour from the mountains. In it a corpse floated by, a youth with blond hair and a wound in the head. He was followed by a gigantic black scarab and then by a red, newborn sun, rising up out of the depths of the water. At last it ceased, and the vision came to an end.",
            ],
            zh: [
              "忽然我被一幅强烈的景象震撼：我看到大量的血从山上倾泻而下。一具尸体漂流而过，是一位金发少年，头部有伤。随后是一只巨大的黑甲虫，然后是一轮从水的深处升起的红色新太阳。最终这一切结束了，幻象消失。",
            ],
          },
          image: {
            _prompt:
              "A cataract of blood poured from the mountains, carrying past a corpse of a blond-haired youth with a wound in the head, followed by a gigantic black scarab and then a red newborn sun rising out of the depths of the water.",
            path: "./assets/dreams-d13-s01.png",
          },
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: [
              "Six days later I was with an unknown, brown-skinned man, a savage, in a lonely, rocky mountain landscape.",
              "I heard Siegfried's horn sounding over the mountains and knew that we had to kill him. We were armed with rifles and lay in wait on a narrow path over the rocks. Then Siegfried appeared high up on the crest of the mountain, in the first ray of the rising sun.",
              "On a chariot made of the bones of the dead he drove at furious speed down the precipitous slope. When he turned a corner, we shot at him, and he plunged down, struck dead.",
              "A tremendous downfall of rain began, and I knew that it would wipe out all traces of the dead.",
            ],
            zh: [
              "六天之后，我与一个未知的棕皮肤男人，一个野人，一起待在一片孤寂的岩石山地中。",
              "我听到齐格弗里德的号角在山间回响，知道我们必须杀死他。我们手持步枪，埋伏在岩石上的一条狭窄路径上。随后齐格弗里德出现在山脊高处，在初升的阳光照射下。",
              "他驾着一辆由死者的骨头制成的战车，以疯狂的速度冲下陡坡。当他转过一个弯时，我们向他开枪，他坠落身亡。",
              "随后降下倾盆大雨，我知道这场雨会冲洗掉死者的所有痕迹。",
            ],
          },
          image: {
            _prompt:
              "In a lonely rocky mountain landscape with an unknown brown-skinned savage, we lay in wait with rifles after hearing Siegfried's horn; Siegfried appeared high on a crest, driving a chariot made of the bones of the dead down a precipitous slope, and when he turned a corner we shot him so that he plunged down dead as tremendous rain began to wipe out all traces.",
            path: "./assets/dreams-d13-s02.png",
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: [
              "Siegfried, I thought, represents what the Germans want to achieve, heroically to impose their will, to have their own way. The dream showed that the attitude embodied by Siegfried, the hero, no longer suited me. Therefore it had to be killed.",
              "The small, brown-skinned savage who accompanied me and had actually taken the initiative in the killing was an embodiment of the primitive shadow. The rain showed that the tension between consciousness and the unconscious was being resolved.",
            ],
            zh: [
              "我认为齐格弗里德代表德国人想要实现的东西，以英雄的姿态强加自己的意志，按自己的意愿行事。梦表明齐格弗里德这个英雄所体现的态度已不再适合我，因此必须被杀死。",
              "与我同行并实际上率先动手的那个棕皮肤小野人，是原始阴影的化身。大雨表明意识与无意识之间的紧张正在得到解决。",
            ],
          },
        },
      ],
      relatedConcepts: ['archetypes', 'shadow'],
    },
    {
      id: "d14",
      title: {
        en: "Liverpool",
        zh: "利物浦",
      },
      time: {
        en: "Mid-1920s, during mandala studies (ca. 1927–1928)",
        zh: "1920年代中期，在研究曼荼罗期间（约1927–1928年）",
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
            zh: "这就是我之前提到的那个梦：我发现自己身处一座肮脏而满是煤灰的城市。那是冬夜，黑暗而阴雨。",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "I was in Liverpool. With a number of Swiss I walked through the dark streets. I had the feeling that we were coming from the harbor, and that the real city was actually up above, on the cliffs. We climbed up there.",
              "When we reached the plateau, we found a broad square dimly illuminated by street lights, into which many streets converged. In the center was a round pool, and in the middle of it a small island. The little island blazed with sunlight. On it stood a single tree, a magnolia, in a shower of reddish blossoms. My companions commented on the abominable weather, and obviously did not see the tree.",
            ],
            zh: [
              "我在利物浦，和几个瑞士人一起走在黑暗的街道上。我感觉我们是从港口过来的，而真正的城市其实在上方的悬崖上。我们爬了上去。",
              "当我们到达高地时，看见一座昏暗路灯照着的宽阔广场，许多街道汇聚其间。广场中央是一个圆形池塘，池塘中有一座小岛。小岛沐浴在阳光下，岛上有一棵木兰树，正洒落着红色花瓣。我的同伴抱怨着恶劣的天气，显然没有看到那棵树。",
            ],
          },
          image: {
            _prompt:
              "In dark, rainy Liverpool I climbed up to a plateau where a broad square was dimly lit by streetlights; in its center was a round pool with a small island blazing with sunlight, bearing a single magnolia tree in a shower of reddish blossoms which my companions did not see.",
            path: "./assets/dreams-d14-s01.png",
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: [
              "This dream represented my situation at the time. Liverpool is the 'pool of life.'",
              "This dream brought with it a sense of finality. I saw that here the goal had been revealed. Through this dream I understood that the self is the principle and archetype of orientation and meaning.",
            ],
            zh: [
              "这个梦代表了我当时的处境。利物浦是“生命之池”。",
              "这个梦带来一种终局感。我看到目标已在此揭示。通过这个梦我理解到，自性是指引和意义的原则与原型。",
            ],
          },
        },
      ],
      relatedConcepts: ['self', 'individuation'],
    },
    {
      id: "d15+16",
      title: {
        en: "The Library; The Manor",
        zh: "图书馆；庄园",
      },
      time: {
        en: "Recurring dreams before discovering alchemy; crucial dream around 1926",
        zh: "在发现炼金术之前反复出现的梦；关键的梦约在1926年",
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
            en: "Before I discovered alchemy, I had a series of dreams which repeatedly dealt with the same theme. Beside my house stood another wing or annex, which was strange to me.",
            zh: "在我发现炼金术之前，我做了一系列反复围绕同一主题的梦。我的房子旁边有另一个翼楼或附属建筑，我对此感到陌生。",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "Finally came a dream in which I reached the other wing. I discovered there a wonderful library, dating largely from the sixteenth and seventeenth centuries.",
              "Large, fat folio volumes, bound in pigskin, stood along the walls. Among them were a number of books embellished with copper engravings of a strange character and illustrations containing curious symbols. In the dream I was conscious only of the fascination exerted by them and by the entire library.",
            ],
            zh: [
              "终于有一个梦里我到达了那座另一翼楼。我在那里发现了一座奇妙的图书馆，大多是十六、十七世纪的书籍。",
              "沿着墙摆放着厚重的大开本书籍，用猪皮装订。其中有一些书装饰着奇特的铜版画和包含奇异符号的插图。在梦中，我只觉它们和整个图书馆令人着迷。",
            ],
          },
          image: {
            _prompt:
              "In the strange other wing of my house I discovered a wonderful library of sixteenth- and seventeenth-century pigskin-bound folios lining the walls, some adorned with strange copper engravings, and I felt only intense fascination.",
            path: "./assets/dreams-d15+16-s01.png",
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: "The unknown wing of the house was a part of my personality, an aspect of myself that belonged to me but of which I was not yet conscious. It, and especially the library, referred to alchemy, of which I was ignorant, but which I was soon to study.",
            zh: "房子里这座未知的翼楼是我个性的一部分，是属于我但我尚未意识到的一个方面。它，尤其是图书馆，指的是炼金术，我当时一无所知，但我即将研究它。",
          },
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: [
              "The crucial dream came around 1926: I was in the South Tyrol. It was wartime. We had to cross a bridge and then go through a tunnel whose vaulting had been partially destroyed by the shells.",
              "Just as we reached the middle of the courtyard, in front of the main entrance, something unexpected happened: with a dull clang, both gates flew shut. The peasant leaped down from his seat and exclaimed, 'Now we are caught in the seventeenth century.'",
            ],
            zh: [
              "关键的梦出现在大约1926年：我在南蒂罗尔。当时正值战争。我们得过桥，然后穿过一个拱顶被炮弹部分摧毁的隧道。",
              "就在我们走到院子中央、来到主入口前时，意想不到的事情发生了：随着一声沉闷的巨响，两扇门砰然关上。农夫从座位上跳下来喊道：“现在我们被困在十七世纪了。”",
            ],
          },
          image: {
            _prompt:
              "In South Tyrol we got into the courtyard of a old manor; as we reached the middle, both gates closed with a dull clang. I thought, 'Now we are caught in the seventeenth century.' There was nobody there.",
            path: "./assets/dreams-d15+16-s02.png",
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: "Not until much later did I realize that it referred to alchemy, for that science reached its height in the seventeenth century. 'So that's it! Now I am condemned to study alchemy from the very beginning.'",
            zh: "直到很久以后我才意识到它指的是炼金术，因为这门科学在十七世纪达到顶峰。‘原来如此！现在我注定要从头开始学习炼金术。’",
          },
        },
      ],
      relatedConcepts: ['archetypes', 'self'],
    },
    {
      id: "d17",
      title: {
        en: "The Fish Laboratory and the Reception Room for Spirits",
        zh: "鱼类实验室与接待灵魂的客厅",
      },
      time: {
        en: "Mid-1940s, while working on the coniunctio and Christ symbolism",
        zh: "1940年代中期，在研究灵婚和基督象征时",
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
            en: "As with all problems that concerned me, that of the coniunctio was accompanied or heralded by dreams. In one of these dreams both this and the Christ problem were condensed in a remarkable image.",
            zh: "正如所有让我关注的问题一样，关于灵婚的问题也伴随或预示着梦。其中一个梦把这个问题与基督问题凝缩成了一个奇异的图像。",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "I dreamed once more that my house had a large wing which I had never visited. I came to a big double door and found myself in a room set up as a laboratory.",
              "On shelves along the walls stood hundreds of bottles containing every imaginable sort of fish. I was astonished: so now my father was going in for ichthyology!",
            ],
            zh: [
              "我再次梦见我的房子有一个我从未去过的大翼楼。我来到一扇双门前，发现自己置身于一间布置成实验室的房间。",
              "沿墙的架子上摆放着数百瓶各种各样的鱼。我惊讶极了：难道父亲现在研究起鱼类学来了！",
            ],
          },
          image: {
            _prompt:
              "In the large unknown wing of my house I came through a big double door into a laboratory whose walls were lined with shelves holding hundreds of bottles containing every imaginable sort of fish.",
            path: "./assets/dreams-d17-s01.png",
          },
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: [
              "I noticed a curtain which bellied out from time to time, as though a strong wind were blowing. Suddenly Hans, a young man from the country, appeared. He went to see whether a window was open and was gone for some time. When he returned, he said, 'Yes, there is something. It's haunted in there!'",
            ],
            zh: [
              "我注意到有一块窗帘不时鼓起，仿佛有强风在吹。突然，来自乡下的年轻人汉斯出现了。他去查看窗户是否开着，离开了一会儿。当他回来时，他说：‘是的，这里有东西，里面闹鬼！’",
            ],
          },
          // image: {
          //   _prompt:
          //     "Near a curtain that bellied out as if from a draught, Hans checked for an open window and returned to say, 'It's haunted in there.'",
          //   path: "./assets/dreams-d17-s02.png",
          // },
          image: null
        },
        {
          textBlockType: "scene",
          id: "s03",
          text: {
            en: [
              "I found a door which led to my mother's room. The room was very large, and suspended from the ceiling were two rows of five chests each, hanging about two feet above the floor, each containing two beds for visiting spirits to sleep.",
            ],
            zh: [
              "我发现一扇门通向母亲的房间。房间非常宽敞，天花板上吊着两排各五个吊箱，离地约两英尺，每个箱子里有两张床供来访的灵魂休息。",
            ],
          },
          image: {
            _prompt:
              "Inside my mother's very large room, two rows of five chests hung about two feet above the floor from the ceiling, each chest containing two beds prepared for visiting spirits.",
            path: "./assets/dreams-d17-s03.png",
          },
        },
        {
          textBlockType: "scene",
          id: "s04",
          text: {
            en: "Opposite my mother's room was a door. I entered a vast hall fitted out with easy chairs, small tables, pillars, and sumptuous hangings. A brass band was playing loudly; there was no one in the hall except the brass band blaring forth dance tunes and marches.",
            zh: "在母亲房间的对面有一扇门。我走进一个巨大的大厅，里面摆着软椅、小桌子、柱子和华丽的帷幔。一支铜管乐队大声演奏着；大厅里除了奏着舞曲和进行曲的铜管乐队外空无一人。",
          },
          image: {
            _prompt:
              "Opposite my mother's room I entered a vast hotel-like hall with easy chairs, small tables, pillars and sumptuous hangings, where a brass band loudly blared dance tunes and marches to an otherwise empty room.",
            path: "./assets/dreams-d17-s04.png",
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: [
              "The brass band in the hotel lobby suggested ostentatious jollity and worldliness, but behind it lay something quite different: the fish laboratory and the hanging pavilions for spirits.",
              "The fish laboratory indicates my preoccupation with Christ, who himself is the fish (ichthys). Both my parents appeared burdened with the problem of the 'cure of souls,' which in fact was really my task.",
            ],
            zh: [
              "酒店大堂里的铜管乐队暗示着炫耀的欢乐和世俗，但其背后隐藏着完全不同的东西：鱼类实验室和为灵魂准备的悬挂小屋。",
              "鱼类实验室意味着我对基督的关怀，他本身就是鱼（ichthys）。我的父母似乎都背负着“治愈灵魂”的问题，而这实际上是我的任务。",
            ],
          },
        },
      ],
      relatedConcepts: ['synchronicity', 'archetypes'],
    },
    {
      id: "d18",
      title: {
        en: "The Deceased Father: The Bible and the Highest Presence",
        zh: "已故的父亲：圣经与至高的临在",
      },
      time: {
        en: "Early 1950s, foreshadowing Answer to Job",
        zh: "1950年代初，预示《回应约伯记》",
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
            zh: "约伯问题及其所有延伸同样早已在梦中被预示。",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "It started with my paying a visit to my long-deceased father. I met him in his study, and he fetched a big Bible down from a shelf, a heavy folio volume. The Bible my father held was bound in shiny fishskin.",
              "He opened it at the Old Testament and began interpreting a passage so swiftly and so learnedly that I could not follow him. Dr. Y and his son thought that my father was going off the deep end and that what he said was simply senile prattle.",
            ],
            zh: [
              "梦开始于我去拜访早已过世的父亲。我在他的书房见到他，他从书架上取下一本厚重的大开本圣经。这本圣经用闪亮的鱼皮装订。",
              "他翻开旧约，用极快而博学的方式解读一段经文，我根本跟不上他的思路。Y博士和他的儿子认为我的父亲走火入魔，说的话只是老人的胡言乱语。",
            ],
          },
          image: {
            _prompt:
              "In my long-deceased father's study he took down a big heavy folio Bible bound in shiny fishskin, opened it swiftly at the Old Testament and spoke with such learned rapidity that I could not follow, while the other visitors thought he was lapsing into senile prattle.",
            path: "./assets/dreams-d18-s01.png",
          },
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: [
              "Then the scene changed. We heard loud thumps, and my father indicated to me that the place was haunted.",
              "We climbed a narrow staircase to the second floor and entered a large hall which was the exact replica of the divan-i-kaas of Sultan Akbar. From the center a steep flight of stairs ascended to a small door high up on the wall. My father said, 'Now I will lead you into the highest presence.' Then he knelt down and touched his forehead to the floor.",
            ],
            zh: [
              "随后场景变化。我们听到沉重的撞击声，父亲示意我这地方闹鬼。",
              "我们走上一条狭窄的楼梯到二楼，进入一座大殿，它与苏丹阿克巴的会客厅完全一样。大殿中央有一段陡峭的楼梯通向墙上高处的小门。父亲说：‘现在我要带你去见至高的存在。’他随后跪下，额头触地。",
            ],
          },
          image: {
            _prompt:
              "Following loud thumps in a haunted place, my father led me up a narrow staircase to a large hall like the divan-i-kaas of Akbar, from whose center a steep stair rose to a small upper door; before it he knelt and touched his forehead to the floor, saying he would lead me into the highest presence.",
            path: "./assets/dreams-d18-s02.png",
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: [
              "The fishskin marks the Bible as an unconscious content, something living and yet unrecognized; his audience is in part incapable of understanding.",
              "The dream-image of the lobby was a gigantic mandala; the upper door led to a solitary chamber where lived Uriah. The dream describes how the unconscious task was working out.",
            ],
            zh: [
              "鱼皮标记着这本圣经是一种无意识内容，既活着又未被认识；他的听众中有些人无法理解。",
              "梦中大厅的意象是一个巨大的曼荼罗；上面的门通向一间孤独的房间，乌利亚住在那里。这个梦描述了无意识任务如何展开。",
            ],
          },
        },
      ],
      relatedConcepts: ['self', 'archetypes'],
    },
    {
      id: "d19",
      title: {
        en: "The Footsteps outside the Bollingen Tower",
        zh: "博林根塔外的脚步声",
      },
      time: {
        en: "Late winter / early spring 1924",
        zh: "1924年晚冬／早春",
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
            en: "On another such still night when I was alone in Bollingen, I awoke to the sound of soft footsteps going around the Tower.",
            zh: "又一个这样寂静的夜晚，当我独自在博林根时，我被绕塔的轻柔脚步声惊醒。",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "Distant music sounded, coming closer and closer, and then I heard voices laughing and talking.",
              "I opened the window—all was still. Again the dream began: once more I heard footsteps, talk, laughter, music. I had a visual image of several hundred dark-clad figures pouring in around the Tower with a great deal of loud trampling, laughing, singing, and playing of accordions.",
            ],
            zh: [
              "远处传来音乐声，越来越近，然后我听到了笑声和谈话声。",
              "我打开窗户——一片寂静。梦再次开始：我又听见脚步声、谈话声、笑声和音乐。我眼前浮现出几百个穿着黑衣的人涌向塔周围，伴着喧闹的脚步、笑声、歌唱和手风琴的演奏。",
            ],
          },
          image: {
            _prompt:
              "On a still night at Bollingen I heard distant music, laughter, talking and soft footsteps circling the Tower, and then saw in imagination several hundred dark-clad figures pouring in around it with loud trampling, laughing, singing, and accordion playing.",
            path: "./assets/dreams-d19-s01.png",
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: [
              "It seemed to me they had come out of curiosity. It would seem most likely to have been a synchronistic phenomenon.",
              "I later found a seventeenth-century parallel in Rennward Cysat’s chronicle describing Wotan’s army of departed souls; I also learned of the Reisläufer gatherings in spring.",
            ],
            zh: [
              "我觉得他们是出于好奇而来。这很可能是一种共时性现象。",
              "后来我在伦瓦德·西萨特的编年史中找到了17世纪的一个对应，描述沃坦的亡魂之军；我还了解了春季瑞士雇佣兵的聚会。",
            ],
          },
        },
      ],
      relatedConcepts: ['synchronicity', 'psyche'],
    },
    {
      id: "d20",
      title: {
        en: "The Arabian Prince",
        zh: "阿拉伯王子",
      },
      time: {
        en: "1925, night before sailing home from North Africa",
        zh: "1925年，从北非返航前夜",
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
            zh: "在我们从马赛登船的前夜，我做了一个梦，我感觉它总结了整个经历。",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "I was in an Arab city situated in a broad plain and surrounded by a wall with four gates. The casbah in the interior of the city was surrounded by a wide moat.",
              "When I was about halfway across the bridge, a handsome, dark Arab of aristocratic bearing came toward me from the gate. He attacked me and tried to knock me down. We wrestled, crashed against the railing, and both of us fell into the moat, where he tried to push my head under water; in my turn I pushed his head under water.",
            ],
            zh: [
              "我在一座坐落于辽阔平原上的阿拉伯城市，四周有城墙和四个城门。城内的卡斯巴由宽阔的护城河围绕。",
              "当我走到桥的一半时，一位英俊、肤色黝黑、带着贵族气质的阿拉伯人从城门方向走向我。他攻击我，试图将我击倒。我们扭打着撞上栏杆，两人都跌进护城河里，他试图把我的头按进水里；我也反过来把他的头按进水里。",
            ],
          },
          image: {
            _prompt:
              "In a walled Arab city on a broad plain, as I crossed the wide moat of the casbah, a handsome dark Arab approached.",
            path: "./assets/dreams-d20-s01.png",
          },
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: [
              "Then the scene of the dream changed, and he was with me in a large vaulted octagonal room in the center of the citadel. On the floor lay an open book with black letters written in magnificent calligraphy; I had the feeling that this was 'my book,' that I had written it.",
              "The young prince sat to the right of me. I explained to him that now that I had overcome him he must read the book. I placed my arm around his shoulders and forced him, with a sort of paternal kindness and patience, to read the book.",
            ],
            zh: [
              "然后梦境改变，他和我一起在城堡中心一间拱形的八角形大厅里。地上放着一本打开的书，黑色的文字以华丽的书法写着；我感觉这是‘我的书’，是我写的。",
              "年轻的王子坐在我右边。我告诉他，现在我已经战胜了他，他必须读这本书。我搂着他的肩膀，以一种父亲般的慈爱和耐心迫使他阅读这本书。",
            ],
          },
          image: {
            _prompt:
              "In a large vaulted octagonal room at the center of the citadel, an open book with black calligraphy lay on the floor; the handsome dark Arab sat at my right and read it.",
            path: "./assets/dreams-d20-s02.png",
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: [
              "The Arab youth was a figuration of the self, a messenger of the self. His attempt to kill me was an echo of the motif of Jacob's struggle with the angel.",
              "My aim is, through insight, to make it more conscious, so that we can find a common modus vivendi. The dream reveals how my encounter with North Africa affected me.",
            ],
            zh: [
              "这位阿拉伯青年是自性的形象，是自性的使者。他试图杀我，呼应了雅各与天使搏斗的主题。",
              "我的目标是通过洞见使这一切更为意识化，以便我们找到一种共同的生活方式。这个梦揭示了我在北非的经历如何影响了我。",
            ],
          },
        },
      ],
      relatedConcepts: ['persona', 'anima-animus'],
    },
    {
      id: "d21",
      title: {
        en: "The Black Barber",
        zh: "黑理发师",
      },
      time: {
        en: "1925, during the East Africa expedition",
        zh: "1925年，东非探险期间",
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
            en: "During the entire trip my dreams stubbornly followed the tactic of ignoring Africa. Only once during the entire expedition did I dream of a Negro.",
            zh: "整个旅程中，我的梦顽固地忽视了非洲。整个探险期间我只有一次梦见了一个黑人。",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: "He had been my barber in Chattanooga, Tennessee. In the dream he was holding a tremendous, red-hot curling iron to my head, intending to make my hair kinky—that is, to give me Negro hair.",
            zh: "他曾是我在田纳西州查塔努加的理发师。梦里他拿着一个巨大的、烧得通红的烫发钳靠近我的头，想把我的头发烫卷，也就是烫成黑人头发。",
          },
          image: {
            _prompt:
              "My former black barber held a tremendous red-hot curling iron.",
            path: "./assets/dreams-d21-s01.png",
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: [
              "I took this dream as a warning from the unconscious; it was saying that the primitive was a danger to me.",
              "The dreams dealt with my personal problems. My European personality must under all circumstances be preserved intact.",
            ],
            zh: [
              "我把这个梦看作无意识的警告；它在说，原始的东西对我是一种危险。",
              "这些梦处理的是我的个人问题。无论如何，我的欧洲人格必须完整保存。",
            ],
          },
        },
      ],
      relatedConcepts: ['shadow'],
    },
    {
      id: "d22",
      title: {
        en: "The Grail and the Islands",
        zh: "圣杯与群岛",
      },
      time: {
        en: "1938, while ill in India",
        zh: "1938年，在印度生病期间",
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
            en: "India honored me with three doctorates from Allahabad, Benares, and Calcutta. It was a little too much of a good thing, and I needed a retreat. A ten-day spell in the hospital offered it to me.",
            zh: "印度授予我阿拉哈巴德、贝拿勒斯和加尔各答三所大学的博士学位。这有点受宠若惊，我需要一段休养。十天的住院给了我这样的机会。",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "I found myself, with a large number of my Zurich friends and acquaintances, on an unknown island. On the rocky coast at the southern end of the island was a medieval castle.",
              "We stood in its courtyard. This was the castle of the Grail, and that evening there would be a 'celebration of the Grail' here. A German professor among us spoke learnedly about sources but was not conscious of the meaning of the legend nor of its living presentness.",
            ],
            zh: [
              "我发现自己和许多苏黎世的朋友和熟人一起在一个未知的岛上。岛的南端多岩石的海岸上矗立着一座中世纪城堡。",
              "我们站在它的庭院里。这是圣杯的城堡，晚上将在这里举行“圣杯庆典”。我们当中一位德国教授滔滔不绝地谈论渊源，却没有意识到传说的意义及其活生生的现实。",
            ],
          },
          image: {
            _prompt:
              "With friends I was on an unknown island whose rocky southern coast bore a medieval castle.",
            path: "./assets/dreams-d22-s01.png",
          },
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: [
              "I discovered that I was standing by the wall of a tall castle; the lower portion of the wall was covered by a kind of trellis of black iron artfully formed into a grapevine. Suddenly I saw a tiny, iron, hooded gnome, a cucullatus, scurrying from one little house to the next.",
            ],
            zh: [
              "我发现自己站在一座高城堡的墙边；墙下半部覆盖着一种黑铁格子，巧妙地形成葡萄藤。突然我看见一个小小的铁制兜帽侏儒，一个葡萄藤精灵，在一座座小房子间忙碌地穿梭。",
            ],
          },
          image: {
            _prompt:
              "By the wall of a tall castle whose lower portion was covered by a black-iron trellis formed into a grapevine, I suddenly noticed a tiny iron hooded gnome, a cucullatus, scurrying from one little house on the vine to the next.",
            path: "./assets/dreams-d22-s02.png",
          },
        },
        {
          textBlockType: "scene",
          id: "s03",
          text: {
            en: [
              "The dream changed. The Grail was said to be in the northern part of the island, hidden in the only house there. There was no bridge, no boat. I came to the conclusion that I alone must swim across the channel and fetch the Grail. I took off my clothes. At that point I awoke.",
            ],
            zh: [
              "梦境改变了。据说圣杯在岛的北部，藏在唯一的一所房子里。没有桥，也没有船。我得出结论只有我必须游过海峡取回圣杯。我脱下衣服，就在那时醒了。",
            ],
          },
          image: {
            _prompt:
              "On the northern part of the island, with no bridge or boat across the channel.",
            path: "./assets/dreams-d22-s03.png",
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: "Imperiously, the dream wiped away all the intense impressions of India and swept me back to the too-long-neglected concerns of the Occident. It was as though the dream asked, 'What are you doing in India? Rather seek for yourself and your fellows the healing vessel, the servator mundi, which you urgently need.'",
            zh: "这个梦果断地抹去了印度留下的所有强烈印象，将我拉回长期被忽视的西方事务。梦似乎在问：“你在印度做什么？还是为你自己和同伴寻找那只你们急需的治愈之器——世界的守护者吧。”",
          },
        },
      ],
      relatedConcepts: ['alchemy', 'archetypes'],
    },
    {
      id: "d23",
      title: {
        en: "The Deceased Wife",
        zh: "已故的妻子",
      },
      time: {
        en: "After Emma Jung’s death in 1955",
        zh: "1955年艾玛·荣格去世之后",
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
            zh: "后来我再次体验到这种客观性。那是在妻子去世之后。",
          },
        },
        {
          textBlockType: "scene",
          id: "s01",
          text: {
            en: [
              "I saw her in a dream which was like a vision. She stood at some distance from me, looking at me squarely.",
              "She was in her prime, perhaps about thirty, wearing the dress which had been made for her many years before. Her expression was neither joyful nor sad, but, rather, objectively wise and understanding. I knew that it was not she, but a portrait she had made or commissioned for me.",
            ],
            zh: [
              "我在一个宛如异象的梦中见到她。她站在离我不远处，正视着我。",
              "她正值盛年，大约三十岁，穿着多年前为她做的一件衣服。她的表情既不喜悦也不悲伤，而是客观的智慧和理解。我知道那并不是她本人，而是她为我制作或委托的肖像。",
            ],
          },
          image: {
            _prompt:
              "In a dream like a vision my wife stood from afar, gazing at my direction.",
            path: "./assets/dreams-d23-s01.png",
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: "Face to face with such wholeness one remains speechless. The objectivity is part of a completed individuation.",
            zh: "面对这样的完整性，人会哑口无言。这种客观性是完成个体化的一部分。",
          },
        },
      ],
      relatedConcepts: ['self', 'individuation'],
    },
    {
      id: "d24+25",
      title: {
        en: "The Grave in the Bed; The Garden Party",
        zh: "床中的坟墓；花园聚会",
      },
      time: {
        en: "Premonitions of deaths in family and among friends",
        zh: "预感家人与友人死亡的梦",
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
              "I dreamed that my wife's bed was a deep pit with stone walls. It was a grave. Then I heard a deep sigh, as if someone were giving up the ghost.",
              "A figure that resembled my wife sat up in the pit and floated upward. It wore a white gown into which curious black symbols were woven.",
            ],
            zh: [
              "我梦见妻子的床是一个有石墙的深坑，那是一个坟墓。随后我听到一声深沉的叹息，好像有人咽了最后一口气。",
              "一个像我妻子的身影从坑里坐起并向上漂浮。她穿着一件白色长袍，长袍上织着奇特的黑色符号。",
            ],
          },
          image: {
            _prompt:
              "In our bedroom, my wife's bed had become a deep stone-walled pit like a grave; after a deep sigh a figure resembling her sat up from the pit and floated upward, wearing a white gown woven with curious black symbols.",
            path: "./assets/dreams-d24+25-s01.png",
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: "The dream was so curious that I thought at once that it might signify a death. At seven o'clock came the news that a cousin of my wife had died at three o'clock in the morning.",
            zh: "这个梦如此奇特，我立刻想到它可能预示着死亡。清晨七点便传来了消息，说妻子的一个堂兄弟在凌晨三点去世。",
          },
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: [
              "I once had a dream in which I was attending a garden party. I saw my sister there, and that greatly surprised me, for she had died some years before. A deceased friend of mine was also present.",
              "My sister was accompanied by a lady I knew well. Even in the dream I had drawn the conclusion that the lady was going to die.",
            ],
            zh: [
              "我曾梦见自己参加一场花园聚会。我在那里看见我的姐姐，这让我很惊讶，因为她几年前就已经去世了。我的一位已故朋友也在。",
              "我姐姐身边是一位我十分熟悉的女士。即便在梦里，我也得出了这位女士将要死去的结论。",
            ],
          },
          image: {
            _prompt:
              "At a garden party I saw two women together, from afar.",
            path: "./assets/dreams-d24+25-s02.png",
          },
        },
        {
          textBlockType: "impact",
          id: "p02",
          text: {
            en: "A few weeks later I received news that a friend of mine had had a fatal accident. I knew at once that she was the person I had seen in the dream but had been unable to identify.",
            zh: "几周后，我收到了朋友发生致命事故的消息。我立刻明白她就是梦中我看到却无法辨认的那个人。",
          },
        },
      ],
      relatedConcepts: ['synchronicity'],
    },
    {
      id: "d26",
      title: {
        en: "The Questions from the Spirit",
        zh: "灵魂提出的问题",
      },
      time: {
        en: "1911, during a bicycle trip through northern Italy",
        zh: "1911年，在骑自行车穿越意大利北部期间",
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
              "In the dream I was in an assemblage of distinguished spirits of earlier centuries, and the conversation was conducted in Latin.",
              "A gentleman with a long, curly wig addressed me and asked a difficult question. I understood him, but did not have a sufficient command of the language to answer him in Latin. I felt so profoundly humiliated by this that the emotion awakened me.",
            ],
            zh: [
              "梦里我身处一个由早期世纪杰出灵魂组成的聚会，谈话用拉丁语进行。",
              "一位戴着长卷曲假发的绅士向我提出了一个难题。我听懂了他的问题，但我的拉丁语不够流利，无法用拉丁语回答。这让我深感羞辱，这种情绪把我惊醒了。",
            ],
          },
          image: {
            _prompt:
              "In an assemblage of distinguished people of earlier centuries conversing, a gentleman with a long curly wig was among them. I saw the scene from afar.",
            path: "./assets/dreams-d26-s01.png",
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: "At the very moment of awakening I thought of the book I was then working on and had such intense inferiority feelings about the unanswered question that I immediately took the train home in order to get back to work.",
            zh: "就在醒来的那一刻，我想到了我正在写的书，对没有回答出那个问题感到极度自卑，于是立刻乘火车回家继续工作。",
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: "The bewigged gentleman was a kind of ancestral spirit, one of the dead who had addressed questions to me in vain. They came 'back from Jerusalem, where they found not what they sought.'",
            zh: "那位戴假发的绅士是一种祖灵，是那些徒然向我提问的亡灵之一。他们“从耶路撒冷回来，没有找到他们所寻求的东西”。",
          },
        },
      ],
      relatedConcepts: ['archetypes', 'psyche'],
    },
    {
      id: "d27",
      title: {
        en: "The Deceased Friend",
        zh: "已故的朋友",
      },
      time: {
        en: "Shortly after a friend's death",
        zh: "朋友去世后不久",
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
              "I dreamed once that I was paying a visit to a friend who had died about two weeks before. In the dream his home was on a hill, and the walls of an old castle surrounded a square consisting of a small church and a few smaller buildings.",
              "My friend sat at a table with his daughter. He was so fascinated by what she was saying that he greeted me only with a casual wave of the hand, as though to intimate: 'Don't disturb me.'",
            ],
            zh: [
              "我曾梦见自己去拜访一位大约两周前去世的朋友。梦里他的家在山上，一座古堡的墙围绕着一个广场，那里有一座小教堂和几栋小建筑。",
              "我的朋友和他的女儿坐在一张桌旁。他如此被女儿所说的话吸引，只是随意挥手向我致意，好像在示意：‘别打扰我。’",
            ],
          },
          image: {
            _prompt:
              "My friend sat at a table in the house with his daughter, who was about 25 years old, absorbed in what she said. I saw the scene from afar.",
            path: "./assets/dreams-d27-s01.png",
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: "The dream told me that now he was required to grasp the reality of his psychic existence, which he had never been capable of doing during his life.",
            zh: "这个梦告诉我，他现在需要理解自己心理存在的现实，这是他生前从未能够做到的。",
          },
        },
      ],
      relatedConcepts: ['psyche', 'self'],
    },
    {
      id: "d28",
      title: {
        en: "The Wolfhound",
        zh: "猎狼犬",
      },
      time: {
        en: "Night before his mother's death, January 1923",
        zh: "1923年1月母亲去世前夜",
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
              "Suddenly I heard a piercing whistle, and a gigantic wolfhound with a fearful, gaping maw burst forth. It tore past me, and I suddenly knew: the Wild Huntsman had commanded it to carry away a human soul.",
            ],
            zh: [
              "我身处一片浓密幽暗的森林；奇异巨大的岩石散落在如丛林般的巨树之间。",
              "突然我听到刺耳的哨声，一只巨大的猎狼犬张着令人恐怖的大嘴冲了出来。它从我身旁飞奔而过，我突然知道：狂猎之主命令它带走一个人的灵魂。",
            ],
          },
          image: {
            _prompt:
              "In a dense gloomy forest strewn with gigantic boulders among huge jungle-like trees, a gigantic wolfhound with a fearful gaping maw burst forth.",
            path: "./assets/dreams-d28-s01.png",
          },
        },
        {
          textBlockType: "impact",
          id: "p01",
          text: {
            en: [
              "The dream seemed to say that the soul of my mother was taken into that greater territory of the self which lies beyond the segment of Christian morality.",
              "During the journey home I continually heard dance music, laughter, and jollity, as though a wedding were being celebrated—one side of me had a feeling of warmth and joy, and the other of terror and grief.",
            ],
            zh: [
              "这个梦似乎在说，我母亲的灵魂被带入自性更广阔的领域，那是基督教道德之外的领域。",
              "在回家的旅途中，我不断听到舞曲、笑声和欢闹声，仿佛在举行婚礼——我一方面感到温暖和喜悦，另一方面却感到恐惧和悲痛。",
            ],
          },
        },
      ],
      relatedConcepts: ['shadow', 'archetypes'],
    },
    {
      id: "d29",
      title: {
        en: "The Deceased Father: Marital Consultation",
        zh: "已故的父亲：婚姻咨询",
      },
      time: {
        en: "September 1922, months before his mother's death",
        zh: "1922年9月，母亲去世前几个月",
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
              "My father once more appeared in a dream, as if he had returned from a distant journey. He looked rejuvenated and had shed his appearance of paternal authoritarianism.",
              "He then said to me that since I was after all a psychologist, he would like to consult me about marital psychology. I made ready to give him a lengthy lecture, but at this point I awoke.",
            ],
            zh: [
              "我的父亲再次出现在梦中，好像他从一次遥远的旅程归来。他看起来更年轻了，已经摆脱了父亲式的权威外貌。",
              "他随后对我说，既然我毕竟是个心理学家，他想向我咨询婚姻心理学。我正准备向他长篇大论地解释，但这时我醒了。",
            ],
          },
          image: {
            _prompt:
              "My father returned from a distant journey. I saw him standing at the door.",
            path: "./assets/dreams-d29-s01.png",
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: "My dream was a forecast of my mother's death; he wished to ask a psychologist about marital problems, since he would soon have to resume this relationship again.",
            zh: "我的梦预示了母亲的去世；他想向一位心理学家咨询婚姻问题，因为他很快将不得不重新开始这段关系。",
          },
        },
      ],
      relatedConcepts: ['complexes', 'self'],
    },
    {
      id: "d30+31",
      title: {
        en: "The UFOs; The Meditating Yogi",
        zh: "不明飞行物；打坐的瑜伽士",
      },
      time: {
        en: "After his 1944 illness (yogi) and October 1958 (UFOs)",
        zh: "1944年病后（瑜伽士）和1958年10月（飞碟）",
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
              "In October 1958 I caught sight from my house of two lens-shaped metallically gleaming disks; then another body came flying directly toward me like the objective of a telescope.",
              "Immediately afterward, another came speeding through the air, a lens with a metallic extension which led to a box—a magic lantern. Still half in the dream, the thought passed through my head: 'We always think that the UFOs are projections of ours. Now it turns out that we are their projections.'",
            ],
            zh: [
              "1958年10月，我在家里看到两个透镜状、金属光泽的圆盘；随后又有一个物体像望远镜的物镜一样直冲向我飞来。",
              "紧接着，又有一个像透镜的物体飞速掠过天空，它带着金属延伸，连着一个盒子——一个幻灯机。半梦半醒间，我脑中闪过念头：‘我们总以为不明飞行物是我们的投射，现在原来我们才是它们的投射。’",
            ],
          },
          image: {
            _prompt:
              "I saw two metallically gleaming disks moving through the night sky from afar.",
            path: "./assets/dreams-d30+31-s01.png",
          },
        },
        {
          textBlockType: "scene",
          id: "s02",
          text: {
            en: [
              "In an earlier dream I came to a small wayside chapel and found only a wonderful flower arrangement on the altar.",
              "On the floor in front of the altar sat a yogi in lotus posture, in deep meditation. When I looked at him more closely, I realized that he had my face. I awoke with the thought: 'Aha, so he is the one who is meditating me. He has a dream, and I am it.'",
            ],
            zh: [
              "在较早的一个梦里，我来到路边一座小礼拜堂，发现祭坛上只有一束精美的花束。",
              "在祭坛前的地板上，坐着一位瑜伽士，双腿盘坐，深深冥想。当我更仔细地看他时，发现他有我的面孔。我带着一个念头醒来：‘啊哈，原来是他在冥想着我。他有一个梦，而我就是那个梦。’",
            ],
          },
          image: {
            _prompt:
              "Inside a small wayside chapel with only a wonderful flower arrangement on the altar, a yogi sat in lotus posture on the floor in deep meditation.",
            path: "./assets/dreams-d30+31-s02.png",
          },
        },
        {
          textBlockType: "interpretation",
          id: "i01",
          text: {
            en: [
              "The aim of both these dreams is to effect a reversal of the relationship between ego-consciousness and the unconscious, and to represent the unconscious as the generator of the empirical personality.",
              "This state of affairs resembles very closely the Oriental conception of Maya. The self assumes human shape in order to enter three-dimensional existence.",
            ],
            zh: [
              "这两个梦的目的都是为了扭转自我意识与无意识之间的关系，并呈现无意识作为经验人格的生成者。",
              "这种状况与东方的“幻相”概念非常相似。自性取人形以进入三维存在。",
            ],
          },
        },
      ],
      relatedConcepts: ['synchronicity', 'self', 'psyche'],
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
