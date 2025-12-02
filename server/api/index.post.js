import { db } from '../database/db.js';

import { movies, genres } from '../database/schema.js';
import { eq } from 'drizzle-orm';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { title, genreName } = body;

  if (!title || !genreName) {
    throw createError({ statusCode: 400, message: 'Titre ou genre manquant' });
  }

  // Chercher l'id du genre
  const genreRecord = await db
    .select()
    .from(genres)
    .where(eq(genres.genre, genreName))
    .limit(1);

  if (genreRecord.length === 0) {
    throw createError({ statusCode: 400, message: `Genre "${genreName}" non trouvé` });
  }

  const genreId = genreRecord[0].id;

  // Insérer le film
  const newMovie = await db
    .insert(movies)
    .values({
      title,
      genreId,
    })
    .returning();

  return newMovie[0];
});
