import { PrismaClient } from "@prisma/client";

export const addOrder = async(req, res, next) => {
    try {
        if (req.body.gigId) {
            const { gigId } = req.body;
            const prisma = new PrismaClient();
            return res.status(200).json({ gig });

        }

        return res.status(400).send("GigId is required.");
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal server error");
    }
}