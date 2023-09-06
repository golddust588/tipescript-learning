const books = [];
export const addBook = () => {
    const titleInput = document.querySelector("input[id='title']");
    const writerInput = document.querySelector("input[id='writer']");
    const countryInput = document.querySelector("input[id='country']");
    const yearInput = document.querySelector("input[id='year']");
    const numberPublishedInput = document.querySelector("input[id='number-published']");
    const book = {
        title: titleInput.value,
        writer: writerInput.value,
        country: countryInput.value,
        year: yearInput.value,
        number_published: Number(numberPublishedInput.value)
    };
    books.push(book);
    showBooks(books);
};
const showBooks = (books) => {
    books.forEach(book => {
        console.log(book);
    });
};
