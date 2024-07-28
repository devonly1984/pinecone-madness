"use server"

import { auth } from "@clerk/nextjs/server"
import { generateEmbeddingsInVectorStore } from "../utils";
import { revalidatePath } from "next/cache";

export const generateEmbeddings = async (docId: string) => {
  auth().protect();
  await generateEmbeddingsInVectorStore(docId);
  revalidatePath("/dashboard");
  return {completed:true}
};