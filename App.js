import "./styles.css";
import React, { useState } from "react";

var educationArr = ["Shoe Dog", "The Psychology of Money"];
var fictionArr = ["1984", "The Shiva Trilogy", "Animal Farm"];
var nonFictionArr = ["Deep Work", "Thinking Fast and Slow"];

var bookDetails = {
  "Shoe Dog": [
    "4/5",
    "I want to put it here- Shoe Dog is one of the best business books I have ever read.",
    "https://www.bcombinator.com/blog_images/10-lessons-we-learnt-from-shoe-dog-the-autobiography-of-nike-s-founder-600x400.png"
  ],
  "The Psychology of Money": [
    "3.5/5",
    "The Psychology of Money teaches you how to have a better relationship with money and to make smarter financial decisions.",
    "https://rupiko.in/wp-content/uploads/2020/11/Books-The-Psychology-of-Money.png"
  ],
  "1984": [
    "4.5/5",
    "A dystopic book written in 1915, about the future- 1984. The ironies in the book can be seen in today's world more than ever.",
    "https://www.bookgeeks.in/wp-content/uploads/2021/07/1984-by-George-Orwell-1-1200x900.jpg"
  ],
  "The Shiva Trilogy": [
    "5/5",
    "THE book series to read if you are fascinated by Mythology.",
    "https://www.thehindu.com/entertainment/movies/6wk56f/article65206991.ece/alternates/FREE_1200/shiva.jpg"
  ],
  "Animal Farm": [
    "5/5",
    "Written with pigs as characters but with the motivations of humans in mind.",
    "https://paperlanternslit.com/wp-content/uploads/2021/03/AnimalFarm-1.jpg"
  ],
  "Deep Work": [
    "4.5/5",
    "Carl Newport has advised to embrace boredom to find that spark of inspiration.",
    "https://impartiallyderivative.com/wp-content/uploads/2018/10/DeepWork-6.jpg"
  ],
  "Thinking Fast and Slow": [
    "4/5",
    "There will be a major shift in your thought process after this book",
    "https://i0.wp.com/icanonlyblamemyshelf.com/wp-content/uploads/2020/01/Thinking-fast-and-slow-1.jpg?fit=2500%2C2500&ssl=1"
  ]
};

export default function App() {
  var [recomBooks, setRecomBooks] = useState(educationArr);

  function clickHandler(recomBooks) {
    //Loading the Genre into the recommended book
    setRecomBooks(recomBooks);
  }

  return (
    <div className="App">
      <h1>GoodBooks</h1>
      <p>A sneak peak of some of my personal favourite books</p>
      <button onClick={() => clickHandler(educationArr)}>Education</button>
      <button onClick={() => clickHandler(fictionArr)}>Fiction</button>
      <button onClick={() => clickHandler(nonFictionArr)}>Non-Fiction</button>

      <ul>
        {
          //Iterating books of whatever Genre was selcted
          recomBooks.map((i) => {
            return (
              <li>
                <div>
                  <strong>
                    {
                      //Displaying the book one by one under selected genre button
                      i
                    }
                  </strong>
                </div>
                <img src={bookDetails[i][2]} />
                <p id="rating">
                  {
                    //For rating
                    bookDetails[i][0]
                  }
                </p>
                <p>
                  {
                    //For Review
                    bookDetails[i][1]
                  }
                </p>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}
