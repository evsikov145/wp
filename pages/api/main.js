import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
    const { db } = await connectToDatabase();
    const mains = await db
        .collection("mains")
        .find({})
        .toArray();
    return res.json(mains);
};