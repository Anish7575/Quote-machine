var myButton = document.getElementById('btn');

var myQuotes = [
    "Success is most often acheived by those who don't know that failure is inevitable.  - Coco Chanel",
    "Things work out best for those who make the best of how things work out. - John Wooden",
    "Courage is grace under pressure. -- Ernest Hemingway",
    "If you are not willing to risk the usual, you will have to settle for the ordinary.- Jim Rohn",
    "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning. -- Albert Einstein",
    "Take up one idea. Make that one idea your life -- think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body be full of that idea, and just leave every other idea alone. This is the way to success. -- Swami Vivekananda",
    "Sometimes you can't see yourself clearly until you see yourself through the eyes of others. -- Ellen DeGeneres",
    "All our dreams can come true if we have the courage to pursue them. - Walt Disney",
    "It does not matter how slowly you go, so long as you do not stop.  - Confucius",
    "Success is walking from failure to failure with no loss of enthusiasm.  - Winston Churchill",
    "Someone is sitting in the shade today because someone planted a tree a long time ago.  -- Warren Buffett",
    "Whenever you see a successful person, you only see the public glories, never the private sacrifices to reach them.  -- Vaibhav Shah",
    "Don't cry because it's over, smile because it happened.  -- Dr. Seuss",
    "Success? I don't know what that word means. I'm happy. But success, that goes back to what in somebody's eyes success means. For me, success is inner peace. That's a good day for me.  -- Denzel Washington",
    "You only live once, but if you do it right, once is enough.  -- Mae West",
    "Opportunities don't happen. You create them.  -- Chris Grosser",
    "Once you choose hope, anything's possible.  -- Christopher Reeve",
    "Try not to become a person of success, but rather try to become a person of value.  -- Albert Einstein",
    "There is no easy walk to freedom anywhere, and many of us will have to pass through the valley of the shadow of death again and again before we reach the mountaintop of our desires.  -- Nelson Mandela",
    "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.  -- Charles Darwin",
    "The best and most beautiful things in the world cannot be seen or even touched -- they must be felt with the heart.  -- Helen Keller",
    "Great minds discuss ideas; average minds discuss events; small minds discuss people.  -- Eleanor Roosevelt",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.  -- Mahatma Gandhi",
    "The best revenge is massive success.  -- Frank Sinatra",
    "The difference between winning and losing is most often not quitting. - Walt Disney",
    "I have not failed. I've just found 10,000 ways that won't work.  -- Thomas Edison",
    "When you cease to dream you cease to live.  -- Malcolm Forbes",
    "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.  -- David Brinkley",
    "May you live every day of your life.  -- Jonathan Swift",
    "No one can make you feel inferior without your consent.  -- Eleanor Roosevelt",
    "Failure is another steppingstone to greatness.  -- Oprah Winfrey",
    "The whole secret of a successful life is to find out what is one's destiny to do, and then do it. -- Henry Ford",
    "If you're not stubborn, you'll give up on experiments too soon. And if you're not flexible, you'll pound your head against the wall and you won't see a different solution to a problem you're trying to solve.   -- Jeff Bezos",
    "If you're going through hell, keep going.  -- Winston Churchill",
    "In order to be irreplaceable one must always be different.  -- Coco Chanel",
    "What seems to us as bitter trials are often blessings in disguise.  -- Oscar Wilde",
    "You miss 100 percent of the shots you don't take.   -- Wayne Gretzky",
    "The distance between insanity and genius is measured only by success.  - Bruce Feirstein",
    "The way I see it, if you want the rainbow, you gotta put up with the rain.  - Dolly Parton",
    "To me, business isn't about wearing suits or pleasing stockholders. It's about being true to yourself, your ideas and focusing on the essentials.   --Richard Branson",
    "The longer I live, the more beautiful life becomes.   -- Frank Lloyd Wright",
    "Happiness is a butterfly, which when pursued, is always beyond your grasp, but which, if you will sit down quietly, may alight upon you.   -- Nathaniel Hawthorne",
    "You must expect great things of yourself before you can do them.   - Michael Jordan",
    "If you can't explain it simply, you don't understand it well enough.  - Albert Einstein",
    "You can't please everyone, and you can't make everyone like you.   -- Katie Couric",
    "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.  -Ray Goforth",
    "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.  -Neil Armstrong",
    "Start where you are. Use what you have. Do what you can.  -- Arthur Ashe",
    "Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.  -Mary Kay Ash",
    "People ask, 'What's the best role you've ever played?' The next one.  - Kevin Kline"
    
];

myButton.addEventListener('click', function() {
    var quote = document.getElementById('quote');
    var randomnum = Math.floor(Math.random()*myQuotes.length);
    quote.innerHTML = myQuotes[randomnum];
} );