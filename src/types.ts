
type BookType = {
    title: string;
    writer: string;
    country: string;
    year: string;
    number_published: number;
    id: string
};

export type BookInfoInputType = Omit<BookType, "id">;

type BookUpdateType = Pick <BookType, "title" | "writer">;

type BookIdType = BookType["id"];

type BookInfoType = Partial<BookType>;
