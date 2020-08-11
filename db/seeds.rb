# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Book.destroy_all
User.destroy_all

@admin = User.create!(username: "jason", email: "jason@gmail.com", password: "123456" )
puts "#{User.count} users created"

books= [
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/51upeMM8nSL._SX323_BO1,204,203,200_.jpg",
    title: "Learn to Earn",
    author: "Peter Lynch",
    summary: "Mutual-fund superstar Peter Lynch explains the basic principles of the stock market and business in an investing guide that will enlighten and entertain anyone who is high-school age or older",
    page_number: "272 pages",
    genre: "Self-help book",
    price: "$14.87"
  },
  {
    image: "https://m.media-amazon.com/images/I/41Mq7Ss7lPL.jpg",
    title: "Principles: Life and Work",
    author: "Ray Dalio",
    summary: "Mutual-fund superstar Peter Lynch explains the basic principles of the stock market and business in an investing guide that will enlighten and entertain anyone who is high-school age or older",
    page_number: "593 pages",
    genre: "Biography",
    price: "$14.99",
  },
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/4137OkbPQ4L._SX331_BO1,204,203,200_.jpg",
    title: "Zero to One: Notes on Startups, or How to Build the Future",
    author: "Peter Thiel",
    summary: "The great secret of our time is that there are still uncharted frontiers to explore and new inventions to create. In Zero to One, legendary entrepreneur and investor Peter Thiel shows how we can find singular ways to create those new things.",
    page_number: "224 pages",
    genre: "Self-help book",
    price: "$18.59",
  },
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/51WOq1TRGdL._SX326_BO1,204,203,200_.jpg",
    title: "Why We Sleep: Unlocking the Power of Sleep and Dreams",
    author: "Matthew Walker PhD",
    summary: "Why We Sleep: The New Science of Sleep and Dreams is a popular science book about sleep by the neuroscientist and sleep researcher, Matthew Walker. Walker is a professor of neuroscience and psychology and the director of the Center for Human Sleep Science at the University of California, Berkeley.",
    page_number: "368 pages",
    genre: "Science book",
    price: "$10.20",
  },
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/51l5XzLln+L._SX348_BO1,204,203,200_.jpg",
    title: "Cracking the Coding Interview: 189 Programming Questions and Solutions 6th Edition",
    author: "Gayle Laakmann McDowell",
    summary: "Cracking the Coding Interview: 189 Programming Questions and Solutions is a book by Gayle Laakmann McDowell about coding interviews.",
    page_number: "687 pages",
    genre: "Textbook",
    price: "$26.99",
  },
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/41AXVV09CAL._SX336_BO1,204,203,200_.jpg",
    title: "The Essays of Warren Buffett: Lessons for Corporate America, Fifth Edition",
    author: "Warren E. Buffett",
    summary: "Experienced readers of Warren Buffett's letters to the shareholders of Berkshire Hathaway Inc have gained an enormously valuable informal education. This book features letters that distill in plain words all the basic principles of sound business practices.",
    page_number: "350 pages",
    genre: "Biography",
    price: "$29.45",
  },
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/51mRJtJHNeL._SX390_BO1,204,203,200_.jpg",
    title: "The New Encyclopedia of Modern Bodybuilding : The Bible of Bodybuilding",
    author: "Arnold Schwarzenegger",
    summary: "From elite bodybuilding competitors to gymnasts, from golfers to fitness gurus, anyone who works out with weights must own this book—a book that only Arnold Schwarzenegger could write, a book that has earned its reputation as “the bible of bodybuilding.”

    Inside, Arnold covers the very latest advances in both weight training and bodybuilding competition, with new sections on diet and nutrition, sports psychology, the treatment and prevention of injuries, and methods of training, each illustrated with detailed photos of some of bodybuilding's newest stars.",
    page_number: "800 pages",
    genre: "Sports",
    price: "$13.87",
  },
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/51q7BQ4IXzL._SX331_BO1,204,203,200_.jpg",
    title: "The World As I See It",
    author: "Albert Einstein",
    summary: "The Einstein revealed in these writings is witty, keenly perceptive, and deeply concerned for humanity. Einstein believed in the possibility of a peaceful world and in the high mission of science to serve human well-being. As we near the end of a century in which science has come to seem more and more remote from human values, Einstein's perspective is indispensable.",
    page_number: "108 pages",
    genre: "Biography",
    price: "$5.99"
  },
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/51Y3sepYBmL._SX321_BO1,204,203,200_.jpg",
    title: "How to Win at the Sport of Business: If I Can Do It, You Can Do It",
    author: "Mark Cuban",
    summary: "Mark Cuban shares his wealth of experience and business savvy in his first published book, HOW TO WIN AT THE SPORT OF BUSINESS. Cuban has collected and updated his postings on business and life to provide a catalog of insider knowledge on what it takes to become a thriving entrepreneur. He tells his own rags-to-riches story of how he went from selling powdered milk and sleeping on friends' couches to owning his own company and becoming a multi-billion dollar success story. His unconventional yet highly effective ideas on how to build a successful business offer entrepreneurs at any stage of their careers a huge edge over their competitors.",
    page_number: "112 pages",
    genre: "Self-help book",
    price: "$11.69"
  }, 
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/61vY7Ehm7GL._SX403_BO1,204,203,200_.jpg",
    title: "The Path Made Clear: Discovering Your Life's Direction and Purpose",
    author: "Oprah Winfrey",
    summary: "Everyone has a purpose. And, according to Oprah Winfrey, “Your real job in life is to figure out as soon as possible what that is, who you are meant to be, and begin to honor your calling in the best way possible.”",
    page_number: "208 pages",
    genre: "Self-help book",
    price: "$12.48"
  }, 
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/41UFukWuw3L._SX326_BO1,204,203,200_.jpg",
    title: "Capitalism and Freedom",
    author: "Milton Friedman",
    summary: "Capitalism and Freedom is a book by Milton Friedman originally published in 1962 by the University of Chicago Press which discusses the role of economic capitalism in liberal society. It sold over 400,000 copies in the first eighteen years and more than half a million since 1962.",
    page_number: "202 pages",
    genre: "Non-fiction",
    price: "$14.44"
  }, 
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/41UFukWuw3L._SX326_BO1,204,203,200_.jpg",
    title: "Lean In: Women, Work, and the Will to Lead",
    author: "Sheryl Sandberg",
    summary: "In Lean In, Sheryl Sandberg reignited the conversation around women in the workplace. Lean In continues that conversation, combining personal anecdotes, hard data, and compelling research to change the conversation from what women can’t do to what they can. Sandberg provides practical advice on negotiation techniques, mentorship, and building a satisfying career.",
    page_number: "387 pages",
    genre: "Biography",
    price: "$13.49"
  }, 
]

Book.create(books)
puts "#{Book.count} books created"