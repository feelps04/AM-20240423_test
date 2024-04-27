import { PrismaClient } from "@prisma/client";
import { genSalt, hash } from "bcrypt";
import { renameSync } from "fs";
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
                return res.status(200).json({ user })
            }
        } catch (err) {
            console.log(err);
            return res.status(500).send("Internal Server Error.");
        }
    };

    export const setUserInfo = async(req, res, next) => {
        try {
            if (req ? .userId) {
                const { userName, fullName, description } = req.body;
                if (userName && fullName && description) {
                    const prisma = new PrismaClient();
                    const userNameValid = await prisma.user.findUnique({
                        where: { username: userName },
                    });
                    if (userNameValid) {
                        return res.status(200).json({ userNameError: true });
                    }

                    await prisma.user.update({
                        where: { id: req.userId },
                        data: {
                            username: userName,
                            fullName: fullName,
                            description: description,
                            isProfileInfoSet: true,
                        },
                    });
                    return res.status(200).send("Profile data updated successfully");
                } else {
                    return res.status(400).send("Username, Full Name and Description should be included.");
                }
            }

            const prisma = new PrismaClient();
            const user = await prisma.user.findUnique({
                where: { id: req.userId },
            });

        } catch (err) {
            if (err instanceof Prisma.PrismaClientKnownRequestError) {
                if (err.code === "P2002") {
                    return res.status(400).json({ userNameError: true });
                }
            } else {
                return res.status(500).send("Internal Server Error");
            }
            throw err;
        }
    };


    export const setUserImage = async(req, res, next) => {
        try {
            if (req.file) {
                if (req.userId) {
                    console.log(req.file); // Corrigido o uso do console.log
                    const date = Date.now();
                    let fileName = "uploads/profiles/" + date + req.file.originalname;
                    renameSync(req.file.path, fileName);
                    const prisma = new PrismaClient();
                    await prisma.user.update({
                        where: { id: req.userId },
                        data: { profileImage: fileName }
                    });
                    return res.status(200).json({ img: fileName })
                }

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
                    return res.status(400).send("user not found.");
                }
                const auth = await Compare(password, user.password);
                if (!auth) {
                    return res.status(400).send("Invalid password.");
                }
                return res.status(200).json({
                    user: { id: user.id, email: user.email },
                    jwt: createToken(email, user.id)
                });
            }
            return res.status(400).send("Email and Password Required.");
        } catch (err) {
            console.log(err);
            return res.status(500).send("Internal Server Error.");
        }
    };

};