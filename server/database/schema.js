import { pgTable, serial, varchar, integer, text, timestamp } from "drizzle-orm/pg-core";

export const genres = pgTable("genres", {
  id: serial("id").primaryKey(),
  genre: text("genre").notNull().unique(), 
});

export const movies = pgTable("movies", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  genreId: integer("genre_id").notNull().references(() => genres.id),
  createdAt: timestamp("created_at").defaultNow(),
});
