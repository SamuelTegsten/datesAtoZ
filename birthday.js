document.addEventListener("DOMContentLoaded", function () {
    const displayText = document.getElementById("displayText");
    const submitButton = document.getElementById("submitButton");
    const activitiesList = document.getElementById("activitiesList");
    const resetButton = document.getElementById("resetButton");

    // Function to display saved activities
    function displaySavedActivities() {
        const savedActivities = JSON.parse(localStorage.getItem("savedActivities")) || [];
        activitiesList.innerHTML = savedActivities.map((activity) => `<li>${activity}</li>`).join("");
    }

    // Display saved activities when the page loads
    displaySavedActivities();

    // List of birthday activities
    const birthdayActivities = [
        "Art gallery visit",
        "Arcade games",
        "Astronomy stargazing",
        "Amusement park",
        "Antique shopping",
        "Axe throwing",
        "Attend a Christmas market for some holiday cheer.",
        "Alphabet game (find things that start with 'A')",
        "Airplane ride",
        "Attend a concert",
        "Attend a comedy show",
        "Apple picking",
        "Attend a traditional Swedish folk music performance.",
        "Athletic event (e.g., basketball game)",
        "Attend a dance class",
        "Afternoon tea",
        "Animal sanctuary visit",
        "Archery",
        "Abseiling (rappelling)",
        "Attend an art class",
        "Aromatherapy spa day",
        "Al fresco dining",
        "Beach day",
        "Bike ride",
        "Brewery tour",
        "Botanical garden visit",
        "Board game night",
        "Barbecue picnic",
        "Bowling",
        "Bookstore browsing",
        "Bird watching",
        "Ballet performance",
        "Bonfire on the beach",
        "Boating on a lake",
        "Bungee jumping",
        "Ballroom dancing",
        "Bikepacking adventure",
        "Bar hopping",
        "Berry picking",
        "Black and white movie night",
        "Breakfast in bed (at home)",
        "Build a fort and watch movies",
        "Cooking class",
        "Camping trip",
        "Comedy club night",
        "Concert in the park",
        "Coffee shop date",
        "Cultural museum visit",
        "City sightseeing tour",
        "Carriage ride",
        "Candlelit dinner",
        "Crafting or DIY project",
        "Conquer an escape room",
        "Canoeing on a river",
        "Cheese and wine tasting",
        "Cross-country skiing in the beautiful Swedish wilderness.",
        "Couples massage",
        "Charity or volunteer work",
        "Cider tasting",
        "Chocolate fondue night",
        "Cinema under the stars",
        "Cozy cabin getaway",
        "Climbing at an indoor gym",
        "Dinner at a fancy restaurant",
        "Dancing under the stars",
        "Drive-in movie theater",
        "Dessert tasting",
        "Double date with friends",
        "Day trip to a nearby town",
        "DIY art project",
        "Discover a new hobby together",
        "Dog park visit with a furry friend",
        "Dolphin watching cruise",
        "Darts or billiards at a pub",
        "Dune buggying adventure",
        "Dream about the future together",
        "Drive along a scenic route",
        "Decorate your own pottery",
        "Document your day with photos",
        "Delicious donut breakfast",
        "Digital scavenger hunt",
        "Drive to a drive-through zoo",
        "Escape room adventure",
        "Eco-friendly picnic",
        "Explore a new city",
        "Enjoy a live concert",
        "Evening stroll in the park",
        "Ethnic food restaurant hopping",
        "Equestrian horseback riding",
        "Explore historical castles and fortresses.",
        "Eggplant Parmesan cooking",
        "Enjoy a cozy fika (coffee and cake) at a local café.",
        "Experimental cooking night",
        "Explore local art exhibitions",
        "Educational museum visit",
        "Enjoy an outdoor movie",
        "Experience the Northern Lights in the Arctic regions.",
        "Elegant wine and cheese",
        "Embark on a road trip",
        "Engage in watercolor painting",
        "Entertain with a magic show",
        "Exercise together (e.g., yoga)",
        "Excursion to an orchard",
        "Embrace an adrenaline rush",
        "Enjoy an improv comedy show",
        "Food truck festival",
        "Ferris wheel ride",
        "Fly a kite in the park",
        "Farmers' market exploration",
        "Film screening at home",
        "Frisbee in the park",
        "Fancy dress-up dinner",
        "Fruit picking adventure",
        "Fishing by the lakeside",
        "Fireworks display",
        "Floating in a hot air balloon",
        "Folk music festival",
        "Fashion show attendance",
        "Fencing or martial arts class",
        "Forest hike and picnic",
        "Fountain-side ice cream",
        "Flower arranging workshop",
        "Ferry ride to an island",
        "Festive holiday lights tour",
        "Freefall indoor skydiving",
        "Go-kart racing",
        "Gardening together",
        "Gallery or art museum visit",
        "Go on a wildlife safari to spot reindeer or moose.",
        "Go ice climbing in northern Sweden.",
        "Gourmet cooking at home",
        "Game night with board games",
        "Gazing at the stars",
        "Go dog sledding in Lapland.",
        "Ghost tour in a historic area",
        "Geocaching adventure",
        "Golfing at a mini-golf course",
        "Guided city tour",
        "Gingerbread house decorating",
        "Glide on a gondola ride",
        "Greek restaurant dinner",
        "Glassblowing class",
        "Greenhouse botanical visit",
        "Gift shopping for each other",
        "Gelato tasting",
        "Gym workout together",
        "Global cuisine exploration",
        "Grilling and barbecue",
        "Hiking in the mountains",
        "Hot air balloon ride",
        "Horse-drawn carriage ride",
        "Historical site exploration",
        "Home movie marathon",
        "Harbor cruise",
        "Hammock lounging",
        "Horseback riding on the beach",
        "Hawaiian luau dinner",
        "Hula dancing lessons",
        "Hobby or craft fair visit",
        "High tea at a fancy tea room",
        "Helicopter tour",
        "Ice hockey game",
        "Indoor ice skating",
        "In-home spa day",
        "Indulge in a hotel staycation",
        "International food cooking",
        "Invent your own board game",
        "Karaoke duet night",
        "Ice cream parlor visit",
        "Improv comedy show",
        "International cuisine night",
        "Ice skating on a frozen lake or outdoor rink.",
        "Indoor rock climbing",
        "Ice fishing on a frozen lake.",
        "Inspirational book club",
        "Insectarium or zoo visit",
        "Ice sculpting workshop.",
        "Interactive science museum",
        "In-house wine tasting",
        "Italian cooking night",
        "Island beach vacation",
        "Indie film festival",
        "Instrument playing together",
        "Intramural sports league",
        "Indulge in fine chocolates",
        "Ice skating at an indoor rink",
        "Icy snow cone treat",
        "In-home spa and massage",
        "Invent a DIY project",
        "Irish pub trivia night",
        "Internet scavenger hunt",
        "Jazz club night",
        "Japanese restaurant dinner",
        "Jigsaw puzzle challenge",
        "Jet skiing adventure",
        "Jungle safari expedition",
        "Jazzercise or dance class",
        "Join a sports league",
        "Jam-making together",
        "Jewelry making workshop",
        "Juggling lessons",
        "Junior chef cooking class",
        "Jousting at a Renaissance fair",
        "Join a local running group",
        "Jump on a trampoline park",
        "Jazzercise or dance class",
        "Join a local hiking group",
        "Journaling or writing together",
        "Jazz in the park concert",
        "Jenga tournament",
        "Japanese tea ceremony",
        "Kayaking on a river",
        "Kite flying at the beach",
        "Karaoke night at a bar",
        "Korean BBQ restaurant",
        "Kart racing at a track",
        "Korean cooking class",
        "Karate or martial arts class",
        "Koi pond visit",
        "Koi fish feeding",
        "Kombucha brewery tour",
        "Kite-making and flying",
        "Kaleidoscope art gallery",
        "Knitting or crochet class",
        "Kissing under the stars",
        "Kettle corn at a fair",
        "Karaoke duet competition",
        "Karate sparring practice",
        "Kickboxing class",
        "Kumquat picking",
        "Karaoke at home",
        "Laser tag adventure",
        "Lakeside picnic",
        "Live theater performance",
        "Lighthouse visit",
        "Learn a new language together",
        "Lively salsa dancing",
        "Lawn games in the park",
        "Library book hunt",
        "Local brewery tasting",
        "Longboard or skateboard ride",
        "Lobster or seafood feast",
        "Labyrinth maze exploration",
        "Lighthouse painting",
        "Leisurely bike ride",
        "Local farm market visit",
        "Learn to juggle",
        "Luxury spa day",
        "Letter writing to each other",
        "Lunchtime cruise",
        "Leaf pressing and art",
        "Museum visit",
        "Mountain hiking",
        "Movie night at home",
        "Meditation session",
        "Mini-golfing",
        "Music concert",
        "Mystery dinner theater",
        "Midnight stargazing",
        "Marketplace exploration",
        "Motorcycle ride",
        "Mexican food fiesta",
        "Murder mystery game night",
        "Marathon or fun run",
        "Martial arts class",
        "Mural art tour",
        "Massage spa day",
        "Mangrove kayaking",
        "Milkshake tasting",
        "Make homemade pizza",
        "Northern Lights in the Arctic regions.",
        "Memory lane stroll",
        "Nature hike",
        "Nautical boat tour",
        "Night at the opera",
        "National park visit",
        "Novel reading together",
        "Neon glow mini golf",
        "Netflix movie night",
        "Nordic skiing",
        "Nature photography",
        "Night market exploration",
        "Nerf gun battle",
        "Noodle-making class",
        "Nautical fishing trip",
        "Nest-building workshop",
        "Nature scavenger hunt",
        "New recipe cooking",
        "Nurturing houseplants",
        "Neighborhood walk",
        "Newspaper scavenger hunt",
        "Nature-inspired art",
        "Outdoor movie screening",
        "Observatory visit",
        "Opera performance",
        "Oceanfront walk",
        "Outdoor painting session",
        "Obstacle course adventure",
        "Olive oil tasting",
        "Open-air concert",
        "Origami paper folding",
        "Overnight camping trip",
        "Outdoor yoga session",
        "Outrigger canoeing",
        "Outdoor ice skating",
        "Orchard fruit picking",
        "Outdoor rollerblading",
        "Outdoor picnic",
        "Opera in the park",
        "Off-road ATV adventure",
        "Open mic night at a cafe",
        "Outdoor meditation",
        "Picnic in the park",
        "Pottery painting",
        "Paddleboarding",
        "Pizza-making night",
        "Planetarium visit",
        "Professional photography",
        "Paintball adventure",
        "Private wine tasting",
        "Participate in a winter bonfire event.",
        "Pumpkin patch visit",
        "Pancake breakfast",
        "Puppet show theater",
        "Parkour training",
        "Poetry reading night",
        "Play board games",
        "Piano duet playing",
        "Plant a garden together",
        "Paddleboat ride",
        "Public art scavenger hunt",
        "Produce a podcast",
        "Progressive dinner",
        "Quiet beach day",
        "Quiz night at a pub",
        "Quick getaway trip",
        "Quaint coffee shop",
        "Quilting or sewing project",
        "Quiet night in with books",
        "Quokka spotting tour",
        "Quick road trip",
        "Quality time at a spa",
        "Quad biking adventure",
        "Quiche making together",
        "Question and answer session",
        "Quilling paper art",
        "Quest for local treasures",
        "Quintessential movie night",
        "Quote each other's poetry",
        "Quirky date idea night",
        "Quick indoor workout",
        "Quiet park bench chat",
        "Quality chocolate tasting",
        "Romantic dinner at a restaurant",
        "Rooftop bar cocktails",
        "Rock climbing adventure",
        "Road trip to a new city",
        "Rainy day indoor games",
        "Rent a rowboat",
        "Retro arcade gaming",
        "Recreate your first date",
        "Ride bicycles in the park",
        "Rainforest canopy tour",
        "Raclette cheese dinner",
        "Ride a rollercoaster",
        "Rooftop stargazing",
        "Relaxing spa day",
        "Riverfront picnic",
        "Read a book together",
        "Renovate a room",
        "Roller skating rink",
        "Romantic sunset cruise",
        "Record your own music",
        "Sunset beach walk",
        "Scenic mountain drive",
        "Starlit rooftop dinner",
        "Salsa dancing lessons",
        "Sculpture garden visit",
        "Sushi-making class",
        "Stroll in the countryside",
        "Spa and wellness day",
        "Seaside horseback riding",
        "Singing karaoke duets",
        "Snowshoeing adventure",
        "Street food market tour",
        "Science museum visit",
        "Swing dance lessons",
        "Skateboard park fun",
        "Surprise romantic date",
        "Savor wine and cheese",
        "Sledding in the snow",
        "Star-gazing and telescope",
        "Sailing on a lake or sea",
        "Theater or play night",
        "Take a cooking class",
        "Take a winter hike in a national park.",
        "Theme park adventure",
        "Try a new restaurant",
        "Traditional Swedish sauna and spa day.",
        "Tour a historic site",
        "Tango dancing lessons",
        "Try ice fishing on a frozen lake.",
        "Take a scenic hike",
        "Tandem bike ride",
        "Tea tasting experience",
        "Trampoline park fun",
        "Theater in the park",
        "Test your wits at trivia",
        "Take a road trip",
        "Take a scenic train ride through the countryside.",
        "Try a painting class",
        "Tour a botanical garden",
        "Take a pottery class",
        "Tour a local brewery",
        "Try a dance class",
        "Trekking in the wilderness",
        "Take a scenic drive",
        "Underwater snorkeling",
        "Uncover hidden gems",
        "Upcycle or craft night",
        "Unplugged board games",
        "U-pick fruit farm visit",
        "Ultimate frisbee game",
        "Unleash your inner artist",
        "Unique local food tour",
        "Umbrella sharing in the rain",
        "Ukulele jam session",
        "Unwind at a spa resort",
        "Unicycle riding adventure",
        "Urban exploration",
        "Underground cave tour",
        "Up the mountains hike",
        "Urban kayaking adventure",
        "Umbrella painting",
        "Unusual date idea night",
        "Unplug and relax by a lake",
        "Under the stars camping",
        "Visit a vineyard",
        "Volunteer together",
        "View an art exhibition",
        "Visit a botanical garden",
        "View the sunrise or sunset",
        "Vintage store shopping",
        "Volleyball at the beach",
        "Venture to a new city",
        "Virtual reality gaming",
        "Visit an aquarium",
        "Viking ship museum",
        "View the city from above",
        "Video game tournament",
        "Voyage on a boat",
        "Visit a local winery",
        "View fireworks together",
        "Visit a wildlife sanctuary",
        "Visit a local village",
        "Venture to a bookshop",
        "Video chat date night",
        "Wine tasting tour",
        "Watch a live performance",
        "Walk in the woods",
        "Watercolor painting",
        "Wander through a museum",
        "Watch the sunset together",
        "Whale watching cruise",
        "Write love letters to each other",
        "Weekend getaway trip",
        "Waltz or ballroom dance",
        "Waterfall hike",
        "Wine and cheese pairing",
        "Worship music night",
        "Watch a documentary",
        "Workout at the gym",
        "Waffle breakfast at home",
        "Wildlife photography",
        "Walk along the beach",
        "Winery visit",
        "Write a story together",
        "Xylophone duet",
        "X-country skiing",
        "X-Men movie marathon",
        "X-ray zoo exhibit",
        "Xtraordinary adventure",
        "Xplore a new city",
        "Xtreme sports day",
        "Xperience the unknown",
        "Xero-cost date (budget-friendly)",
        "Xylography (woodblock printing)",
        "Xciting outdoor challenge",
        "Xperiment with new recipes",
        "Xenophily (interest in foreign cultures)",
        "Xtend your horizons",
        "X-files marathon",
        "X-treme obstacle course",
        "X-ray art painting",
        "Xylitol dessert tasting",
        "Xerophyte plant garden visit",
        "X-citing game night",
        "Yoga class together",
        "Yacht or boat trip",
        "Yummy dessert tasting",
        "Yearbook photo session",
        "Yurt camping adventure",
        "Yellowstone Park visit",
        "Yacht party cruise",
        "Yodeling duet",
        "Youthful amusement park visit",
        "Yummy chocolate fondue",
        "Yarn crafting night",
        "Yacht picnic on the water",
        "Yummy gelato tasting",
        "Yonder mountain hike",
        "Yard sale treasure hunt",
        "Year-round holiday lights tour",
        "Yakitori grill dinner",
        "Yoga under the stars",
        "Yurt cozy staycation",
        "Yummy chocolate fondue.",
        "Yummy fruit smoothies",
        "Zoo visit",
        "Zen garden meditation",
        "Zip-lining adventure",
        "Zumba dance fitness",
        "Zipline canopy tour",
        "Zen and mindfulness retreat",
        "Zero-gravity experience",
        "Zodiac sign reading",
        "Zydeco music dancing",
        "Zephyr sailboat ride",
        "Zero-gravity experience.",
        "Zestful cooking class",
        "Ziplining through the forest",
        "Zen spa relaxation",
        "Ziplining through the forest.",
        "Zeppelin airship ride",
        "Zookeeper for a day",
        "Zither music night",
        "Zoo animal photography",
        "Zumba dance-off",
        "Zen-inspired painting",
        "Zigzag hiking adventure",
    ];
    

    const summerActivities = [];
    const winterActivities = [];

    const summerKeywords = ["beach", "swimming", "sun", "biking", "picnic"];
    const winterKeywords = ["snow", "skiing", "skating", "holiday", "fireplace", "Christmas", "Ice"];

    // Categorize activities based on keywords
    birthdayActivities.forEach((activity) => {
        const lowerActivity = activity.toLowerCase();
        if (summerKeywords.some((keyword) => lowerActivity.includes(keyword))) {
            summerActivities.push(activity);
        } else if (winterKeywords.some((keyword) => lowerActivity.includes(keyword))) {
            winterActivities.push(activity);
        }
    });

    function getCurrentCharacter() {
        return localStorage.getItem("currentCharacter") || 'A';
    }

    function updateCurrentCharacter(character) {
        localStorage.setItem("currentCharacter", character);
    }

    function displayRandomActivity() {
        const currentCharacter = getCurrentCharacter();
        let matchingActivities = birthdayActivities.filter(activity => activity.startsWith(currentCharacter));

        shuffleArray(matchingActivities);

        if (matchingActivities.length > 0) {
            const selectedActivity = matchingActivities.pop();
            displayText.textContent = selectedActivity;
        } else {
            displayText.textContent = "No more activities found for this character.";
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function saveActivity(activity) {
        let savedActivities = JSON.parse(localStorage.getItem("savedActivities")) || [];
        savedActivities.push(activity);
        localStorage.setItem("savedActivities", JSON.stringify(savedActivities));
        displaySavedActivities();
    }

    resetButton.addEventListener("click", function () {
        localStorage.removeItem("savedActivities");
        localStorage.setItem("currentCharacter", 'A');
        activitiesList.innerHTML = "";
        displayRandomActivity();
    });

    displayRandomActivity();

    submitButton.addEventListener("click", function () {
        displayRandomActivity();
        saveActivity(displayText.textContent);

        const currentCharacter = getCurrentCharacter();
        const nextCharacter = String.fromCharCode(currentCharacter.charCodeAt(0) + 1);
        if (nextCharacter > 'Z') {
            updateCurrentCharacter('A');
        } else {
            updateCurrentCharacter(nextCharacter);
        }
    });
});