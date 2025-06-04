//FetchFirestone.ts
import { getDocs, collection } from "firebase/firestore";
import { db } from "./Firebaseconfig"; // Adjust the import path as necessary
import { Character } from "../types/types"; // Adjust the import path as necessary


//Fetch characters from Firestore
export const fetchCharacters = async (): Promise<Character[]> => {
    try {
        const characterCollection = collection (db, "character");
        const characterSnapshot = await getDocs(characterCollection);

        return characterSnapshot.docs.map((doc) => ({
            id: doc.id,
            img: doc.data().img || 'https://i.pinimg.com/736x/91/58/b0/9158b08fbbbbe116801b14677fd4aa35.jpg',
            age: doc.data().age || 18, // Default age to 18 if not provided
            alignment: doc.data().alignment || "Neutral", // Default alignment to Neutral if not provided
            class: doc.data().class || 'Pick a Class', // Default class to null if not provided
            name: doc.data().name || "New Character", // Default name to Unknown if not provided
            player: doc.data().player,
            level: doc.data().level || 1, // Default level to 1 if not provided
            race: doc.data().race || null,
            stats: {
                CHA: doc.data().stats?.CHA || 10, // Default CHA to 0 if not provided
                CON: doc.data().stats?.CON || 10,
                DEX: doc.data().stats?.DEX || 10,
                INT: doc.data().stats?.INT || 10,
                STR: doc.data().stats?.STR || 10,
                WIS: doc.data().stats?.CHA || 10,
            },
        })) as Character[];
    } catch (error) {
        console.error("Error fetching character from database:", error);
        throw error;
    }
};