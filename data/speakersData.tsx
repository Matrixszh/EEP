interface KeyTrait {
    trait: string;
  }
  
  export interface Speaker {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
    bio: string;
    keyTraits: KeyTrait[];
  }
  
  const speakersData: Speaker[] = [
    {
      id: 1,
      firstName: "King",
      lastName: "Khang",
      image: "/King_Khang.png",
      bio: "A prominent real estate investor and coach specializing in wholesaling real estate. Known for his high-energy personality, he inspires others to break into the industry without significant capital.",
      keyTraits: [
        { trait: "Dynamic speaker" },
        { trait: "Actionable strategies" },
        { trait: "Motivational approach" }
      ]
    },
    {
      id: 2,
      firstName: "Brent",
      lastName: "Daniels",
      image: "/Brent_Daniels.png",
      bio: "Creator of the \"TTP Method\" (Talk to People), Brent is a wholesaling expert who focuses on teaching investors how to build businesses through cold calling and effective communication.",
      keyTraits: [
        { trait: "Charismatic mentor" },
        { trait: "Hands-on teaching style" },
        { trait: "Advocate for direct outreach" }
      ]
    },
    {
      id: 3,
      firstName: "Steve",
      lastName: "Trang",
      image: "/Steve_Trang.png",
      bio: "Founder of the Real Estate Disruptors movement, Steve is a podcaster, entrepreneur, and real estate sales trainer who helps agents and investors scale their businesses.",
      keyTraits: [
        { trait: "Analytical" },
        { trait: "Process-driven" },
        { trait: "Focused on sales mastery" }
      ]
    },
    {
      id: 4,
      firstName: "Troy",
      lastName: "Kearns",
      image: "/Troy_Kearns.png",
      bio: "A real estate investor and entrepreneur who specializes in buy-and-hold strategies and property management. Troy shares tips on building long-term wealth through smart investments.",
      keyTraits: [
        { trait: "Practical" },
        { trait: "Relatable" },
        { trait: "Focused on sustainable growth" }
      ]
    },
    {
      id: 5,
      firstName: "Brad",
      lastName: "Blazar",
      image: "/Brad_Blazar.png",
      bio: "A capital-raising expert, Brad coaches entrepreneurs and real estate professionals on how to raise money for deals. He's a motivational speaker and author with a strong presence in wealth-building communities.",
      keyTraits: [
        { trait: "Strategic thinker" },
        { trait: "Motivational" },
        { trait: "Focused on leveraging capital" }
      ]
    },
    {
      id: 6,
      firstName: "Aram",
      lastName: "Ghazaryan",
      image: "/Aram_Ghazaryan.png",
      bio: "A real estate expert with a focus on flipping, Aram is known for his in-depth knowledge of market trends and hands-on coaching for real estate investors.",
      keyTraits: [
        { trait: "Knowledgeable" },
        { trait: "Supportive" },
        { trait: "Skilled in creating actionable frameworks" }
      ]
    }
  ];
  
  export default speakersData;