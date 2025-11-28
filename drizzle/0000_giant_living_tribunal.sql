CREATE TABLE "genres" (
	"id" serial PRIMARY KEY NOT NULL,
	"genre" text NOT NULL,
	CONSTRAINT "genres_genre_unique" UNIQUE("genre")
);
--> statement-breakpoint
CREATE TABLE "movies" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256) NOT NULL,
	"genre_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "movies" ADD CONSTRAINT "movies_genre_id_genres_id_fk" FOREIGN KEY ("genre_id") REFERENCES "public"."genres"("id") ON DELETE no action ON UPDATE no action;