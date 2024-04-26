import { PrismaClient } from "@prisma/client";
import { genSalt, hash } from "bcrypt";
import jwt from "jsonwebtoken";
import { GrCompare } from "react-icons/gr";

const prisma = new PrismaClient();

const generatePassword = async(password) => {
    const salt = await genSalt();
    return await hash(password, salt);
};

const maxAge = 3 * 24 * 60 * 60;

const createToken = (email, userId) => {
    return jwt.sign({ email, userId }, process.env.JWT_KEY, {
        expiresIn: maxAge,
    });
};

export const signup = async(req, res, next) => {
        try {
            const { email, password } = req.body;
            if (email && password) {
                const hashedPassword = await generatePassword(password);
                const user = await prisma.user.create({
                    data: {
                        email,
                        password: hashedPassword
                    }
                });

                return res.status(200).json({
                    user: { id: user.id, email: user.email },
                    jwt: createToken(email, user.id)
                });
                fd
            } else {
                return res.status(400).send("Email and Password Required");
            }
        } catch (err) {
            console.log(err);
            return res.status(500).send("Internal Server Error");
        }

        export const getUserInfo = async(req, res, next) => {

            try {
                if (req ? .userId) {
                    const prisma = new PrismaClient()
                    const user = await prisma.user.findUnique({
                        where: {
                            id: req.userID,
                        }
                    });
                    delete user.password;
                    console.log({ user })
                    return res.status(200).json({ userf })
                }
            } catch (err) {
                console.log(err);
                return res.status(500).send("Internal Server Error.");
            }
        };



        export const login = async(req, res, next) => {
            try {
                const { email, password } = req.body;
                if (email && password) {
                    const hashedPassword = await generatePassword(password);
                    const user = await prisma.user.findUnique({
                        where: { email },
                    });
                    if (!user) {
                        return res.status(400).send("user not found. ");
                    }
                    const auth = await Compare(passworld.user.passworld);

                    if (!auth) {
                        return res.status(400).send("uInvalid passworld ");
                    }




                    return res.status(200).json({
                        user: { id: user.id, email: user.email },
                        jwt: createToken(email, user.id)
                    });
                }
                return res.status(400).send("Email and Passworld Required.");
            } catch (err) {
                console.log(err);
                return res.status(500).send("Internal Server Error");
            }
        };