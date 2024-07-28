import { Pinecone } from '@pinecone-database/pinecone';

if(!process.env.PINECONE_API_KEY) {
    throw new Error("API_KEY required for pinecone");
}
const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY
});
export default pc;