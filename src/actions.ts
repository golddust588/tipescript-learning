
import { BookInfoInputType } from "./types.js";

const books : object[] = [];

export const addBook = () => {
    const titleInput : HTMLInputElement = document.querySelector("input[id='title']")!;
    const writerInput : HTMLInputElement = document.querySelector("input[id='writer']")!;
    const countryInput : HTMLInputElement = document.querySelector("input[id='country']")!;
    const yearInput : HTMLInputElement = document.querySelector("input[id='year']")!;
    const numberPublishedInput : HTMLInputElement = document.querySelector("input[id='number-published']")!;

    const book: BookInfoInputType = {
        title: titleInput.value,
        writer: writerInput.value,
        country: countryInput.value,
        year: yearInput.value,
        number_published: Number(numberPublishedInput.value)
        };
    
    
    books.push(book);
    showBooks(books);
};

const showBooks = (books : object[]) => {
    books.forEach(book => {
        console.log(book);
    });
};