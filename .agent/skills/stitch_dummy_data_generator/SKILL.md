---
name: stitch_dummy_data_generator
description: Generates a rich set of 25 bookstore dummy data records — including id, title, author, price, rating, category, description, coverImage, publishedYear, and featured flag. Output formats include JavaScript array, JSON, and CSV. Reusable for any ecommerce product type with minor adaptation.
---

# Skill: stitch_dummy_data_generator

Use this skill to generate ready-to-use dummy product data for an ecommerce or bookstore project. The data can be embedded directly in HTML/JS files, used in a mock API, or fed into Stitch component prompts.

---

## Bookstore Dummy Data (25 Books)

### JavaScript Array Format

```js
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 14.99,
    rating: 4.8,
    category: "Fiction",
    description: "A novel set in the Roaring Twenties, exploring themes of wealth, love, and the American Dream.",
    coverImage: "https://covers.openlibrary.org/b/id/8432728-L.jpg",
    publishedYear: 1925,
    featured: true
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 16.00,
    rating: 5.0,
    category: "Self-Help",
    description: "A practical guide to building good habits and breaking bad ones through small, incremental changes.",
    coverImage: "https://covers.openlibrary.org/b/id/10519612-L.jpg",
    publishedYear: 2018,
    featured: true
  },
  {
    id: 3,
    title: "Becoming",
    author: "Michelle Obama",
    price: 18.50,
    rating: 4.9,
    category: "Non-Fiction",
    description: "An intimate memoir by the former First Lady of the United States.",
    coverImage: "https://covers.openlibrary.org/b/id/8928079-L.jpg",
    publishedYear: 2018,
    featured: true
  },
  {
    id: 4,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 12.00,
    rating: 4.7,
    category: "Fantasy",
    description: "A fantasy adventure about a hobbit who joins a quest to reclaim a dwarf kingdom from a dragon.",
    coverImage: "https://covers.openlibrary.org/b/id/8406786-L.jpg",
    publishedYear: 1937,
    featured: false
  },
  {
    id: 5,
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: 22.00,
    rating: 4.9,
    category: "Fiction",
    description: "A lone astronaut must save the Earth from an extinction-level threat while light-years from home.",
    coverImage: "https://covers.openlibrary.org/b/id/10989037-L.jpg",
    publishedYear: 2021,
    featured: true
  },
  {
    id: 6,
    title: "The Night Circus",
    author: "Erin Morgenstern",
    price: 15.99,
    rating: 4.6,
    category: "Fantasy",
    description: "A magical competition between two young magicians set inside a mysterious, fantastical circus.",
    coverImage: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
    publishedYear: 2011,
    featured: false
  },
  {
    id: 7,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 19.99,
    rating: 4.7,
    category: "Non-Fiction",
    description: "A brief history of humankind, tracing the evolution of Homo sapiens from the Stone Age to modern times.",
    coverImage: "https://covers.openlibrary.org/b/id/8258317-L.jpg",
    publishedYear: 2011,
    featured: false
  },
  {
    id: 8,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 9.99,
    rating: 4.8,
    category: "Romance",
    description: "A classic romance novel about Elizabeth Bennet and the proud Mr. Darcy in 19th-century England.",
    coverImage: "https://covers.openlibrary.org/b/id/8479576-L.jpg",
    publishedYear: 1813,
    featured: false
  },
  {
    id: 9,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    price: 13.50,
    rating: 4.9,
    category: "Fantasy",
    description: "A young boy discovers he is a wizard and begins his education at Hogwarts School of Witchcraft and Wizardry.",
    coverImage: "https://covers.openlibrary.org/b/id/10110415-L.jpg",
    publishedYear: 1997,
    featured: true
  },
  {
    id: 10,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 11.99,
    rating: 4.6,
    category: "Fiction",
    description: "A philosophical novel about a young Andalusian shepherd's journey to find his Personal Legend.",
    coverImage: "https://covers.openlibrary.org/b/id/8295396-L.jpg",
    publishedYear: 1988,
    featured: false
  },
  {
    id: 11,
    title: "Dune",
    author: "Frank Herbert",
    price: 17.99,
    rating: 4.8,
    category: "Fiction",
    description: "A sweeping sci-fi epic set on the desert planet Arrakis, home of the universe's most valuable substance.",
    coverImage: "https://covers.openlibrary.org/b/id/9255566-L.jpg",
    publishedYear: 1965,
    featured: true
  },
  {
    id: 12,
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    price: 8.99,
    rating: 4.9,
    category: "Kids",
    description: "A classic children's picture book about a caterpillar munching through a variety of foods.",
    coverImage: "https://covers.openlibrary.org/b/id/388761-L.jpg",
    publishedYear: 1969,
    featured: false
  },
  {
    id: 13,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    price: 21.00,
    rating: 4.7,
    category: "Non-Fiction",
    description: "An exploration of the two systems that drive the way we think — fast, intuitive and slow, deliberate.",
    coverImage: "https://covers.openlibrary.org/b/id/8491830-L.jpg",
    publishedYear: 2011,
    featured: false
  },
  {
    id: 14,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 16.50,
    rating: 4.5,
    category: "Fiction",
    description: "A novel about a library that exists between life and death, holding books of every life you could have lived.",
    coverImage: "https://covers.openlibrary.org/b/id/10909258-L.jpg",
    publishedYear: 2020,
    featured: true
  },
  {
    id: 15,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    price: 15.00,
    rating: 4.7,
    category: "Romance",
    description: "A coming-of-age mystery about a girl raised alone in the marshes of North Carolina.",
    coverImage: "https://covers.openlibrary.org/b/id/9255565-L.jpg",
    publishedYear: 2018,
    featured: false
  },
  {
    id: 16,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    price: 13.99,
    rating: 4.5,
    category: "Self-Help",
    description: "A guide to spiritual enlightenment that teaches the importance of living fully in the present moment.",
    coverImage: "https://covers.openlibrary.org/b/id/6640730-L.jpg",
    publishedYear: 1997,
    featured: false
  },
  {
    id: 17,
    title: "1984",
    author: "George Orwell",
    price: 10.99,
    rating: 4.8,
    category: "Fiction",
    description: "A dystopian social science fiction novel set in a totalitarian society under constant surveillance.",
    coverImage: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    publishedYear: 1949,
    featured: false
  },
  {
    id: 18,
    title: "Charlotte's Web",
    author: "E.B. White",
    price: 8.50,
    rating: 4.8,
    category: "Kids",
    description: "The story of the friendship between a pig named Wilbur and a spider named Charlotte.",
    coverImage: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
    publishedYear: 1952,
    featured: false
  },
  {
    id: 19,
    title: "Educated",
    author: "Tara Westover",
    price: 17.00,
    rating: 4.8,
    category: "Non-Fiction",
    description: "A memoir about a woman who grows up in a survivalist family and goes on to earn a PhD from Cambridge.",
    coverImage: "https://covers.openlibrary.org/b/id/8639164-L.jpg",
    publishedYear: 2018,
    featured: true
  },
  {
    id: 20,
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    price: 18.00,
    rating: 4.7,
    category: "Fantasy",
    description: "The tale of a magically gifted young man who grows to be the most notorious wizard his world has ever seen.",
    coverImage: "https://covers.openlibrary.org/b/id/8236561-L.jpg",
    publishedYear: 2007,
    featured: false
  },
  {
    id: 21,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    price: 14.00,
    rating: 4.4,
    category: "Self-Help",
    description: "A counterintuitive approach to living a good life by focusing on what truly matters.",
    coverImage: "https://covers.openlibrary.org/b/id/8631323-L.jpg",
    publishedYear: 2016,
    featured: false
  },
  {
    id: 22,
    title: "Outlander",
    author: "Diana Gabaldon",
    price: 19.00,
    rating: 4.6,
    category: "Romance",
    description: "A time-travel romance where a WWII nurse is transported to 18th-century Scotland.",
    coverImage: "https://covers.openlibrary.org/b/id/9253498-L.jpg",
    publishedYear: 1991,
    featured: false
  },
  {
    id: 23,
    title: "The Lightning Thief",
    author: "Rick Riordan",
    price: 11.00,
    rating: 4.7,
    category: "Kids",
    description: "A young boy discovers he is the son of a Greek god and must prevent a war among the Olympians.",
    coverImage: "https://covers.openlibrary.org/b/id/8228445-L.jpg",
    publishedYear: 2005,
    featured: true
  },
  {
    id: 24,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    price: 12.99,
    rating: 4.5,
    category: "Non-Fiction",
    description: "Lessons about money and investing, contrasting the mindsets of the author's two father figures.",
    coverImage: "https://covers.openlibrary.org/b/id/8095927-L.jpg",
    publishedYear: 1997,
    featured: false
  },
  {
    id: 25,
    title: "A Court of Thorns and Roses",
    author: "Sarah J. Maas",
    price: 16.99,
    rating: 4.6,
    category: "Fantasy",
    description: "A young huntress is taken to the faerie lands where she discovers a powerful romance and dark magic.",
    coverImage: "https://covers.openlibrary.org/b/id/10795021-L.jpg",
    publishedYear: 2015,
    featured: false
  }
];
```

---

## JSON Format

To export as JSON, wrap the array:
```json
{ "books": [ ...same objects as above... ] }
```

---

## CSV Format (Header Row)

```
id,title,author,price,rating,category,publishedYear,featured
1,The Great Gatsby,F. Scott Fitzgerald,14.99,4.8,Fiction,1925,true
2,Atomic Habits,James Clear,16.00,5.0,Self-Help,2018,true
...
```

---

## Helper Filters

```js
// Get featured books only
const featuredBooks = books.filter(b => b.featured);

// Get by category
const fantasy = books.filter(b => b.category === "Fantasy");

// Sort by rating descending
const topRated = [...books].sort((a, b) => b.rating - a.rating);

// Sort by price ascending
const cheapest = [...books].sort((a, b) => a.price - b.price);

// Search by title or author
const search = (query) => books.filter(b =>
  b.title.toLowerCase().includes(query.toLowerCase()) ||
  b.author.toLowerCase().includes(query.toLowerCase())
);
```

---

## Categories Summary

| Category | Count |
|---|---|
| Fiction | 6 |
| Fantasy | 6 |
| Non-Fiction | 5 |
| Self-Help | 3 |
| Romance | 3 |
| Kids | 3 |

---

## How to Use (Example Prompts)

```
Give me 25 bookstore dummy records using the stitch_dummy_data_generator skill.
```

```
Generate dummy product data in JSON format for my ecommerce Stitch project using stitch_dummy_data_generator.
```

```
Adapt the stitch_dummy_data_generator skill for a clothing store — change the fields as needed.
```

---

## Notes
- Replace `coverImage` URLs with your own CDN or use placeholder services like `https://picsum.photos`.
- To adapt for other ecommerce types (clothing, electronics, etc.) rename fields: `title→name`, `author→brand`, `category→type`, etc.
