require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');



mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.log(err));

app.use(express.json());
app.use(cors()); 

const bookSchema = new mongoose.Schema({
	title: String,
	author: String,
	genre: String,
	description: String,
	price: Number,
	image: String,
});

const Book = mongoose.model('Book', bookSchema);


const seedDatabase = async () => {
	try {
		await Book.deleteMany(); 
        const books = [
            {
              title: 'The Great Gatsby',
              author: 'F. Scott Fitzgerald',
              genre: 'Fiction',
              description: 'A classic novel about the American Dream',
              price: 20,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011815/sutterlin-1362879_640-(1).jpg'
            },
            {
              title: 'To Kill a Mockingbird',
              author: 'Harper Lee',
              genre: 'Fiction',
              description: 'A powerful story of racial injustice and moral growth',
              price: 15,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011854/reading-925589_640.jpg'
            },
            {
              title: '1984',
              author: 'George Orwell',
              genre: 'Dystopian',
              description: 'A dystopian vision of a totalitarian future society',
              price: 25,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'Pride and Prejudice',
              author: 'Jane Austen',
              genre: 'Romance',
              description: 'A classic romance novel about love and societal expectations',
              price: 18,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Catcher in the Rye',
              author: 'J.D. Salinger',
              genre: 'Fiction',
              description: 'A coming-of-age story about teenage angst and rebellion',
              price: 22,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Lord of the Rings',
              author: 'J.R.R. Tolkien',
              genre: 'Fantasy',
              description: 'A high fantasy novel about friendship and the battle between good and evil',
              price: 30,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Hunger Games',
              author: 'Suzanne Collins',
              genre: 'Dystopian',
              description: 'A dystopian trilogy about survival and rebellion in a deadly game',
              price: 28,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'Harry Potter and the Philosopher\'s Stone',
              author: 'J.K. Rowling',
              genre: 'Fantasy',
              description: 'A magical adventure about friendship and the battle against darkness',
              price: 25,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Picture of Dorian Gray',
              author: 'Oscar Wilde',
              genre: 'Fiction',
              description: 'A philosophical novel about vanity and the pursuit of eternal youth',
              price: 20,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'War and Peace',
              author: 'Leo Tolstoy',
              genre: 'Historical Fiction',
              description: 'A sweeping historical novel about love, family, and war',
              price: 35,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Adventures of Sherlock Holmes',
              author: 'Sir Arthur Conan Doyle',
              genre: 'Mystery',
              description: 'A collection of detective stories featuring the iconic Sherlock Holmes',
              price: 22,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Count of Monte Cristo',
              author: 'Alexandre Dumas',
              genre: 'Adventure',
              description: 'A classic tale of betrayal, revenge, and redemption',
              price: 28,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'Jane Eyre',
              author: 'Charlotte Brontë',
              genre: 'Romance',
              description: 'A gothic romance novel about love and independence',
              price: 18,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'Wuthering Heights',
              author: 'Emily Brontë',
              genre: 'Romance',
              description: 'A classic romance novel about love and tragedy',
              price: 20,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'Moby-Dick',
              author: 'Herman Melville',
              genre: 'Adventure',
              description: 'An epic adventure about obsession and the sea',
              price: 30,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Scarlet Letter',
              author: 'Nathaniel Hawthorne',
              genre: 'Historical Fiction',
              description: 'A classic novel about sin, guilt, and redemption in a Puritan community',
              price: 25,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Adventures of Huckleberry Finn',
              author: 'Mark Twain',
              genre: 'Adventure',
              description: 'A classic American novel about friendship and moral growth',
              price: 22,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Turn of the Screw',
              author: 'Henry James',
              genre: 'Horror',
              description: 'A gothic ghost story about isolation and madness',
              price: 18,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Woman in White',
              author: 'Wilkie Collins',
              genre: 'Mystery',
              description: 'A classic detective novel about love, betrayal, and mystery',
              price: 28,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Moonstone',
              author: 'Wilkie Collins',
              genre: 'Mystery',
              description: 'A pioneering detective novel about theft and deception',
              price: 25,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Tenant of Wildfell Hall',
              author: 'Anne Bronte',
              genre: 'Romance',
              description: 'A lesser-known novel by the sister of Charlotte Bronte, exploring themes of love and social status',
              price: 20,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Mysteries of Udolpho',
              author: 'Ann Radcliffe',
              genre: 'Romance',
              description: 'A foundational Gothic novel about love, mystery, and adventure',
              price: 22,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Monk',
              author: 'Matthew Lewis',
              genre: 'Horror',
              description: 'A classic Gothic horror novel about corruption and the supernatural',
              price: 18,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'Frankenstein',
              author: 'Mary Shelley',
              genre: 'Science Fiction',
              description: 'A pioneering science fiction novel about creation and responsibility',
              price: 25,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'Dracula',
              author: 'Bram Stoker',
              genre: 'Horror',
              description: 'The iconic vampire novel that has captivated readers for centuries',
              price: 28,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Time Machine',
              author: 'H.G. Wells',
              genre: 'Science Fiction',
              description: 'A classic science fiction novel about time travel and social commentary',
              price: 22,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The War of the Worlds',
              author: 'H.G. Wells',
              genre: 'Science Fiction',
              description: 'A pioneering science fiction novel about invasion and survival',
              price: 25,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Invisible Man',
              author: 'H.G. Wells',
              genre: 'Science Fiction',
              description: 'A classic science fiction novel about power and responsibility',
              price: 20,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Island of Dr. Moreau',
              author: 'H.G. Wells',
              genre: 'Science Fiction',
              description: 'A thought-provoking novel about ethics and the dangers of unchecked science',
              price: 22,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Turn of the Screw and Other Ghost Stories',
              author: 'Henry James',
              genre: 'Horror',
              description: 'A collection of ghost stories exploring themes of isolation and madness',
              price: 25,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Haunting of Hill House',
              author: 'Shirley Jackson',
              genre: 'Horror',
              description: 'A classic horror novel about a haunted house and psychological terror',
              price: 28,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Shining',
              author: 'Stephen King',
              genre: 'Horror',
              description: 'A classic horror novel about isolation and the supernatural',
              price: 30,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'It',
              author: 'Stephen King',
              genre: 'Horror',
              description: 'A classic horror novel about childhood fears and the power of friendship',
              price: 35,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Stand',
              author: 'Stephen King',
              genre: 'Science Fiction',
              description: 'A post-apocalyptic novel about survival and good vs. evil',
              price: 40,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'Misery',
              author: 'Stephen King',
              genre: 'Thriller',
              description: 'A psychological thriller about obsession and captivity',
              price: 25,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Silence of the Lambs',
              author: 'Thomas Harris',
              genre: 'Thriller',
              description: 'A classic thriller about FBI trainee Clarice Starling and the brilliant Hannibal Lecter',
              price: 28,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'Gone Girl',
              author: 'Gillian Flynn',
              genre: 'Thriller',
              description: 'A psychological thriller about marriage, deceit, and the unreliability of appearances',
              price: 22,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'Sharp Objects',
              author: 'Gillian Flynn',
              genre: 'Thriller',
              description: 'A dark mystery novel about trauma, family secrets, and the complexities of human relationships',
              price: 20,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'Dark Places',
              author: 'Gillian Flynn',
              genre: 'Thriller',
              description: 'A haunting novel about family tragedy, trauma, and the search for truth',
              price: 25,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Girl on the Train',
              author: 'Paula Hawkins',
              genre: 'Thriller',
              description: 'A psychological thriller about obsession, deception, and the complexities of human relationships',
              price: 22,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Girl with the Dragon Tattoo',
              author: 'Stieg Larsson',
              genre: 'Thriller',
              description: 'A gripping mystery novel about corruption, power, and the dark side of human nature',
              price: 28,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Da Vinci Code',
              author: 'Dan Brown',
              genre: 'Thriller',
              description: 'A fast-paced thriller about conspiracy, art, and history',
              price: 25,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'Angels & Demons',
              author: 'Dan Brown',
              genre: 'Thriller',
              description: 'A thrilling adventure about science, religion, and conspiracy',
              price: 28,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Lost Symbol',
              author: 'Dan Brown',
              genre: 'Thriller',
              description: 'A mystery novel about secret societies, symbols, and ancient mysteries',
              price: 30,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'Inferno',
              author: 'Dan Brown',
              genre: 'Thriller',
              description: 'A thrilling adventure about art, history, and a deadly virus',
              price: 32,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'Origin',
              author: 'Dan Brown',
              genre: 'Thriller',
              description: 'A thought-provoking novel about science, technology, and the future of humanity',
              price: 35,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'Wild',
              author: 'Cheryl Strayed',
              genre: 'Memoir',
              description: 'A memoir about self-discovery and healing through nature',
              price: 20,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
            {
              title: 'The Nightingale',
              author: 'Kristin Hannah',
              genre: 'Historical Fiction',
              description: 'A powerful novel about love, loss, and survival during WWII',
              price: 25,
              image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240110011929/glasses-1052010_640.jpg'
            },
        ]
		
		await Book.insertMany(books);
		console.log('Database seeded successfully');
	} catch (error) {
		console.error('Error seeding database:', error);
	}
};

seedDatabase();

app.get('/api/books', async (req, res) => {
	try {
		const allBooks = await Book.find();
		res.json(allBooks);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
