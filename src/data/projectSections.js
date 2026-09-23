export const projectSections = [
  {
    "id": "project-00",
    "number": "PROJECT 00",
    "title": "topo.audio",
    "lead": "A listener-informed environment for organizing and navigating harmony through experienced relationships.",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Topo.audio is a music-technology project exploring whether harmonic material can be organized through relationships in how musical changes are experienced. It brings together controlled sound generation, listening research, computational representation, and interactive software to construct spaces that can be analyzed, heard, and navigated."
      },
      {
        "type": "paragraph",
        "text": "The project begins with harmony because harmonic material can be varied systematically while remaining musically consequential. Structural descriptions such as pitches, intervals, chord labels, voice leading, register, and acoustic properties remain important, but they do not fully describe what a change does in experience: whether it seems to open or contract, approach or withdraw, settle or destabilize, resemble another change, or occupy a perceptual region of its own."
      },
      {
        "type": "paragraph",
        "text": "Topo.audio asks whether these relationships can become part of the representation itself. Its long-term aim is an environment in which composers and researchers can move between sound, listener experience, musical structure, and computational form without treating any one of them as the complete explanation of the others."
      }
    ],
    "statement": "THE PROJECT TREATS MUSICAL EXPERIENCE AS SOMETHING THAT CAN BE RELATED, EXPLORED, AND WORKED WITH, WHILE REMAINING OPEN TO DIFFERENCE BETWEEN LISTENERS AND CONTEXTS.",
    "links": []
  },
  {
    "id": "project-01",
    "number": "PROJECT 01",
    "title": "the representational problem",
    "lead": "Most systems organize harmony by what musical structures are. Topo.audio begins with what those structures are experienced as doing.",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Western music theory, acoustics, and computational music systems provide powerful ways to describe harmonic material. Notes can be grouped into chords and pitch-class sets. Chords can be assigned functions, scale degrees, interval structures, or positions within a key. Voice-leading models can describe how efficiently one sonority moves to another. Audio analysis can describe spectrum, roughness, and other acoustic properties."
      },
      {
        "type": "paragraph",
        "text": "These representations reveal important aspects of music, but the relationships they encode are not identical to the relationships a listener hears. Two harmonic changes may be structurally different yet feel closely related. Two changes with similar labels may diverge sharply in weight, direction, stability, distance, or character. A composer can often recognize these relationships by listening even when they are difficult to name or search for."
      },
      {
        "type": "paragraph",
        "text": "Software inherits the same limitation. A musician can search by chord symbol, key, scale, interval, or theoretical category, but cannot easily ask for alternatives that occupy a similar experiential neighborhood or continue a particular kind of perceptual movement. The information exists in listening and musical judgment, but it is rarely available to the system as an explicit form of organization."
      },
      {
        "type": "paragraph",
        "text": "Topo.audio approaches this as a representational problem. Instead of assigning each musical event a fixed emotional label, it investigates how events relate: which seem close or distant, which form groups, which changes imply similar directions, and where a sequence appears to cross from one kind of experience into another."
      }
    ],
    "statement": "THE AIM IS NOT TO REPLACE MUSICAL THEORY WITH FEELING. IT IS TO CONNECT STRUCTURAL DESCRIPTION WITH RELATIONSHIPS THAT CONVENTIONAL MUSICAL REPRESENTATIONS LEAVE IMPLICIT.",
    "links": []
  },
  {
    "id": "project-02",
    "number": "PROJECT 02",
    "title": "a perceptual architecture",
    "lead": "If listeners experience relationships among musical events, those relationships can potentially be represented as an architecture rather than a list of labels.",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Topo.audio treats individual listening judgments as partial observations of a larger relational structure. A listener might place two events near one another, separate others, group a set, or describe a change as moving in a particular direction. Repeated across musical material, these observations can begin to define neighborhoods, boundaries, continuities, and trajectories."
      },
      {
        "type": "paragraph",
        "text": "The resulting space is not assumed to be a literal two-dimensional map or a universal organization shared by everyone. Different listeners, tasks, contexts, and musical datasets may produce overlapping or divergent structures. The project is interested in those differences as well as in whatever organization proves stable enough to recur."
      },
      {
        "type": "paragraph",
        "text": "What matters is that the representation remains connected in both directions. Every location or relationship can be traced back to the sounds and musical descriptions from which it emerged, while musical material can be queried through the listener-derived relationships that organize it."
      }
    ],
    "statement": "THE TOPOLOGY IS NOT A REPLACEMENT FOR THE MUSIC. IT IS A RELATIONAL LAYER THROUGH WHICH THE MUSIC CAN BE INSPECTED, COMPARED, AND HEARD AGAIN.",
    "links": []
  },
  {
    "id": "project-03",
    "number": "PROJECT 03",
    "title": "from map to instrument",
    "lead": "A representation becomes musically interesting when it can be navigated.",
    "blocks": [
      {
        "type": "paragraph",
        "text": "A perceptual topology can function as more than an analytical picture. If harmonic material occupies relational neighborhoods, a musician can begin to ask different kinds of questions: what alternatives lie near this event? Which changes continue in a similar direction? What happens if a progression crosses a boundary, remains within a region, or follows a path through several contrasting areas?"
      },
      {
        "type": "paragraph",
        "text": "Because the representation remains linked to musical structure, these queries can return actual harmonic material rather than abstract coordinates alone. A region can be auditioned. A path can suggest a sequence of candidates. A perceived relationship can be compared with the voice leading, interval structure, register, or other properties of the events that produce it."
      },
      {
        "type": "paragraph",
        "text": "The objective is not automatic composition or guaranteed emotional control. A listener-derived representation does not determine what a composer should write, and a region does not correspond to one fixed emotional meaning. It provides another way of encountering and selecting material: an instrument for moving through relationships that are otherwise difficult to address computationally."
      }
    ],
    "statement": "THE COMPOSER DOES NOT ASK THE SYSTEM TO CHOOSE. THE SYSTEM MAKES A RELATIONAL SPACE AVAILABLE FOR LISTENING, NAVIGATION, AND DECISION.",
    "links": []
  },
  {
    "id": "project-04",
    "number": "PROJECT 04",
    "title": "the system",
    "lead": "Topo.audio is being developed as a connected set of software instruments for generating musical material, collecting listener relationships, and exploring the representations that emerge.",
    "blocks": [
      {
        "type": "paragraph",
        "text": "The Harmonic Sequence Generator creates controlled harmonic material and keeps each sound connected to its structural description. Audio Canvas provides listening interfaces through which relationships can be articulated spatially, directionally, or through selected perceptual dimensions. Topology Explorer brings the resulting observations together for relational analysis, visualization, auditioning, and comparison."
      },
      {
        "type": "paragraph",
        "text": "Together, the tools form a loop rather than a one-way pipeline. Material can be generated and judged; listener observations can be represented and inspected; patterns in those representations can suggest new musical queries; and new material can return to listening. Research tests whether the relationships are reliable and interpretable. The software makes those relationships available as something that can be explored."
      },
      {
        "type": "paragraph",
        "text": "The current tools are working research prototypes rather than a finished product. Their role is to make the underlying idea operational: to keep sound, listener experience, musical description, and computational representation connected throughout the project."
      }
    ],
    "statement": "GENERATE → LISTEN → REPRESENT → EXPLORE → RETURN TO SOUND.",
    "links": [
      {
        "label": "EXPLORE THE TOOLS",
        "to": "/tools"
      },
      {
        "label": "READ THE RESEARCH",
        "to": "/research"
      }
    ]
  }
];
