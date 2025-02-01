import { firebaseApp } from "@/services/firebase";
import { getDatabase, ref, child, get } from "firebase/database";

export const fetchDatabase = async (nodePath: string = "works") => {
  try {
    const database = getDatabase(firebaseApp);
    const rootRef = ref(database);
    const snapshot = await get(child(rootRef, "works"));

    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.warn(`No data available at the "${nodePath}" node.`);
      return null
    }
  } catch (error) {
    console.error("Error fetching data from Firebase Database:", error);
    throw error;
  }
}